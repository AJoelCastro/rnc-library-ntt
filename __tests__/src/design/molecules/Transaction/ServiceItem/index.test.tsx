import { render, fireEvent } from '@testing-library/react-native';
import { ServiceItem } from '@/src/design/molecules/Transaction/ServiceItem';

describe('ServiceItem', () => {
    it('renders title', () => {
        const { getByText } = render(<ServiceItem title="Services" onPress={() => { }} />);
        expect(getByText('Services')).toBeTruthy();
    });

    it('calls onPress', () => {
        const onPress = jest.fn();
        const { getByText } = render(<ServiceItem title="Tap me" onPress={onPress} />);

        fireEvent.press(getByText('Tap me'));
        expect(onPress).toHaveBeenCalled();
    });
});
