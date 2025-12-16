import React from 'react';
import { render } from '@testing-library/react-native';
import { ConnectionBadge } from '@/modules/network_monitor/components/atoms/ConnectionBadge';

describe('ConnectionBadge', () => {
    it('renders wifi connected state correctly', () => {
        const { getByText, getByRole } = render(
            <ConnectionBadge type="wifi" isConnected={true} />
        );
        expect(getByText('WIFI')).toBeTruthy();
        expect(getByText('📶')).toBeTruthy();
        // Background color check is harder with functional styles, but we can check if it renders.
    });

    it('renders cellular connected state correctly', () => {
        const { getByText } = render(
            <ConnectionBadge type="cellular" isConnected={true} />
        );
        expect(getByText('CELLULAR')).toBeTruthy();
        expect(getByText('📱')).toBeTruthy();
    });

    it('renders disconnected state correctly', () => {
        const { getByText } = render(
            <ConnectionBadge type="wifi" isConnected={false} />
        );
        // When disconnected, it uses red color but icon logic is based on type?
        // Code says: const icon = type === 'wifi' ? '📶' : type === 'cellular' ? '📱' : '❌';
        // So icon is still based on type, color is red.
        expect(getByText('📶')).toBeTruthy();
    });

    it('renders none/unknown type', () => {
        const { getByText } = render(
            <ConnectionBadge type="none" isConnected={false} />
        );
        expect(getByText('❌')).toBeTruthy();
    });
});
