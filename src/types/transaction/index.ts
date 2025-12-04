export type Transaction = {
    type: 'income' | 'expense';
    amount: number;
    category: string;
    date: string; // ISO date string
    description: string;
}

export type Button = {
    onClick?: () => void;
    title?: string;
    type?: 'primary' | 'secondary';
}