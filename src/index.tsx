import RncLibraryNtt, { type DeviceInfo } from './NativeRncLibraryNtt';
import { Button, type ButtonType, ModalComponent, InputPassword, Header, Selector, InputEmail, InputWithDelete } from './modules/shared';
import { TransactionItem, type Transaction, TransactionHeader, TransactionsList, Card, ServiceItem } from './modules/transaction';
import { ConfigItem } from './modules/configuration';
import { ChatSession } from './modules/chat';
import { ConnectionBadge, NetworkStatusCard, useNetworkMonitor, type ConnectionInfo } from './modules/network_monitor';
import { SecureStorage } from './modules/secure_storage/store/SecureStorage';

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
  ServiceItem
}