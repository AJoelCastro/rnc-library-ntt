import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

type Props = {
  title: string
  onPress?: () => void
}

export const ServiceItem = ({ title, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={styles.container}>
        {/* Placeholder cuadrado */}
        <View style={styles.square} />

        {/* Título */}
        <Text style={styles.title}>{title}</Text>

        {/* Flecha */}
        <Text style={styles.arrow}>{'>'}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  square: {
    width: 28,
    height: 28,
    backgroundColor: '#CFCFCF',
    borderRadius: 4,
    marginRight: 12,
  },
  title: {
    flex: 1,
    fontSize: 16,
    color: '#111111',
  },
  arrow: {
    fontSize: 18,
    color: '#B0B0B0',
  },
})
