import type { CardProps } from '@/modules/transaction/interfaces';
import type { CardType } from '@/modules/transaction/types';
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'



const colorMap: Record<CardType, { bg: string; stripe: string; accent?: string }> = {
  black: { bg: '#333333', stripe: 'rgba(255,255,255,0.06)', accent: '#000' },
  platinum: { bg: '#F7B86B', stripe: 'rgba(255,255,255,0.06)', accent: '#F6A800' },
  gold: { bg: '#FFB84D', stripe: 'rgba(255,255,255,0.06)', accent: '#FFA500' },
  blue: { bg: '#2C8C9B', stripe: 'rgba(255,255,255,0.04)', accent: '#25737F' },
}

function maskCardNumber(num?: string) {
  const clean = (num || '7223').replace(/\s+/g, '')
  if (clean.length <= 4) return clean
  const last4 = clean.slice(-4)
  return '**** **** **** ' + last4
}

export const Card: React.FC<CardProps> = ({
  type = 'black',
  amount = '$34 000.00',
  cardNumber = '**** **** **** 7223',
  holderName = 'Arturo Castro',
  expiry = '03/26',
  brand = 'VISA',
  style,
}) => {
  const colors = colorMap[type]

  return (
    <View style={[styles.wrapper, style]}>
      <View style={[styles.card, { backgroundColor: colors.bg }]}> 
        <View style={[styles.stripe, { backgroundColor: colors.stripe }]} />

        <View style={styles.topRow}>
          <Text style={styles.amount}>{amount}</Text>
          <Text style={styles.brand}>{brand}</Text>
        </View>

        <Text style={styles.number}>{maskCardNumber(cardNumber)}</Text>

        <View style={styles.bottomRow}>
          <View style={styles.holderBlock}>
            <Text style={styles.small}>Card Holder</Text>
            <Text style={styles.holderName}>{holderName}</Text>
          </View>

          <View style={styles.expiryBlock}>
            <Text style={styles.small}>Expires</Text>
            <Text style={styles.expiry}>{expiry}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    marginVertical: 18,
  },
  card: {
    borderRadius: 14,
    padding: 20,
    minHeight: 170,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 6,
    overflow: 'hidden',
  },
  stripe: {
    position: 'absolute',
    top: -60,
    left: -100,
    width: 280,
    height: 160,
    transform: [{ rotate: '-30deg' }],
    opacity: 0.9,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  amount: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
  },
  brand: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
  },
  number: {
    marginTop: 24,
    color: '#fff',
    fontSize: 18,
    letterSpacing: 2,
  },
  bottomRow: {
    marginTop: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  holderBlock: {},
  small: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 12,
  },
  holderName: {
    marginTop: 6,
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  expiryBlock: {
    alignItems: 'flex-end',
  },
  expiry: {
    marginTop: 6,
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
})
