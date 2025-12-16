import { render, fireEvent } from '@testing-library/react-native';
import { InputEmail } from '@/modules/shared/components/molecules/email';

describe('InputEmail', () => {
    it('renders with initial value', () => {
        const { getByDisplayValue } = render(<InputEmail value="test@example.com" />);
        expect(getByDisplayValue('test@example.com')).toBeTruthy();
    });

    it('validates email on change', () => {
        const onValidation = jest.fn();
        const { getByPlaceholderText } = render(<InputEmail onValidation={onValidation} />);

        const input = getByPlaceholderText('Ingrese su correo electrónico');

        // Invalid email
        fireEvent.changeText(input, 'invalid');
        expect(onValidation).toHaveBeenCalledWith(false);

        // Valid email
        fireEvent.changeText(input, 'valid@example.com');
        expect(onValidation).toHaveBeenCalledWith(true);
    });
});
