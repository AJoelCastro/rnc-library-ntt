import type { ModalProps } from '../../../interfaces'
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native'

export const ModalComponent = ({
  visible,
  type = 'alert',
  title = 'Tiempo de sesión terminada',
  description = 'Debes regresar al login para poder continuar',
  buttonTitle = 'Aceptar',
  onButtonPress,
  onClose,
}: ModalProps) => {
  const getIconConfig = () => {
    switch (type) {
      case 'error':
        return { name: 'close-circle', color: '#FF4D4D' }
      case 'success':
        return { name: 'checkmark-circle', color: '#11C76F' }
      case 'alert':
      default:
        return { name: 'information-circle', color: '#4c00ffff' }
    }
  }

  const iconConfig = getIconConfig()

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={onClose}
          >
            <Text style={{ fontSize: 24, color: '#999' }}>×</Text>
          </TouchableOpacity>

          <View style={styles.iconContainer}>
            <Text style={{ fontSize: 36, color: iconConfig.color }}>
              {iconConfig.name === 'close-circle' && '❌'}
              {iconConfig.name === 'checkmark-circle' && '✅'}
              {iconConfig.name === 'information-circle' && 'ℹ️'}
            </Text>
          </View>

          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>

          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor:
                  type === 'error'
                    ? '#FF4D4D'
                    : type === 'success'
                      ? '#11C76F'
                      : '#4c00ffff',
              },
            ]}
            onPress={() => {
              onButtonPress?.()
              onClose?.()
            }}
          >
            <Text style={styles.buttonText}>{buttonTitle}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    width: '90%',
    alignItems: 'center',
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  iconContainer: {
    marginVertical: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 20,
  },
  button: {
    width: '100%',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
})
