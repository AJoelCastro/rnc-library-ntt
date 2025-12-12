export interface ConnectionBadgeProps {
  type: 'wifi' | 'cellular' | 'none' | 'unknown';
  isConnected: boolean;
}