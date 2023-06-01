#import "RootViewController.h"
#import <WeAppSDK/WeAppSDK.h>
#import "CommonDefine.h"
#import "NetworkAccessibility.h"
#import "NetworkTipsViewController.h"

@interface RootViewController () <UITextFieldDelegate>

@property (nonatomic, strong) NSDictionary *extParams;
@property BOOL isWaitingNetworkAccessibleToOpenModule;
@property BOOL isLaunching;
@property BOOL isLaunched;
@end

@implementation RootViewController

- (instancetype)init {
    if (self = [super init]) {
    }
    return self;
}

- (void)viewDidLoad {
    [super viewDidLoad];
    [self initBackgroundView];
    
    self.extParams = @{ EXTRA_PARAM_KEY_HOST_SCENE : @(1008611) };
    self.view.backgroundColor = [UIColor whiteColor];

    if ([NetworkAccessibility currentState] == NetworkChecking) {
        [WMPFApi preloadMiniProgram];
        self.isWaitingNetworkAccessibleToOpenModule = YES;
        [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(networkChanged:) name:NetworkAccessibilityChangedNotification object:nil];
        [self tryLaunchApp];
    } else {
        [self tryLaunchApp];
    }
}

- (void)networkChanged:(NSNotification *)notification {
    if (NetworkAccessibility.currentState == NetworkAccessible) {
        if (self.isWaitingNetworkAccessibleToOpenModule) {
            self.isWaitingNetworkAccessibleToOpenModule = NO;
            [self tryLaunchApp];
        }
    }
}

- (void) tryLaunchApp {
    if (self.isLaunching || self.isLaunched) return;
    NSLog(@"openAppModuleWithMiniModuleId start, %@", miniModuleId);
    self.isLaunching = YES;
    // 打开对应的模块
    [WMPFApi openAppModuleWithMiniModuleId:miniModuleId
                          enterPagePath: nil
                              debugMode:EAppDebugModeType_None
                              extraParams: @{
                                  @"moduleSetting": @{
                                      @"useNativeAnimation": @(NO),
                                      @"showCustomLoadingInfo": @(YES),
                                      @"allowExitAtFirstPage": @(NO),
                                      @"closeAppWhenExitModule": @(NO)
                                  }
                              }
                                  callback:^(NSError * _Nullable error, NSString * _Nullable appid) {
        self.isLaunching = NO;
        if (error != nil) {
            if (error.code == WMPFApiSaaAErrorCode_FailFetchSDKAttr) {
                [self performSelector:@selector(tryLaunchApp) withObject:nil afterDelay:0.5];
            }
            NSLog(@"openAppModuleWithMiniModuleId failed %@ %@", appid, error);
        } else {
            self.isLaunched = YES;
            NSLog(@"openAppModuleWithMiniModuleId success %@", appid);
        }
    }];
}

- (void)initBackgroundView {
    NSString *splashScreenImageName = [[NSBundle mainBundle] objectForInfoDictionaryKey:@"UISplashScreenImageName"];
    if ([splashScreenImageName isEqualToString:@""]) return;
    UIView *backgroundView = [[UIView alloc] initWithFrame:self.view.bounds];
    [self.view addSubview:backgroundView];
    UIImageView *imageView = [[UIImageView alloc] initWithFrame:self.view.bounds];
    UIImage *image = [UIImage imageNamed:splashScreenImageName];
    imageView.image = image;
    imageView.contentMode = UIViewContentModeScaleAspectFill;
    [backgroundView addSubview:imageView];
}

- (void)viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];
    [[UIApplication sharedApplication] setStatusBarStyle:UIStatusBarStyleDefault];
}

@end
