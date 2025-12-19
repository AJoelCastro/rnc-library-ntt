import { render, fireEvent } from '@testing-library/react-native';
import { Text } from 'react-native';
import { ConfigItem } from '../../../../../../src/design/molecules/Configuration/ConfigItem';

describe('ConfigItem', () => {
    it('renders with default props', () => {
        const { getByText } = render(<ConfigItem />);
        expect(getByText('Configuración')).toBeTruthy();
        expect(getByText('Este es un subtítulo de ejemplo')).toBeTruthy();
    });

    it('renders with custom title and subtitle', () => {
        const { getByText } = render(
            <ConfigItem title="Custom Title" subtitle="Custom Subtitle" />
        );
        expect(getByText('Custom Title')).toBeTruthy();
        expect(getByText('Custom Subtitle')).toBeTruthy();
    });

    it('renders custom icon', () => {
        const CustomIcon = <Text testID="custom-icon">ICON</Text>;
        const { getByTestId } = render(<ConfigItem Icon={CustomIcon} />);
        expect(getByTestId('custom-icon')).toBeTruthy();
    });

    it('handles onPress', () => {
        const onPressMock = jest.fn();
        const { getByRole } = render(<ConfigItem onPress={onPressMock} />);

        fireEvent.press(getByRole('button'));
        expect(onPressMock).toHaveBeenCalledTimes(1);
    });

    it('disables interaction when disabled prop is true', () => {
        const onPressMock = jest.fn();
        const { } = render(<ConfigItem onPress={onPressMock} disabled={true} />);

        // Attempting to press the text or container usually works regardless of disabled in RNTL,
        // but we can check if the accessibilityState is disabled
        // However, the component logic says: const Container: any = onPress && !disabled ? TouchableOpacity : View
        // So distinctively, it renders a View when disabled. View doesn't have onPress.

        // We can check if it's not a button role maybe?
        // accessibilityRole={onPress ? 'button' : undefined} is passed.
        // But Container is calculated based on disabled.
        // If disabled, Container is View.
        // View does have disabled prop passed? Yes.

        // Check that it does not have button role
        const { queryByRole } = render(<ConfigItem onPress={onPressMock} disabled={true} />);
        expect(queryByRole('button')).toBeNull();
    });
});
