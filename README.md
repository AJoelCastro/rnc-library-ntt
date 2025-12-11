# react-native-rnc-library-ntt

A comprehensive React Native component library for NTT projects. Built with TypeScript and provides pre-built UI components, transaction management, and network monitoring utilities.

## Installation

```sh
npm install @arturocastro/react-native-rnc-library-ntt
```

or

```sh
yarn add @arturocastro/react-native-rnc-library-ntt
```

## Features

- 🎨 Pre-built UI components (buttons, inputs, selectors, headers)
- 💳 Transaction components and card display
- 📱 Device information utilities
- 🔧 Shared utilities and types
- 📊 Network monitoring capabilities

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
A modal dialog component.

```js
import { ModalComponent } from '@arturocastro/react-native-rnc-library-ntt';

<ModalComponent 
  visible={isVisible}
  onClose={() => setIsVisible(false)}
>
  {/* Modal content */}
</ModalComponent>

### Chat Module

A set of components for building chat interfaces inside your app. Includes a full `ChatSession` organism, a `SendButton` molecule, and shared types.

- **ChatSession**: Full chat UI that displays messages, handles input and sending, and simulates replies. Uses `InputWithDelete` for text entry and a `SendButton` for submitting messages.

```js
import { ChatSession } from '@arturocastro/react-native-rnc-library-ntt';

<ChatSession />
```

- **SendButton**: Small button component used by `ChatSession`. Example usage:

```js
import { SendButton } from '@arturocastro/react-native-rnc-library-ntt';

<SendButton onPress={() => console.log('send')} />
```

- **Types**: `ChatSession` uses a simple `Message` shape:

```ts
type Message = {
  id: string
  text: string
  sender: 'user' | 'bot'
}
```

Notes:
- `ChatSession` is exported from the library and can be embedded in any screen. It internally uses `InputWithDelete` and a `SendButton` molecule.
- The component ships with basic styles and a small simulated bot reply; customize it by copying into your project or extending the exported components.
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

## Utilities

### Device Information
Get device information at runtime.

```js
import { getDeviceInfo, type DeviceInfo } from '@arturocastro/react-native-rnc-library-ntt';

const deviceInfo: DeviceInfo = getDeviceInfo();
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

## Contributing

- [Development workflow](CONTRIBUTING.md#development-workflow)
- [Sending a pull request](CONTRIBUTING.md#sending-a-pull-request)
- [Code of conduct](CODE_OF_CONDUCT.md)

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
