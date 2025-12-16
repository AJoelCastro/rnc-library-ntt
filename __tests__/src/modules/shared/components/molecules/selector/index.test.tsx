import { render, fireEvent } from '@testing-library/react-native';
import { Selector } from '@/modules/shared/components/molecules/selector';

describe('Selector', () => {
    it('renders placeholder initially', () => {
        const { getByText } = render(<Selector placeholder="Choose One" />);
        expect(getByText('Choose One')).toBeTruthy();
    });

    it('opens dropdown and selects item', () => {
        const items = [{ id: 1, label: 'Option A' }, { id: 2, label: 'Option B' }];
        const onSelect = jest.fn();
        const { getByText, queryByText } = render(
            <Selector items={items} onSelect={onSelect} placeholder="Choose" />
        );

        // Initially dropdown hidden
        expect(queryByText('Option A')).toBeNull();

        // Open dropdown
        fireEvent.press(getByText('Choose'));

        // Dropdown visible
        expect(getByText('Option A')).toBeTruthy();

        // Select item
        fireEvent.press(getByText('Option A'));

        expect(onSelect).toHaveBeenCalledWith(items[0]);
        expect(getByText('Option A')).toBeTruthy(); // Should be displayed as selected value
    });

    it('initializes with selectedId', () => {
        const items = [{ id: 1, label: 'Option A' }, { id: 2, label: 'Option B' }];
        const { getByText } = render(<Selector items={items} selectedId={2} />);
        expect(getByText('Option B')).toBeTruthy();
    });
});
