#import "RncLibraryNtt.h"
#import "RncLibraryNtt-Swift.h"



@implementation RncLibraryNtt{
  DeviceUtils *_deviceUtils;
}

- (instancetype)init
{
  self = [super init];
  if (self) {
    _deviceUtils = [[DeviceUtils alloc] init];
  }
  return self;
}

- (nonnull NSDictionary *)getDeviceInfo {
  return [_deviceUtils getDeviceInfo];
}

- (NSNumber *)multiply:(double)a b:(double)b {
    NSNumber *result = @(a * b);

    return result;
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeRncLibraryNttSpecJSI>(params);
}

+ (NSString *)moduleName
{
  return @"RncLibraryNtt";
}

@end
