import { render, fireEvent } from '@testing-library/react-native';
import { InputPassword } from '@/src/design/molecules/Shared/Password';

describe('InputPassword', () => {
    it('renders with initial value', () => {
        const { getByDisplayValue } = render(<InputPassword value="secret" />);
        expect(getByDisplayValue('secret')).toBeTruthy();
    });

    it('toggles password visibility', () => {
        const { getByText, getByPlaceholderText } = render(<InputPassword />);
        const input = getByPlaceholderText('Ingrese su contraseña');

        // Initially hidden (secureTextEntry is true)
        expect(input.props.secureTextEntry).toBe(true);

        // Press toggle button (eye icon)
        // Initial icon is '👁️' based on code: {showPassword ? '🙈' : '👁️'}
        // Wait, initially showPassword is false -> !showPassword is true -> secureTextEntry is true.
        // Icon is '👁️' when showPassword is false? No.
        // Code: <Text>{showPassword ? '🙈' : '👁️'}</Text>
        // So if showPassword=false, icon is 👁️.

        const toggleButton = getByText('👁️');
        fireEvent.press(toggleButton);

        // Now visible
        expect(input.props.secureTextEntry).toBe(false);
        expect(getByText('🙈')).toBeTruthy();
    });
});
