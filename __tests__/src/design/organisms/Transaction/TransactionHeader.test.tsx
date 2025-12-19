import { render } from '@testing-library/react-native';
import { TransactionHeader } from '@/src/design/organisms/Transaction/TransactionHeader';
import type { Transaction } from '@/src/interfaces';

describe('TransactionHeader', () => {
    it('renders summary correctly', () => {
        // 1 pass: 100 income, 50 expense -> +100.00, -50.00
        const transactions: Transaction[] = [
            { id: '1', type: 'income', amount: 100, category: 'C', date: '', description: 'D' },
            { id: '2', type: 'expense', amount: 50, category: 'C', date: '', description: 'D' },
        ];

        const { getByText } = render(<TransactionHeader transactions={transactions} />);

        expect(getByText('+ S/ 100.00')).toBeTruthy();
        expect(getByText('- S/ 50.00')).toBeTruthy();
        expect(getByText('Mostrando 2 de 2 transacciones')).toBeTruthy();
    });

    it('renders default transactions if none provided', () => {
        const { getByText } = render(<TransactionHeader transactions={[]} />);
        // Defaults exist in code. Just checking it renders something.
        expect(getByText('Transacciones Recientes')).toBeTruthy();
    });
});
