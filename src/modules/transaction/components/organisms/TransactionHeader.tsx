import { View, Text, StyleSheet } from 'react-native';
import type { Transaction } from '../../types';

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

export const TransactionHeader = ({ transactions }: Props) => {
  const tx = transactions && transactions.length ? transactions : defaultTransactions;

  const incomes = tx
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const expenses = tx
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transacciones Recientes</Text>

      <View style={styles.row}>
        <View style={styles.box}>
          <Text style={styles.label}>Ingresos</Text>
          <Text style={[styles.value, { color: '#11C76F' }]}>
            + S/ {incomes.toFixed(2)}
          </Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.label}>Gastos</Text>
          <Text style={[styles.value, { color: '#FF4D4D' }]}>
            - S/ {expenses.toFixed(2)}
          </Text>
        </View>
      </View>

      <Text style={styles.subTitle}>
        Mostrando {tx.length} de {tx.length} transacciones
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 22,
    paddingHorizontal: 16,
    backgroundColor: '#7D2EFF',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FFF',
    marginBottom: 18,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box: {
    width: '48%',
  },
  label: {
    color: '#E3D5FF',
    fontSize: 14,
  },
  value: {
    marginTop: 6,
    fontSize: 20,
    fontWeight: '700',
    color: '#FFF',
  },
  subTitle: {
    marginTop: 16,
    fontSize: 14,
    color: '#E3D5FF',
  },
});
