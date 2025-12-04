import { View, Text, StyleSheet } from 'react-native';
import type { Transaction } from '../../types';

interface Props {
  item?: Transaction;
}

export const TransactionItem = ({ item }: Props) => {
  const defaultTransaction: Transaction = {
    id: 'default-id',
    type: 'expense',
    amount: 150.00,
    category: 'Compras',
    date: new Date().toISOString(),
    description: 'Compra en supermercado',
  };

  const transaction = item || defaultTransaction;
  const isIncome = transaction?.type === 'income';

  const formattedAmount =
    (isIncome ? '+ S/ ' : '- S/ ') + transaction?.amount.toFixed(2);

  return (
    <View style={styles.card}>
      <View style={styles.leftSection}>
        <View style={[styles.categoryChip, { backgroundColor: isIncome ? '#11C76F' : '#FF4D4D' }]}>
          <Text style={styles.categoryText}>{transaction?.category}</Text>
        </View>
        <View style={{}}>
            <Text style={styles.description}>{transaction?.description}</Text>
            <Text style={styles.date}>
            {new Date(transaction!.date).toLocaleDateString('es-PE', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
            })}
            </Text>
        </View>
      </View>
      <Text
        style={[
          styles.amount,
          { color: isIncome ? '#11C76F' : '#FF4D4D' },
        ]}
      >
        {formattedAmount}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    marginVertical: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  leftSection: {
    flex: 1,
    display: 'flex', 
    flexDirection: 'row',
    gap: 12
  },
  categoryChip: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 10,
    marginBottom: 4,
    marginVertical: 'auto',
  },
  categoryText: {
    fontSize: 11,
    color: '#ffffffff',
  },
  description: {
    fontSize: 15,
    fontWeight: '600',
  },
  date: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
  amount: {
    fontSize: 15,
    fontWeight: '700',
    alignSelf: 'center',
  },
});
