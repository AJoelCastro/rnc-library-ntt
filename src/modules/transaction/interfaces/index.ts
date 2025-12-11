import type { ViewStyle } from "react-native"
import type { CardType } from "../types"

// MOLECULES INTERFACES

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
