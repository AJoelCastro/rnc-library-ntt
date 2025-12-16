import { FlatList, View, StyleSheet, Text } from 'react-native';
import { TransactionItem } from './TransactionItem';
import { TransactionHeader } from './TransactionHeader';
import type { Transaction, TransactionHeaderListProps } from '../../interfaces';
import { useState } from 'react';

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
    amount: 300.0,
    category: 'Freelance',
    date: new Date().toISOString(),
    description: 'Proyecto web',
  },
  {
    id: 'tx-5',
    type: 'expense',
    amount: 80.0,
    category: 'Ocio',
    date: new Date().toISOString(),
    description: 'Cena con amigos',
  },
  {
    id: 'tx-6',
    type: 'income',
    amount: 200.0,
    category: 'Venta',
    date: new Date().toISOString(),
    description: 'Venta de bicicleta',
  },
  {
    id: 'tx-7',
    type: 'expense',
    amount: 40.0,
    category: 'Salud',
    date: new Date().toISOString(),
    description: 'Medicinas',
  },
  {
    id: 'tx-8',
    type: 'income',
    amount: 500.0,
    category: 'Bonificación',
    date: new Date().toISOString(),
    description: 'Rendimiento laboral',
  },
  {
    id: 'tx-9',
    type: 'expense',
    amount: 25.0,
    category: 'Café',
    date: new Date().toISOString(),
    description: 'Café con amigos',
  },
  {
    id: 'tx-10',
    type: 'income',
    amount: 150.0,
    category: 'Regalo',
    date: new Date().toISOString(),
    description: 'Regalo de cumpleaños',
  },
  {
    id: 'tx-11',
    type: 'expense',
    amount: 100.0,
    category: 'Ropa',
    date: new Date().toISOString(),
    description: 'Compra de ropa',
  },
  {
    id: 'tx-12',
    type: 'income',
    amount: 250.0,
    category: 'Inversión',
    date: new Date().toISOString(),
    description: 'Ganancias de inversión',
  },
  {
    id: 'tx-13',
    type: 'expense',
    amount: 70.0,
    category: 'Entretenimiento',
    date: new Date().toISOString(),
    description: 'Entrada al cine',
  },
  {
    id: 'tx-14',
    type: 'income',
    amount: 400.0,
    category: 'Proyecto',
    date: new Date().toISOString(),
    description: 'Pago por proyecto freelance',
  },
  {
    id: 'tx-15',
    type: 'expense',
    amount: 55.0,
    category: 'Comida',
    date: new Date().toISOString(),
    description: 'Almuerzo fuera',
  },
  {
    id: 'tx-16',
    type: 'income',
    amount: 180.0,
    category: 'Venta',
    date: new Date().toISOString(),
    description: 'Venta de artículos usados',
  },
  {
    id: 'tx-17',
    type: 'expense',
    amount: 90.0,
    category: 'Transporte',
    date: new Date().toISOString(),
    description: 'Abono transporte mensual',
  },
  {
    id: 'tx-18',
    type: 'income',
    amount: 220.0,
    category: 'Bonificación',
    date: new Date().toISOString(),
    description: 'Bonificación por desempeño',
  }
];

export const TransactionsList = ({ transactions }: TransactionHeaderListProps) => {
  const [onEndReachedCalled, setOnEndReachedCalled] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [tx, setTx] = useState<Transaction[]>(transactions && transactions.length ? transactions.slice(0, 15) : defaultTransactions.slice(0, 15));

  const handleRefresh = async () => {
    setIsRefreshing(true);
    setTx(transactions ? transactions.slice(0, 15) : defaultTransactions.slice(0, 15));
    setIsRefreshing(false);
  };

  const handleOnEndReached = () => {
    setOnEndReachedCalled(true);
    setTimeout(() => {
      setTx(transactions && transactions.length ? transactions.slice(0, tx.length + 5) : defaultTransactions.slice(0, tx.length + 5))
      setOnEndReachedCalled(false);
    }, 1000);
  }

  const FooterComponent = () => {
    return onEndReachedCalled ? (
      <View style={{ padding: 16, alignItems: 'center' }}>
        <Text style={{ fontSize: 14, color: '#666' }}>Cargando más transacciones...</Text>
      </View>
    ) : null;
  }

  return (
    <View style={styles.container}>
      <TransactionHeader transactions={tx} />
      <FlatList
        testID="transactions-list"
        data={tx}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TransactionItem item={item} />}
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
        onEndReached={handleOnEndReached}
        onEndReachedThreshold={0.3}
        onRefresh={handleRefresh}
        refreshing={isRefreshing}
        ListFooterComponent={FooterComponent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
