import type { ConfigItemProps } from '../../../interfaces'
import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  type ViewStyle,
  type TextStyle,
} from 'react-native'


const DEFAULT_ICON_SIZE = 24

export const ConfigItem: React.FC<ConfigItemProps> = ({
  title="Configuración",
  subtitle="Este es un subtítulo de ejemplo",
  onPress,
  Icon,
  iconSize = DEFAULT_ICON_SIZE,
  showDivider = true,
  disabled = false,
  style,
}) => {
  const Container: any = onPress && !disabled ? TouchableOpacity : View

  return (
    <Container
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.container, style]}
      accessibilityRole={onPress ? 'button' : undefined}
      disabled={disabled}
    >
      <View style={styles.content}>
        <View style={[styles.iconWrap]}> 
          {Icon ? (
            Icon
          ) : (
            <Text style={[styles.fallbackIcon, { fontSize: iconSize }]}>⚙️</Text>
          )}
        </View>

        <View style={styles.textWrap}>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
          {subtitle ? (
            <Text numberOfLines={2} style={styles.subtitle}>
              {subtitle}
            </Text>
          ) : null}
        </View>
      </View>

      {showDivider ? <View style={styles.divider} /> : null}
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#c6c6c6ff',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 16,
  },
  iconWrap: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  } as ViewStyle,
  fallbackIcon: {
    color: '#fff',
    lineHeight: 44,
  } as TextStyle,
  textWrap: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    color: '#000',
    fontWeight: '600',
  } as TextStyle,
  subtitle: {
    fontSize: 14,
    color: '#9B9B9B',
    marginTop: 6,
  } as TextStyle,
  divider: {
    height: 1,
    backgroundColor: '#E6E6E6',
    marginLeft: 16,
  },
})
