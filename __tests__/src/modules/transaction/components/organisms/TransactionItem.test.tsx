import { render } from '@testing-library/react-native';
import { TransactionItem } from '@/modules/transaction/components/organisms/TransactionItem';
import type { Transaction } from '@/modules/transaction/interfaces';

describe('TransactionItem', () => {
    it('renders income transaction', () => {
        const item: Transaction = {
            id: '1',
            type: 'income',
            amount: 200,
            category: 'Salary',
            date: '2023-12-01T10:00:00Z',
            description: 'Monthly Salary'
        };
        const { getByText } = render(<TransactionItem item={item} />);

        expect(getByText('Monthly Salary')).toBeTruthy();
        expect(getByText('+ S/ 200.00')).toBeTruthy();
        expect(getByText('Salary')).toBeTruthy();
    });

    it('renders expense transaction', () => {
        const item: Transaction = {
            id: '2',
            type: 'expense',
            amount: 50.50,
            category: 'Food',
            date: '2023-12-02T10:00:00Z',
            description: 'Lunch'
        };
        const { getByText } = render(<TransactionItem item={item} />);

        expect(getByText('Lunch')).toBeTruthy();
        expect(getByText('- S/ 50.50')).toBeTruthy();
    });

    it('renders default transaction when item is undefined', () => {
        // @ts-ignore - simulating missing prop if possible or just passing undefined
        const { getByText } = render(<TransactionItem item={undefined as any} />);
        // Defaults: expense, 150.00, Compras, Compra en supermercado
        expect(getByText('Compra en supermercado')).toBeTruthy();
        expect(getByText('- S/ 150.00')).toBeTruthy();
    });
});
