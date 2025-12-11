import RncLibraryNtt, { type DeviceInfo } from './NativeRncLibraryNtt';
import { Button, type ButtonType, ModalComponent, Password, Header, Selector, Email, InputWithDelete } from './modules/shared';
import { TransactionItem, type Transaction, TransactionHeader, TransactionsList, Card } from './modules/transaction';
import { ConfigItem } from './modules/configuration';
import { ChatSession } from './modules/chat';
import { ConnectionBadge, NetworkStatusCard, useNetworkMonitor, type ConnectionInfo } from './modules/network-monitor';

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
  Password,
  ModalComponent,
  Selector,
  type ButtonType,
  Header,
  Email,
  InputWithDelete,
  Card,
  ConfigItem,
  ChatSession,
  ConnectionBadge,
  NetworkStatusCard,
  useNetworkMonitor,
  type ConnectionInfo,
}