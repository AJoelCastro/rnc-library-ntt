import type { ViewStyle } from "react-native"
import type { CardType } from "../types"

// CHAT

export interface SendButtonProps {
    onPress?: () => void
}



// TRANSACTION

export interface CardProps {
    type?: CardType
    amount?: string | number
    cardNumber?: string
    holderName?: string
    expiry?: string
    brand?: string
    style?: ViewStyle
}

export interface TransactionHeaderListProps {
    transactions?: Transaction[];
}

export interface TransactionItemProps {
    item?: Transaction;
}

export interface Transaction {
    id: string;
    type: 'income' | 'expense';
    amount: number;
    category: string;
    date: string; // ISO date string
    description: string;
}

export interface ServiceItemProps {
    title: string
    onPress?: () => void
}



// SHARED

import type { ModalType, SelectorItem } from "../types";

export interface DeviceInfo {
    deviceName: string;
    deviceModel: string;
    systemVersion: string;
    isTablet: boolean;
}

export interface ButtonType {
    onClick?: () => void;
    title?: string;
    type?: 'primary' | 'secondary';
}
export interface ButtonProps {
    item?: ButtonType;
    title?: string;
    onPress?: () => void;
    type?: 'primary' | 'secondary';
    disabled?: boolean
    backgroundColor?: string
    textColor?: string
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



// CONFIGURATION

export interface ConfigItemProps {
    title?: string
    subtitle?: string
    onPress?: () => void
    Icon?: React.ReactNode
    iconSize?: number
    showDivider?: boolean
    disabled?: boolean
    style?: ViewStyle
}



// NETWORK MONITOR

export interface ConnectionBadgeProps {
    type: 'wifi' | 'cellular' | 'none' | 'unknown';
    isConnected: boolean;
}