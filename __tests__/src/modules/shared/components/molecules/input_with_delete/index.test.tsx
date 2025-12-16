import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { InputWithDelete } from '@/modules/shared/components/molecules/input_with_delete';

describe('InputWithDelete', () => {
    it('renders with value', () => {
        const { getByDisplayValue } = render(<InputWithDelete value="Hello" />);
        expect(getByDisplayValue('Hello')).toBeTruthy();
    });

    it('updates text on change', () => {
        const onChangeText = jest.fn();
        const { getByPlaceholderText } = render(<InputWithDelete onChangeText={onChangeText} placeholder="Type here" />);

        fireEvent.changeText(getByPlaceholderText('Type here'), 'New Text');
        expect(onChangeText).toHaveBeenCalledWith('New Text');
    });

    it('clears text when delete button is pressed', () => {
        const onChangeText = jest.fn();
        const { getByText, getByDisplayValue } = render(<InputWithDelete value="Some text" onChangeText={onChangeText} />);

        // Delete button (X) should be visible
        const deleteButton = getByText('✕');
        fireEvent.press(deleteButton);

        expect(onChangeText).toHaveBeenCalledWith('');
    });
});
