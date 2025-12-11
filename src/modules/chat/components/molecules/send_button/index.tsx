import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import {} from 'react'
import type { SendButtonProps } from '@/modules/chat/interfaces'

export const SendButton = ({onPress}: SendButtonProps) => {
  return (
    <TouchableOpacity style={styles.sendButton} onPress={onPress} activeOpacity={0.8}>
        <Text style={styles.sendIcon}>{'>'}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  sendButton: {
    marginLeft: 8,
    width: 52,
    height: 44,
    borderRadius: 10,
    backgroundColor: '#7D2EFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendIcon: {
    color: '#fff',
    fontSize: 20,
  },
})