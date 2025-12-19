import { render, fireEvent } from '@testing-library/react-native';
import { SendButton } from '@/src/design/atoms/Chat/SendButton';

describe('SendButton', () => {
    it('renders correctly', () => {
        const { getByText } = render(<SendButton onPress={() => { }} />);
        expect(getByText('>')).toBeTruthy();
    });

    it('calls onPress when pressed', () => {
        const onPressMock = jest.fn();
        const { getByText } = render(<SendButton onPress={onPressMock} />);

        fireEvent.press(getByText('>'));
        expect(onPressMock).toHaveBeenCalledTimes(1);
    });
});
