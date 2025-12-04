import RncLibraryNtt, { type DeviceInfo } from './NativeRncLibraryNtt';
import { TransactionItem } from './components/transaction/TransactionItem';
import Button from './components/button/Button';
import Password from './components/password/Password';
import Modal from './components/modal/Modal';

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