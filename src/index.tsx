import RncLibraryNtt, { type DeviceInfo } from './NativeRncLibraryNtt';
import { useNetworkMonitor } from './modules/NetworkMonitor';
import { SecureStorage } from './modules/SecureStorage/store/SecureStorage';
import type { ConnectionInfo, } from './types'
import { ChatSession, ConnectionBadge, NetworkStatusCard, ConfigItem, TransactionItem, TransactionHeader, TransactionsList, Card, ServiceItem, Button, ModalComponent, InputPassword, Header, Selector, InputEmail, InputWithDelete } from './design'
import type { ServiceItemProps, Transaction, ButtonType } from './interfaces'

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