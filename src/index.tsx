import RncLibraryNtt, { type DeviceInfo } from './NativeRncLibraryNtt';
import { TransactionItem } from './components/organisms/transaction/TransactionItem';
import Button from './components/atoms/button';
import Password from './components/molecules/password';
import Modal from './components/atoms/modal';

export function multiply(a: number, b: number): number {
  return RncLibraryNtt.multiply(a, b);
}
export function capitalize(text: string): string {
  if (!text || text.length === 0) {
    return '';
  }
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

export function formatGreeting(name: string): string {
  return `¡Hola, ${capitalize(name)}!`;
}

export function getDeviceInfo(): DeviceInfo {
  return RncLibraryNtt.getDeviceInfo();
}

// Exportar constantes útiles
export const APP_VERSION = '1.0.0';

export {
  TransactionItem,
  Button,
  Password,
  Modal
}