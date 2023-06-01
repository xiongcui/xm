//
//  NetworkAccessibility.m
//

#import "NetworkAccessibility.h"
#import "NetworkTipsViewController.h"
#import <UIKit/UIKit.h>
#import <SystemConfiguration/CaptiveNetwork.h>
#import <CoreTelephony/CTTelephonyNetworkInfo.h>
#import <CoreTelephony/CTCellularData.h>
#import <SystemConfiguration/SystemConfiguration.h>

#import <netdb.h>
#import <sys/socket.h>
#import <netinet/in.h>

#import <ifaddrs.h>

#import <arpa/inet.h>


NSString * const NetworkAccessibilityChangedNotification = @"NetworkAccessibilityChangedNotification";

typedef NS_ENUM(NSInteger, NetworkType) {
    NetworkTypeUnknown ,
    NetworkTypeOffline ,
    NetworkTypeWiFi    ,
    NetworkTypeCellularData ,
};

@interface NetworkAccessibility(){
    SCNetworkReachabilityRef _reachabilityRef;
    CTCellularData *_cellularData;
    NSMutableArray *_becomeActiveCallbacks;
    NetworkAccessibleState _previousState;
    NetworkTipsViewController *_networkTipsController;
    BOOL _automaticallyAlert;
    NetworkAccessibleStateNotifier _networkAccessibleStateDidUpdateNotifier;
    BOOL _checkActiveLaterWhenDidBecomeActive;
    BOOL _checkingActiveLater;
}


@end

@interface NetworkAccessibility()
@end


@implementation NetworkAccessibility


#pragma mark - Public

+ (void)start {
    [[self sharedInstance] setupNetworkAccessibility];
}

+ (void)stop {
    [[self sharedInstance] cleanNetworkAccessibility];
}

+ (void)setAlertEnable:(BOOL)setAlertEnable {
    [self sharedInstance]->_automaticallyAlert = setAlertEnable;
}


+ (void)setStateDidUpdateNotifier:(void (^)(NetworkAccessibleState))block {
    [[self sharedInstance] monitorNetworkAccessibleStateWithCompletionBlock:block];
}

+ (NetworkAccessibleState)currentState {
    return [[self sharedInstance] currentState];
}

#pragma mark - Public entity method


+ (NetworkAccessibility *)sharedInstance {
    static NetworkAccessibility * instance = nil;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        instance = [[self alloc] init];
    });
    return instance;
}


- (void)setNetworkAccessibleStateDidUpdateNotifier:(NetworkAccessibleStateNotifier)networkAccessibleStateDidUpdateNotifier {
    _networkAccessibleStateDidUpdateNotifier = [networkAccessibleStateDidUpdateNotifier copy];
    [self startCheck];
}



- (void)monitorNetworkAccessibleStateWithCompletionBlock:(void (^)(NetworkAccessibleState))block {
    _networkAccessibleStateDidUpdateNotifier = [block copy];
}

- (NetworkAccessibleState)currentState {
    return _previousState;
}

#pragma mark - Life cycle

- (void)dealloc {
    [[NSNotificationCenter defaultCenter] removeObserver:self];
}

- (instancetype)init {
    if (self = [super init]) {
        
    }
    return self;
}

#pragma mark - NSNotification

- (void)setupNetworkAccessibility {
    
    if (_reachabilityRef || _cellularData) {
        return;
    }
    

    if ([self isSimulator]) {
        [self notiWithAccessibleState:NetworkAccessible];
        return;
    }
    
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(applicationWillResignActive) name:UIApplicationWillResignActiveNotification object:nil];
    
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(applicationDidBecomeActive) name:UIApplicationDidBecomeActiveNotification object:nil];
    
    _reachabilityRef = SCNetworkReachabilityCreateWithName(NULL, "multiplatform-app.preview.wxcloudrun.com");
    SCNetworkReachabilityScheduleWithRunLoop(_reachabilityRef, CFRunLoopGetCurrent(), kCFRunLoopDefaultMode);
    

    _becomeActiveCallbacks = [NSMutableArray array];
    
    BOOL firstRun = ({
        static NSString * RUN_FLAG = @"SaaANetworkAccessibilityRunFlag";
        BOOL value = [[NSUserDefaults standardUserDefaults] boolForKey:RUN_FLAG];
        if (!value) {
            [[NSUserDefaults standardUserDefaults] setBool:YES forKey:RUN_FLAG];
        }
        !value;
    });
    
    dispatch_block_t startNotifier = ^{
        [self startReachabilityNotifier];
        
        [self startCellularDataNotifier];
    };
    
    if (firstRun) {
        dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(3 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
            [self waitActive:^{
                startNotifier();
            }];
        });
    } else {
        startNotifier();
    }
    
    
}

- (void)cleanNetworkAccessibility {
    
    [[NSNotificationCenter defaultCenter] removeObserver:self];
    
    _cellularData.cellularDataRestrictionDidUpdateNotifier = nil;
    _cellularData = nil;
    
    SCNetworkReachabilityUnscheduleFromRunLoop(_reachabilityRef, CFRunLoopGetMain(), kCFRunLoopCommonModes);
    _reachabilityRef = nil;
    
    [self cancelEnsureActive];
    [self hideNetworkRestrictedAlert];
    
    [_becomeActiveCallbacks removeAllObjects];
    _becomeActiveCallbacks = nil;
    
    _previousState = NetworkChecking;
    
    _checkActiveLaterWhenDidBecomeActive = NO;
    _checkingActiveLater = NO;
    
}


- (void)applicationWillResignActive {
    
    if (_checkingActiveLater) {
        [self cancelEnsureActive];
        _checkActiveLaterWhenDidBecomeActive = YES;
    }
}

- (void)applicationDidBecomeActive {
    
    if (_checkActiveLaterWhenDidBecomeActive) {
        [self checkActiveLater];
        _checkActiveLaterWhenDidBecomeActive = NO;
    }
}


#pragma mark - Active Checker
- (void)waitActive:(dispatch_block_t)block {
    [_becomeActiveCallbacks addObject:[block copy]];
    if ([UIApplication sharedApplication].applicationState != UIApplicationStateActive) {
       _checkActiveLaterWhenDidBecomeActive = YES;
    } else {
        [self checkActiveLater];
    }
}

- (void)checkActiveLater {
    _checkingActiveLater = YES;
    [self performSelector:@selector(ensureActive) withObject:nil afterDelay:2 inModes:@[NSRunLoopCommonModes]];
}

- (void)ensureActive {
    _checkingActiveLater = NO;
    for (dispatch_block_t block in _becomeActiveCallbacks) {
        block();
    }
    [_becomeActiveCallbacks removeAllObjects];
}

- (void)cancelEnsureActive {
    [NSObject cancelPreviousPerformRequestsWithTarget:self selector:@selector(ensureActive) object:nil];
}


#pragma mark - Reachability

static void ReachabilityCallback(SCNetworkReachabilityRef target, SCNetworkReachabilityFlags flags, void* info) {
    NetworkAccessibility *networkAccessibility = (__bridge NetworkAccessibility *)info;
    if (![networkAccessibility isKindOfClass: [NetworkAccessibility class]]) {
        return;
    }
    [networkAccessibility startCheck];
}

- (void)startReachabilityNotifier {
    SCNetworkReachabilityContext context = {0, (__bridge void *)(self), NULL, NULL, NULL};
    if (SCNetworkReachabilitySetCallback(_reachabilityRef, ReachabilityCallback, &context)) {
        SCNetworkReachabilityScheduleWithRunLoop(_reachabilityRef, CFRunLoopGetCurrent(), kCFRunLoopDefaultMode);
    }
}

- (void)startCellularDataNotifier {
    __weak __typeof(self)weakSelf = self;
    self->_cellularData = [[CTCellularData alloc] init];
    self->_cellularData.cellularDataRestrictionDidUpdateNotifier = ^(CTCellularDataRestrictedState state) {
        dispatch_async(dispatch_get_main_queue(), ^{
            [weakSelf startCheck];
        });
    };
}

- (BOOL)currentReachable {
    SCNetworkReachabilityFlags flags;
    if (SCNetworkReachabilityGetFlags(self->_reachabilityRef, &flags)) {
        if ((flags & kSCNetworkReachabilityFlagsReachable) == 0) {
            return NO;
        } else {
            return YES;
        }
    }
    return NO;
}


#pragma mark - Check Accessibility

- (void)startCheck {
    
    if ([self currentReachable]) {
        return [self notiWithAccessibleState:NetworkAccessible];
    }
    
    CTCellularDataRestrictedState state = _cellularData.restrictedState;
    
    switch (state) {
        case kCTCellularDataRestricted: {
            [self notiWithAccessibleState:NetworkRestricted];
            break;
        }
        case kCTCellularDataNotRestricted:
            [self notiWithAccessibleState:NetworkAccessible];
            break;
        case kCTCellularDataRestrictedStateUnknown: {
            dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(0.1 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
                [self startCheck];
            });
            break;
        }
        default:
            break;
    };
}

- (BOOL)isSimulator {
#if TARGET_OS_SIMULATOR
    BOOL isSimulator = YES;
#else
    BOOL isSimulator = NO;
#endif
    return isSimulator;
}

#pragma mark - Callback

- (void)notiWithAccessibleState:(NetworkAccessibleState)state {
    if (_automaticallyAlert) {
        if (state == NetworkRestricted) {
                [self showNetworkRestrictedAlert];
        } else {
            [self hideNetworkRestrictedAlert];
        }
    }
    
    if (state != _previousState) {
        _previousState = state;
        
        if (_networkAccessibleStateDidUpdateNotifier) {
            _networkAccessibleStateDidUpdateNotifier(state);
        }
        
        [[NSNotificationCenter defaultCenter] postNotificationName:NetworkAccessibilityChangedNotification object:nil];
        
    }
}


- (void)showNetworkRestrictedAlert {
    if (self.networkTipsController.presentingViewController == nil && ![self.networkTipsController isBeingPresented]) {
        [[UIApplication sharedApplication].keyWindow.rootViewController presentViewController:self.networkTipsController animated:YES completion:nil];
    }
}

- (void)hideNetworkRestrictedAlert {
    [_networkTipsController dismissViewControllerAnimated:YES completion:nil];
}

- (NetworkTipsViewController *)networkTipsController {
    if (!_networkTipsController) {
        _networkTipsController = [[NetworkTipsViewController alloc] init];
        _networkTipsController.modalPresentationStyle = UIModalPresentationOverFullScreen;
    }
    return _networkTipsController;
}



@end
