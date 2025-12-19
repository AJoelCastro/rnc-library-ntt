import { render, fireEvent } from '@testing-library/react-native';
import { Header } from '../../../../../../src/design/molecules/Shared/Header';

describe('Header', () => {
    it('renders title', () => {
        const { getByText } = render(<Header title="My Header" />);
        expect(getByText('My Header')).toBeTruthy();
    });

    it('calls onBack when back button is pressed', () => {
        const onBack = jest.fn();
        // Using getAllByText because arrow might be used elsewhere? 
        // Actually the arrow is '←' inside Text. And accessibilityLabel="back-button" is on proper button.
        const { getByLabelText } = render(<Header onBack={onBack} />);

        fireEvent.press(getByLabelText('back-button'));
        expect(onBack).toHaveBeenCalled();
    });
});
