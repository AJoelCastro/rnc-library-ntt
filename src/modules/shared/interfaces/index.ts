import type { ModalType, SelectorItem } from "../types";

export interface DeviceInfo {
  deviceName: string;
  deviceModel: string;
  systemVersion: string;
  isTablet: boolean;
}

// ATOMS INTERFACES

export interface ButtonType {
    onClick?: () => void;
    title?: string;
    type?: 'primary' | 'secondary';
}
export interface ButtonProps  {
    item?: ButtonType;
    title?: string;
    onPress?: () => void;
    type?: 'primary' | 'secondary';
    disabled?: boolean
}

export interface ModalProps {
  visible: boolean
  type?: ModalType
  title?: string
  description?: string
  buttonTitle?: string
  onButtonPress?: () => void
  onClose?: () => void
}

// MOLECULES INTERFACES

export interface EmailProps {
  value?: string
  onChangeText?: (text: string) => void
  placeholder?: string
  editable?: boolean
  onValidation?: (isValid: boolean) => void
}

export interface HeaderProps {
  title?: string
  iconName?: string // Ionicons name for center icon
  onBack?: () => void // callback for back action (no navigation implemented)
}

export interface InputWithDeleteProps {
  value?: string
  onChangeText?: (text: string) => void
  placeholder?: string
  editable?: boolean
}

export interface PasswordProps {
  value?: string
  onChangeText?: (text: string) => void
  placeholder?: string
  editable?: boolean
}

export interface SelectorProps {
  items?: SelectorItem[]
  onSelect?: (item: SelectorItem) => void
  placeholder?: string
  selectedId?: string | number
}