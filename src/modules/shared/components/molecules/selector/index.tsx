import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import { useState } from 'react'
import type { SelectorProps } from '@/modules/shared/interfaces'
import type { SelectorItem } from '@/modules/shared/types'


const defaultItems: SelectorItem[] = [
  { id: 1, label: 'D.N.I.' },
  { id: 2, label: 'RUC' },
]

export const Selector = ({
  items = defaultItems,
  onSelect,
  placeholder = 'Seleccionar...',
  selectedId,
}: SelectorProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState<SelectorItem | null>(
    selectedId ? items.find(item => item.id === selectedId) || null : null
  )

  const handleSelect = (item: SelectorItem) => {
    setSelected(item)
    onSelect?.(item)
    setIsOpen(false)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.trigger}
        onPress={() => setIsOpen(!isOpen)}
        activeOpacity={0.7}
      >
        <Text style={styles.triggerText}>{selected?.label || placeholder}</Text>
        {
          isOpen? <Text>▲</Text> : <Text>▼</Text>
        }
      </TouchableOpacity>

      {isOpen && (
        <View style={styles.dropdownContainer}>
          <FlatList
            data={items}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.option,
                  selected?.id === item.id && styles.optionSelected,
                ]}
                onPress={() => handleSelect(item)}
              >
                <Text
                  style={[
                    styles.optionText,
                    selected?.id === item.id && styles.optionTextSelected,
                  ]}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            )}
            scrollEnabled={false}
          />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    zIndex: 10,
  },
  trigger: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#7D2EFF',
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginVertical: 8,
    marginHorizontal: 8,
  },
  triggerText: {
    fontSize: 16,
    color: '#666',
    flex: 1,
  },
  dropdownContainer: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#7D2EFF',
    borderTopWidth: 0,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    overflow: 'hidden',
    marginHorizontal: 8,
    marginBottom: 4
  },
  option: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  optionSelected: {
    backgroundColor: '#F0E6FF',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  optionTextSelected: {
    color: '#7D2EFF',
    fontWeight: '600',
  },
})


