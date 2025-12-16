import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ServiceItem } from '@/modules/transaction/components/molecules/service_item';

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
