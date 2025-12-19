import RncLibraryNtt, { type DeviceInfo } from './NativeRncLibraryNtt';
import { Button, type ButtonType, ModalComponent, InputPassword, Header, Selector, InputEmail, InputWithDelete } from './modules/shared';
import { TransactionItem, type Transaction, TransactionHeader, TransactionsList, Card, ServiceItem, type ServiceItemProps } from './modules/Transaction';
import { ConfigItem } from './modules/configuration';
import { ChatSession } from './design';
import { ConnectionBadge, NetworkStatusCard, useNetworkMonitor, type ConnectionInfo } from './modules/NetworkMonitor';
import { SecureStorage } from './modules/SecureStorage/store/SecureStorage';

export function getDeviceInfo(): DeviceInfo {
  return RncLibraryNtt.getDeviceInfo();
}

// Exportar constantes útiles
export const APP_VERSION = '1.0.0';

export {
  TransactionItem,
  type Transaction,
  TransactionsList,
  TransactionHeader,
  Button,
  InputPassword,
  ModalComponent,
  Selector,
  type ButtonType,
  Header,
  InputEmail,
  InputWithDelete,
  Card,
  ConfigItem,
  ChatSession,
  ConnectionBadge,
  NetworkStatusCard,
  useNetworkMonitor,
  type ConnectionInfo,
  SecureStorage,
  ServiceItem,
  type ServiceItemProps
}