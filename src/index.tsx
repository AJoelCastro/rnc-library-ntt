import RncLibraryNtt from './NativeRncLibraryNtt';
import { useNetworkMonitor } from './modules/NetworkMonitor';
import { SecureStorage } from './modules/SecureStorage/store/SecureStorage';
import type { Message, CardType, ModalType, SelectorItem, ConnectionInfo } from './types'
import { ChatSession, ConnectionBadge, NetworkStatusCard, ConfigItem, TransactionItem, TransactionHeader, TransactionsList, Card, ServiceItem, Button, ModalComponent, InputPassword, Header, Selector, InputEmail, InputWithDelete } from './design'
import type { SendButtonProps, CardProps, TransactionHeaderListProps, TransactionItemProps, ButtonProps, ModalProps, EmailProps, HeaderProps, InputWithDeleteProps, PasswordProps, SelectorProps, ConfigItemProps, ConnectionBadgeProps, DeviceInfo, ButtonType, Transaction, ServiceItemProps } from './interfaces'

export function getDeviceInfo(): DeviceInfo {
  return RncLibraryNtt.getDeviceInfo();
}

// Exportar constantes útiles
export const APP_VERSION = '1.0.0';

export {
  TransactionItem,
  TransactionsList,
  TransactionHeader,
  Button,
  InputPassword,
  ModalComponent,
  Selector,
  Header,
  InputEmail,
  InputWithDelete,
  Card,
  ConfigItem,
  ChatSession,
  ConnectionBadge,
  NetworkStatusCard,
  useNetworkMonitor,
  type ButtonType,
  type Transaction,
  type ConnectionInfo,
  type SelectorItem,
  type ModalType,
  type CardType,
  type Message,
  type ServiceItemProps,
  type SendButtonProps,
  type CardProps,
  type TransactionHeaderListProps,
  type TransactionItemProps,
  type ButtonProps,
  type ModalProps,
  type EmailProps,
  type HeaderProps,
  type InputWithDeleteProps,
  type PasswordProps,
  type SelectorProps,
  type ConfigItemProps,
  type ConnectionBadgeProps,
  SecureStorage,
  ServiceItem,
}