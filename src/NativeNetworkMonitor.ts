import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';
import type { ConnectionInfo } from './modules/NetworkMonitor/types';

export interface Spec extends TurboModule {
  getCurrentState(): Promise<ConnectionInfo>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('NetworkMonitor');