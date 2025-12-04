import { FlatList, View, StyleSheet } from 'react-native';
import { TransactionItem } from './TransactionItem';
import type { Transaction } from '../../types';
import { TransactionHeader } from './TransactionHeader';

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
];

export const TransactionsList = ({ transactions }: Props) => {
  const tx = transactions && transactions.length ? transactions : defaultTransactions;

  return (
    <View style={styles.container}>
      <TransactionHeader transactions={tx} />
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
