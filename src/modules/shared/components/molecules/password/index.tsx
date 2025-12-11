import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { useState } from 'react'
import type { PasswordProps } from '@/modules/shared/interfaces'



export const Password = ({
  value = 'password123',
  onChangeText,
  placeholder = 'Ingrese su contraseña',
  editable = true,
}: PasswordProps) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        secureTextEntry={!showPassword}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#999"
        editable={editable}
      />
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => setShowPassword(!showPassword)}
      >
        <Text>{showPassword ? '🙈' : '👁️'}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
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
  iconButton: {
    padding: 8,
  },
})
