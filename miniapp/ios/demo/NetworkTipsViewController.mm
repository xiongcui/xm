#import "NetworkTipsViewController.h"

@interface NetworkTipsViewController () <UITextFieldDelegate, UIGestureRecognizerDelegate>
@property (nonatomic, strong) UIView *popupView;


@end

@implementation NetworkTipsViewController


- (instancetype)init {
    if (self = [super init]) {
        [self initMainView];
        [self initPopupView];
    }
    return self;
}

- (void)viewDidLoad {
    [super viewDidLoad];
    
}

- (void) initMainView {
    self.view.backgroundColor = [UIColor whiteColor];

    float centerX = self.view.frame.size.width / 2.0;
    
    UIImageView *imageView = [[UIImageView alloc] init];
    imageView.frame = CGRectMake(centerX - 45, 255, 90, 90);
    [imageView setImage:[UIImage imageNamed:@"disconnect"]];
    [self.view addSubview:imageView];

    
    UILabel *tipsLabel = [[UILabel alloc] initWithFrame:CGRectMake(centerX - 100, 371, 200, 20)];
    tipsLabel.text = @"检测到网络权限可能未开启";
    tipsLabel.textAlignment = NSTextAlignmentCenter;
    tipsLabel.font = [UIFont systemFontOfSize:14];
    tipsLabel.textColor = [UIColor colorWithRed:17/255.0 green:17/255.0 blue:17/255.0 alpha:1/1.0];
    [self.view addSubview:tipsLabel];
    
    UIButton* mainBtn = [[UIButton alloc] initWithFrame:CGRectMake(centerX - 92, self.view.frame.size.height - 196, 184, 48)];
    mainBtn.backgroundColor = [UIColor colorWithRed: 0.97 green: 0.97 blue: 0.97 alpha: 1.00];
    mainBtn.layer.cornerRadius = 24;
    [mainBtn setTitle:@"前往设置" forState:UIControlStateNormal];
    [mainBtn setTitleColor:[UIColor colorWithRed:250/255.0 green:157/255.0 blue:59/255.0 alpha:1/1.0] forState:UIControlStateNormal];
    
    [mainBtn addTarget:self action:@selector(openSetting) forControlEvents:UIControlEventTouchUpInside];
    
    [self.view addSubview:mainBtn];
    
    UIButton *linkBtn = [[UIButton alloc] initWithFrame: CGRectMake(centerX - 45, self.view.frame.size.height - 116, 90, 20)];
    [linkBtn setTitle:@"查看解决办法" forState:UIControlStateNormal];
    [linkBtn setTitleColor:[UIColor colorWithRed:87/255.0 green:107/255.0 blue:149/255.0 alpha:1/1.0] forState:UIControlStateNormal];
    linkBtn.titleLabel.font = [UIFont systemFontOfSize:14];

//    linkBtn.font = [UIFont fontWithName:@"PingFang SC" size:14];
//    linkBtn.textColor = [UIColor colorWithRed:87/255.0 green:107/255.0 blue:149/255.0 alpha:1/1.0];
    [linkBtn addTarget:self action:@selector(showPopup) forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:linkBtn];
}

- (void)initPopupView {
    _popupView = [[UIView alloc] initWithFrame:self.view.bounds];
    _popupView.backgroundColor = [UIColor colorWithRed: 0.00 green: 0.00 blue: 0.00 alpha: 0.55];
    [self.view addSubview:_popupView];

    UIView* bgView = [[UIView alloc] initWithFrame:CGRectMake(0, self.view.bounds.size.height - 450, self.view.bounds.size.width, 450)];
    bgView.backgroundColor = [UIColor whiteColor];
    [_popupView addSubview:bgView];
    
    UILabel* titleLabel = [[UILabel alloc] initWithFrame:CGRectMake(25, self.view.bounds.size.height - 415, self.view.bounds.size.width - 50, 31)];
    titleLabel.text = @"网络设置参照方法";
    titleLabel.font = [UIFont systemFontOfSize:22];
    titleLabel.textColor = [UIColor blackColor];
    [_popupView addSubview:titleLabel];

    
    UILabel *descLabel = [[UILabel alloc] initWithFrame:CGRectMake(25, self.view.bounds.size.height - 368, self.view.bounds.size.width - 50, 168)];
    NSString* labelText = @"1.点击前往设置，查看是否允许应用使用蜂窝数据。\n2.检查设备的“设置”-“无线局域网”设置，查看是否有可接入的无线局域网信号。\n3.检查设备是否启用了蜂窝数据(启用后运营商可能会收取数据通信费用）。\n4.如果你已接入无线局域网络：请检查你所连接的网络是否已接入互联网，或该网络是否已允许你的设备访问互联网。";
    descLabel.font = [UIFont systemFontOfSize:15];
    descLabel.textColor = [UIColor blackColor];
    descLabel.numberOfLines = 0;
    descLabel.textAlignment = NSTextAlignmentLeft;
    
    NSMutableAttributedString *attributedString = [[NSMutableAttributedString alloc] initWithString:labelText];
    NSMutableParagraphStyle *paragraphStyle = [[NSMutableParagraphStyle alloc] init];
    [paragraphStyle setLineSpacing:8];
    [attributedString addAttribute:NSParagraphStyleAttributeName value:paragraphStyle range:NSMakeRange(0, [labelText length])];
    descLabel.attributedText = attributedString;
    [descLabel sizeToFit];
    
    
    [_popupView addSubview:descLabel];
    
    UIButton* btn = [[UIButton alloc] initWithFrame:CGRectMake(self.view.bounds.size.width / 2 - 92, self.view.bounds.size.height - 106, 184, 48)];
    btn.backgroundColor = [UIColor colorWithRed: 0.98 green: 0.62 blue: 0.23 alpha: 1.00];
    btn.layer.cornerRadius = 24;
    [btn setTitle:@"知道了" forState:UIControlStateNormal];
    [btn setTitleColor:[UIColor whiteColor] forState:UIControlStateNormal];
    
    [btn addTarget:self action:@selector(closePopup) forControlEvents:UIControlEventTouchUpInside];
    [_popupView addSubview:btn];
    _popupView.hidden = YES;
}

- (void)showPopup {
    _popupView.hidden = NO;
    NSLog(@"showPopup");
}

- (void)closePopup {
    _popupView.hidden = YES;
    NSLog(@"closePopup");
}

- (void)openSetting {
    NSURL *settingsURL = [NSURL URLWithString:UIApplicationOpenSettingsURLString];
    if([[UIApplication sharedApplication] canOpenURL:settingsURL]) {
        [[UIApplication sharedApplication] openURL:settingsURL];
    }
}


- (void)viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];
    [[UIApplication sharedApplication] setStatusBarStyle:UIStatusBarStyleDefault];
}
@end
