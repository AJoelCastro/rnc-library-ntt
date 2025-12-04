import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import type { ButtonType } from '../../../types'

type Props = {
    item?: ButtonType;
    title?: string;
    onPress?: () => void;
    type?: 'primary' | 'secondary';
}

const Button = ({ item, title, onPress, type = 'primary' }: Props) => {
    const buttonTitle = title || item?.title || 'Buscar'
    const buttonType = type || item?.type || 'primary'
    const handlePress = onPress || item?.onClick

    return (
        <TouchableOpacity
            style={[styles.container, {backgroundColor: buttonType === 'primary' ? '#4c00ffff' : '#E8E8E8'}]}
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
        fontWeight: '600',
    },
})
export default Button