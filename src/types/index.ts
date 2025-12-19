// CHAT

export type Message = {
  id: string
  text: string
  sender: 'user' | 'bot'
}


// TRANSACTION

export type CardType = 'black' | 'platinum' | 'gold' | 'blue'



// SHARED

export type ModalType = 'alert' | 'error' | 'success'

export type SelectorItem = {
  id: string | number
  label: string
}


// NETWORK MONITOR

export type ConnectionInfo = {
  type: 'wifi' | 'cellular' | 'none' | 'unknown';
  isConnected: boolean;
  isInternetReachable: boolean;
};