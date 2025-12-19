import { render, fireEvent } from '@testing-library/react-native';
import { ModalComponent } from '@/modules/shared/components/atoms/modal';

describe('ModalComponent', () => {
    it('renders correctly when visible', () => {
        const { getByText } = render(
            <ModalComponent visible={true} title="Test Modal" description="Test Desc" />
        );
        expect(getByText('Test Modal')).toBeTruthy();
        expect(getByText('Test Desc')).toBeTruthy();
    });

    it('calls onClose when close button is pressed', () => {
        const onClose = jest.fn();
        const { getByText } = render(<ModalComponent visible={true} onClose={onClose} />);

        // Close button (X)
        fireEvent.press(getByText('×'));
        expect(onClose).toHaveBeenCalled();
    });

    it('calls onButtonPress and onClose when main button is pressed', () => {
        const onButtonPress = jest.fn();
        const onClose = jest.fn();
        const { getByText } = render(
            <ModalComponent visible={true} onButtonPress={onButtonPress} onClose={onClose} buttonTitle="OK" />
        );

        fireEvent.press(getByText('OK'));
        expect(onButtonPress).toHaveBeenCalled();
        expect(onClose).toHaveBeenCalled();
    });
});
