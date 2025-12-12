import type { HeaderProps } from '../../../interfaces'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'


export const Header = ({ title = 'Cabecera', iconName = 'home', onBack }: HeaderProps) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={onBack} style={styles.leftButton} accessibilityLabel="back-button">
        <Text style={{ fontSize: 22 }}>{'←'}</Text>
      </TouchableOpacity>

      <View style={styles.center}>
        <Text style={styles.centerIcon}>{iconName}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.rightPlaceholder} />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    height: 64,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderBottomWidth: 0,
  },
  leftButton: {
    width: 40,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  center: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerIcon: {
    marginRight: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111',
  },
  rightPlaceholder: {
    width: 40,
  },
})
