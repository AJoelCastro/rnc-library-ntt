import { View, TextInput, StyleSheet, Text } from 'react-native'
import { useState } from 'react'

type Props = {
  value?: string
  onChangeText?: (text: string) => void
  placeholder?: string
  editable?: boolean
  onValidation?: (isValid: boolean) => void
}

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const Email = ({
  value = 'user@example.com',
  onChangeText,
  placeholder = 'Ingrese su correo electrónico',
  editable = true,
  onValidation,
}: Props) => {
  const [email, setEmail] = useState(value)
  const isValid = validateEmail(email)

  const handleChangeText = (text: string) => {
    setEmail(text)
    onChangeText?.(text)
    onValidation?.(validateEmail(text))
  }

  return (
    <View
      style={[
        styles.container,
        {
          borderColor: email.length === 0 ? '#7D2EFF' : isValid ? '#7D2EFF' : '#FF4D4D',
        },
      ]}
    >
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={handleChangeText}
        placeholder={placeholder}
        placeholderTextColor="#999"
        editable={editable}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {email.length > 0 && (
        <Text style={{ fontSize: 16, marginRight: 8 }}>
          {isValid ? '✓' : '✗'}
        </Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
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
})

export default Email