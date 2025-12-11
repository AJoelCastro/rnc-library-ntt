import type { ViewStyle } from "react-native"

export interface ConfigItemProps {
  title?: string
  subtitle?: string
  onPress?: () => void
  Icon?: React.ReactNode
  iconSize?: number
  showDivider?: boolean
  disabled?: boolean
  style?: ViewStyle
}
