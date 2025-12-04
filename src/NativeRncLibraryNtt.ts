import { TurboModuleRegistry, type TurboModule } from 'react-native';
//import  { type DeviceInfo } from './interfaces';
export interface DeviceInfo {
  deviceName: string;
  deviceModel: string;
  systemVersion: string;
  isTablet: boolean;
}
export interface Spec extends TurboModule {
  multiply(a: number, b: number): number;
  getDeviceInfo(): DeviceInfo;
}

export default TurboModuleRegistry.getEnforcing<Spec>('RncLibraryNtt');
