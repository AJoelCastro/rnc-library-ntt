export type ButtonType = {
    onClick?: () => void;
    title?: string;
    type?: 'primary' | 'secondary';
}