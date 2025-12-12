import type { ButtonProps } from '../../../interfaces'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'



export const Button = ({ item, title, onPress, type = 'primary' }: ButtonProps) => {
    const buttonTitle = title || item?.title || 'Buscar'
    const buttonType = type || item?.type || 'primary'
    const handlePress = onPress || item?.onClick

    return (
        <TouchableOpacity
            style={[styles.container, {backgroundColor: buttonType === 'primary' ? '#4c00ffff' : '#FFFFFF'}]}
            onPress={handlePress}
            activeOpacity={0.7}
        >
            <Text style={[styles.text,{color: buttonType === 'primary' ? '#FFFFFF' : '#000000'}]}>{buttonTitle}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        width:'100%',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: '500',
    },
})