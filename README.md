# react-native-rnc-library-ntt

A comprehensive React Native component library for NTT projects. Built with TypeScript and Turbo Modules, providing pre-built UI components, transaction management, chat interfaces, network monitoring, and native device utilities.

## Installation

```sh
npm install @arturocastro/react-native-rnc-library-ntt
```

or

```sh
yarn add @arturocastro/react-native-rnc-library-ntt
```

## Features

- 🎨 **Pre-built UI Components** — buttons, inputs, selectors, headers, modals
- 💬 **Chat Module** — full chat interface with message bubbles and input handling
- 💳 **Transaction Management** — card display and transaction lists
- 📱 **Device Information** — native Turbo Module for device info (iOS + Android)
- 🌐 **Network Monitoring** — connection status tracking with hooks and UI components
- ⚙️ **Configuration Module** — settings/config items with customizable UI
- 🔧 **Shared Utilities** — reusable types, interfaces, and helper components

## Native Modules

### Device Information (Turbo Module)

The library exposes a native Turbo Module for accessing device information at runtime.

```js
import { getDeviceInfo, type DeviceInfo } from '@arturocastro/react-native-rnc-library-ntt';

const deviceInfo = getDeviceInfo();
// Returns: { deviceName, deviceModel, systemVersion, isTablet }
```

**DeviceInfo Properties:**
- `deviceName: string` — Device name (e.g., "iPhone 15")
- `deviceModel: string` — Device model identifier
- `systemVersion: string` — OS version (e.g., "17.2")
- `isTablet: boolean` — Whether the device is a tablet

## Components

### Shared Components

#### Button
A flexible button component with different types.

```js
import { Button, type ButtonType } from '@arturocastro/react-native-rnc-library-ntt';

<Button 
  title="Press me" 
  onPress={() => console.log('Pressed')} 
/>
```

#### Header
A customizable header component.

```js
import { Header } from '@arturocastro/react-native-rnc-library-ntt';

<Header title="My App" />
```

#### Password
A secure password input component.

```js
import { Password } from '@arturocastro/react-native-rnc-library-ntt';

<Password 
  value={password}
  onChangeText={setPassword}
/>
```

#### Email
An email input component with validation.

```js
import { Email } from '@arturocastro/react-native-rnc-library-ntt';

<Email 
  value={email}
  onChangeText={setEmail}
/>
```

#### Selector
A dropdown/picker component.

```js
import { Selector } from '@arturocastro/react-native-rnc-library-ntt';

<Selector 
  options={[{ label: 'Option 1', value: '1' }]}
  onSelect={(value) => console.log(value)}
/>
```

#### InputWithDelete
An input field with a delete/clear button.

```js
import { InputWithDelete } from '@arturocastro/react-native-rnc-library-ntt';

<InputWithDelete 
  value={text}
  onChangeText={setText}
  onDelete={() => setText('')}
/>
```

#### ModalComponent
A modal dialog component with support for alert, error, and success types.

```js
import { ModalComponent } from '@arturocastro/react-native-rnc-library-ntt';

<ModalComponent 
  visible={isVisible}
  type="alert"
  title="Session Expired"
  description="Please log in again"
  buttonTitle="Accept"
  onButtonPress={() => setIsVisible(false)}
  onClose={() => setIsVisible(false)}
/>
```

**ModalComponent Props:**
- `visible: boolean` — Controls modal visibility
- `type?: 'alert' | 'error' | 'success'` — Modal type (default: 'alert')
- `title?: string` — Modal title
- `description?: string` — Modal description/message
- `buttonTitle?: string` — Button text (default: 'Aceptar')
- `onButtonPress?: () => void` — Button press handler
- `onClose?: () => void` — Close/dismiss handler

### Chat Module

A complete chat interface module with message display, input handling, and send functionality. Includes organisms, molecules, and shared types.

#### ChatSession
Full-featured chat UI organism that displays messages in a list, handles user input via `InputWithDelete`, and sends messages with simulated bot replies.

```js
import { ChatSession } from '@arturocastro/react-native-rnc-library-ntt';

<ChatSession />
```

**Features:**
- Auto-scrolls to latest message
- User messages display on the right (light purple bubbles)
- Bot messages display on the left (white bubbles)
- Automatic bot reply after 700ms
- Keyboard-aware layout (iOS + Android)
- Clear button for text input

#### SendButton
Molecule component for sending messages. Purple button with ">" icon.

```js
import { SendButton } from '@arturocastro/react-native-rnc-library-ntt';

<SendButton onPress={() => handleSend()} />
```

**Props:**
- `onPress?: () => void` — Press handler

#### Chat Types
```ts
type Message = {
  id: string
  text: string
  sender: 'user' | 'bot'
}
```

**Notes:**
- `ChatSession` internally uses `InputWithDelete` and `SendButton` molecules.
- Messages are stored in component state; integrate with backend or Redux for persistence.
- Bot reply is simulated; replace with API calls as needed.
```

### Transaction Components

#### Card
A premium card display component supporting multiple card types (black, platinum, gold, blue).

```js
import { Card, type CardProps } from '@arturocastro/react-native-rnc-library-ntt';

<Card 
  type="gold"
  amount="$34 000.00"
  cardNumber="**** **** **** 7223"
  holderName="John Doe"
  expiry="03/26"
  brand="VISA"
/>
```

**Card Props:**
- `type?: 'black' | 'platinum' | 'gold' | 'blue'` - Card design type (default: 'black')
- `amount?: string | number` - Card balance amount (default: '$34 000.00')
- `cardNumber?: string` - Card number (masked format, default: '**** **** **** 7223')
- `holderName?: string` - Cardholder name (default: 'Akbarali Khasanov')
- `expiry?: string` - Expiration date MM/YY format (default: '03/26')
- `brand?: string` - Card brand/network (default: 'VISA')
- `style?: ViewStyle` - Custom style overrides

#### TransactionHeader
A header component for transaction screens.

```js
import { TransactionHeader } from '@arturocastro/react-native-rnc-library-ntt';

<TransactionHeader title="Recent Transactions" />
```

#### TransactionItem
A single transaction item display component.

```js
import { TransactionItem, type Transaction } from '@arturocastro/react-native-rnc-library-ntt';

const transaction: Transaction = {
  id: '1',
  description: 'Payment',
  amount: 50.00,
  date: new Date(),
};

<TransactionItem transaction={transaction} />
```

#### TransactionsList
A list component for displaying multiple transactions.

```js
import { TransactionsList, type Transaction } from '@arturocastro/react-native-rnc-library-ntt';

const transactions: Transaction[] = [
  // ... transaction array
];

<TransactionsList transactions={transactions} />
```

**Transaction Type:**
```ts
type Transaction = {
  id: string
  type: 'income' | 'expense'
  amount: number
  category: string
  date: string // ISO date string
  description: string
}
```

### Configuration Module

Settings and configuration UI components for app preferences.

#### ConfigItem
A single configuration item with icon, title, subtitle, and optional action handler.

```js
import { ConfigItem } from '@arturocastro/react-native-rnc-library-ntt';

<ConfigItem
  title="Notifications"
  subtitle="Enable push notifications"
  Icon={<MyIcon />}
  onPress={() => handleConfigPress()}
  showDivider={true}
/>
```

**Props:**
- `title?: string` — Config item title (default: 'Configuración')
- `subtitle?: string` — Descriptive subtitle
- `Icon?: React.ReactNode` — Custom icon component (default: ⚙️)
- `iconSize?: number` — Icon size in pixels (default: 24)
- `onPress?: () => void` — Press handler
- `showDivider?: boolean` — Show divider line (default: true)
- `disabled?: boolean` — Disable interaction (default: false)
- `style?: ViewStyle` — Custom style overrides

**Notes:**
- ConfigItem becomes non-interactive when `disabled={true}` or no `onPress` provided.
- Perfect for building Settings screens.

## Utilities

### Device Information
Get device information at runtime via native Turbo Module.

```js
import { getDeviceInfo, type DeviceInfo } from '@arturocastro/react-native-rnc-library-ntt';

const deviceInfo: DeviceInfo = getDeviceInfo();
// { deviceName: "iPhone 15", deviceModel: "iPhone15,2", systemVersion: "17.2", isTablet: false }
```

### Text Utilities

```js
import { capitalize, formatGreeting } from '@arturocastro/react-native-rnc-library-ntt';

const greeting = formatGreeting('john'); // Returns: "¡Hola, John!"
const capitalized = capitalize('hello'); // Returns: "Hello"
```

### Math Utilities

```js
import { multiply } from '@arturocastro/react-native-rnc-library-ntt';

const result = multiply(3, 7); // Returns: 21
```

## Constants

```js
import { APP_VERSION } from '@arturocastro/react-native-rnc-library-ntt';

console.log(APP_VERSION); // '1.0.0'
```

## Shared Types & Interfaces

Common types and interfaces used across all modules:

```ts
// Button
type ButtonType = 'primary' | 'secondary'

// Selector
type SelectorItem = {
  id: string | number
  label: string
}

// Modal
type ModalType = 'alert' | 'error' | 'success'
```

## Module Architecture

The library is organized into modular namespaces:

- **`src/modules/shared`** — Atom/molecule components (Button, Header, Input, Email, Password, Selector, Modal)
- **`src/modules/chat`** — Chat UI (ChatSession organism, SendButton molecule)
- **`src/modules/transaction`** — Finance UI (Card, Transaction components)
- **`src/modules/network_monitor`** — Network status (ConnectionBadge, NetworkStatusCard, hook)
- **`src/modules/configuration`** — Settings UI (ConfigItem)
- **Native Turbo Module** — Device info access

All exports are available from the main entry point:

```js
import {
  // Shared
  Button, Header, Email, Password, InputWithDelete, Selector, ModalComponent,
  // Chat
  ChatSession, SendButton,
  // Transaction
  Card, TransactionItem, TransactionHeader, TransactionsList,
  // Network
  ConnectionBadge, NetworkStatusCard, useNetworkMonitor,
  // Config
  ConfigItem,
  // Native
  getDeviceInfo,
  // Types
  type ButtonType, type Transaction, type ConnectionInfo, type DeviceInfo
} from '@arturocastro/react-native-rnc-library-ntt';

## Contributing

- [Development workflow](CONTRIBUTING.md#development-workflow)
- [Sending a pull request](CONTRIBUTING.md#sending-a-pull-request)
- [Code of conduct](CODE_OF_CONDUCT.md)

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
