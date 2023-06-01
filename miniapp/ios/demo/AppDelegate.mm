//
//  AppDelegate.m
//  WeAppSDK
//

#import "AppDelegate.h"
#import <WeAppSDK/WeAppSDK.h>
#import "CommonDefine.h"
#import "NetworkAccessibility.h"


@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [super application:application didFinishLaunchingWithOptions:launchOptions];
    NSArray* moduleList = @[
         @{
            @"miniModuleId": miniModuleId,
            @"miniModulePath": miniModulePath
         }
    ];
    [WMPFApi initStandAloneAppConfig:moduleList];

    [NetworkAccessibility setAlertEnable:YES];
    [NetworkAccessibility start];

    return YES;
}


- (BOOL)application:(UIApplication *)app openURL:(NSURL *)url options:(NSDictionary<UIApplicationOpenURLOptionsKey, id> *)options {
    return [super application:app openURL:url options:options];
}

- (BOOL)application:(UIApplication *)application
continueUserActivity:(NSUserActivity *)userActivity
  restorationHandler:(void (^)(NSArray<id<UIUserActivityRestoring>> *__nullable restorableObjects))restorationHandler {
    return [super application:application continueUserActivity:userActivity restorationHandler:restorationHandler];
}


#pragma mark WMPFApiManagerDelegate
- (NSString *)sdkKey {
    return sdkKey;
}

- (NSString *)sdkKeySecret {
    return sdkKeySecret;
}

#pragma mark VConsolePlaceholder start
#pragma mark VConsolePlaceholder end

#pragma mark - IWMPFFoundationProxyServiceProtocol
+ (BOOL)enableDebugLog {
    return NO;
}

+ (BOOL)shouldLog:(SInt32)level {
    return YES;
}

// 打客户端日志
+ (void)logWithLevel:(SInt32)logLevel
              module:(const char *)module
           errorCode:(UInt32)errorCode
                file:(const char *)file
                line:(int)line
                func:(const char *)functionName
             message:(NSString *)message {
    if (![self shouldLog:logLevel]) {
        return;
    }
    NSString *level = @"";
    switch (logLevel) {
        case WMPFLogLevelDebug:
            level = @"D";
            break;
        case WMPFLogLevelInfo:
            level = @"I";
            break;
        case WMPFLogLevelWarn:
            level = @"W";
            break;
        case WMPFLogLevelError:
            level = @"E";
            break;

        default:
            break;
    }

    NSLog(@"[%@][%s][%s,%d,%s] %@", level, WMPF_RETURN_STR(module), file, line, functionName, message);
}


@end
