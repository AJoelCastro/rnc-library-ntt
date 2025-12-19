import { render } from '@testing-library/react-native';
import { Card } from '@/src/design/molecules/Transaction/Card';

describe('Card', () => {
    it('renders with default props', () => {
        const { getByText } = render(<Card />);
        expect(getByText('$34 000.00')).toBeTruthy();
        expect(getByText('VISA')).toBeTruthy();
        expect(getByText('**** **** **** 7223')).toBeTruthy(); // Mask handling
        expect(getByText('Arturo Castro')).toBeTruthy();
    });

    it('renders custom props', () => {
        const { getByText } = render(
            <Card
                amount="$100.00"
                holderName="John Doe"
                cardNumber="1234 5678 1234 5678"
                brand="MASTERCARD"
            />
        );
        expect(getByText('$100.00')).toBeTruthy();
        expect(getByText('John Doe')).toBeTruthy();
        expect(getByText('MASTERCARD')).toBeTruthy();
        // last 4 of 5678 is 5678
        expect(getByText('**** **** **** 5678')).toBeTruthy();
    });
});
