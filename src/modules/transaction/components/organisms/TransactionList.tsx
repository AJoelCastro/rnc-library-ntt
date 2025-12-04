import { FlatList, View, StyleSheet } from 'react-native';
import { TransactionItem } from './TransactionItem';
import type { Transaction } from '../../types';
import { TransactionsHeader } from './TransactionHeader';

interface Props {
  transactions?: Transaction[];
}

export const TransactionsList = ({ transactions }: Props) => {
  return (
    <View style={styles.container}>
      <TransactionsHeader transactions={transactions} />
      <FlatList
        data={transactions.slice(0, 10)}
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
