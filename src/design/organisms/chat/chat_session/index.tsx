import { useEffect, useRef, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'
import type { Message } from '../../../types'
import { InputWithDelete } from '../../../../shared'
import { SendButton } from '../../../../../design/atoms/chat/send_button'

type Props = {
  messages: Message[]
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>
  onMessageSent?: (text: string) => void
}


export const ChatSession = ({ messages, setMessages, onMessageSent }: Props) => {
  const [input, setInput] = useState('')
  const flatListRef = useRef<FlatList<Message> | null>(null)

  useEffect(() => {
    flatListRef.current?.scrollToEnd({ animated: true })
  }, [messages])

  const handleSend = () => {
    const trimmed = input.trim()
    if (!trimmed) return

    const newMsg: Message = {
      id: Date.now().toString(),
      text: trimmed,
      sender: 'user',
    }

    setMessages(prev => [...prev, newMsg])
    onMessageSent?.(trimmed)
    setInput('')

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          text: 'Respuesta del chatbox',
          sender: 'bot',
        },
      ])
    }, 700)
  }

  const renderItem = ({ item }: { item: Message }) => {
    const isUser = item.sender === 'user'
    return (
      <View style={[styles.row, isUser ? styles.rowRight : styles.rowLeft]}>
        <View style={[styles.bubble, isUser ? styles.bubbleUser : styles.bubbleBot]}>
          <Text style={[styles.messageText, isUser ? styles.messageTextUser : styles.messageTextBot]}>
            {item.text}
          </Text>
        </View>
      </View>
    )
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={100}
    >
      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.inputRow}>
        <InputWithDelete
          value={input}
          onChangeText={setInput}
          placeholder="Escribe aqui"
        />
        <SendButton onPress={handleSend} />
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  listContent: {
    padding: 16,
    paddingBottom: 140,
  },
  row: {
    flexDirection: 'row',
    marginVertical: 6,
  },
  rowRight: {
    justifyContent: 'flex-end',
  },
  rowLeft: {
    justifyContent: 'flex-start',
  },
  bubble: {
    maxWidth: '80%',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  bubbleUser: {
    backgroundColor: '#F0DEFF',
    borderRadius: 12,
  },
  bubbleBot: {
    backgroundColor: '#ffffff',
  },
  messageText: {
    fontSize: 15,
  },
  messageTextUser: {
    color: '#1b0a2e',
  },
  messageTextBot: {
    color: '#000',
  },
  inputRow: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 10,
  }
})