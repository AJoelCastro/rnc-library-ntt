import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { useEffect, useState } from 'react'
import type { InputWithDeleteProps } from '../../../interfaces'

export const InputWithDelete = ({
  value = '',
  onChangeText,
  placeholder = 'Ingrese texto',
  editable = true,
}: InputWithDeleteProps) => {
  const [text, setText] = useState(value)

  const handleChangeText = (newText: string) => {
    setText(newText)
    onChangeText?.(newText)
  }

  const handleClear = () => {
    setText('')
    onChangeText?.('')
  }
  useEffect(() => {
    setText(value)
  }, [value])
  

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={handleChangeText}
        placeholder={placeholder}
        placeholderTextColor="#999"
        editable={editable}
      />
      {text.length > 0 && (
        <TouchableOpacity
          style={styles.clearButton}
          onPress={handleClear}
          activeOpacity={0.7}
        >
          <Text
            style={{ fontSize: 18, color: '#999' }}
          >
            ✕
          </Text>
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#7D2EFF',
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    marginVertical: 8,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: '#000',
  },
  clearButton: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
