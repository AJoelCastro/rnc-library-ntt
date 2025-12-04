import Foundation
import UIKit
@objcMembers public class DeviceUtils: NSObject {
  
 public func getDeviceInfo() -> [String: Any] {
      return [
        "deviceName": UIDevice.current.name,
        "deviceModel": UIDevice.current.model,
        "systemVersion": UIDevice.current.systemVersion,
        "isTablet": UIDevice.current.userInterfaceIdiom == .pad
      ]
    }
}