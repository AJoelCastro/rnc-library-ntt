import { FlatList, View, StyleSheet } from 'react-native';
import { TransactionItem } from './TransactionItem';
import type { Transaction } from '../../types';
import { TransactionsHeader } from './TransactionHeader';

interface Props {
  transactions?: Transaction[];
}

const defaultTransactions: Transaction[] = [
  {
    id: 'tx-1',
    type: 'income',
    amount: 1200.0,
    category: 'Sueldo',
    date: new Date().toISOString(),
    description: 'Pago mensual',
  },
  {
    id: 'tx-2',
    type: 'expense',
    amount: 150.5,
    category: 'Compras',
    date: new Date().toISOString(),
    description: 'Supermercado',
  },
  {
    id: 'tx-3',
    type: 'expense',
    amount: 60.0,
    category: 'Transporte',
    date: new Date().toISOString(),
    description: 'Taxi',
  },
  {
    id: 'tx-4',
    type: 'income',
    amount: 200.0,
    category: 'Ventas',
    date: new Date().toISOString(),
    description: 'Venta de ropa',
  },
  {
    id: 'tx-5',
    type: 'expense',
    amount: 30.0,
    category: 'Comida',
    date: new Date().toISOString(),
    description: 'Almuerzo',
  },
  {
    id: 'tx-6',
    type: 'expense',
    amount: 45.0,
    category: 'Entretenimiento',
    date: new Date().toISOString(),
    description: 'Cine',
  },
  {
    id: 'tx-7',
    type: 'income',
    amount: 80.0,
    category: 'Freelance',
    date: new Date().toISOString(),
    description: 'Proyecto pequeño',
  },
  {
    id: 'tx-8',
    type: 'expense',
    amount: 25.0,
    category: 'Cafetería',
    date: new Date().toISOString(),
    description: 'Café y snack',
  },
  {
    id: 'tx-9',
    type: 'expense',
    amount: 300.0,
    category: 'Ropa',
    date: new Date().toISOString(),
    description: 'Zapatillas',
  },
  {
    id: 'tx-10',
    type: 'income',
    amount: 50.0,
    category: 'Regalo',
    date: new Date().toISOString(),
    description: 'Cumpleaños',
  },
];

export const TransactionsList = ({ transactions }: Props) => {
  const tx = transactions && transactions.length ? transactions : defaultTransactions;

  return (
    <View style={styles.container}>
      <TransactionsHeader transactions={tx} />
      <FlatList
        data={tx.slice(0, 10)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TransactionItem item={item} />}
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
