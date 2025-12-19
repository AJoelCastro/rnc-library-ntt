import { renderHook, waitFor } from '@testing-library/react-native';
import { useNetworkMonitor } from '@/modules/NetworkMonitor/hooks/useNetworkMonitor';
import NativeNetworkMonitor from '@/src/NativeNetworkMonitor';

// Mock the native module
jest.mock('@/src/NativeNetworkMonitor', () => ({
    getCurrentState: jest.fn(),
    addListener: jest.fn(),
    removeAllListeners: jest.fn(),
}));

describe('useNetworkMonitor', () => {
    it('fetches initial state on mount', async () => {
        const mockState = { type: 'wifi', isConnected: true };
        (NativeNetworkMonitor.getCurrentState as jest.Mock).mockResolvedValue(mockState);

        const { result } = renderHook(() => useNetworkMonitor());

        // Initially loading
        expect(result.current.isLoading).toBe(true);
        expect(result.current.connectionInfo).toBeNull();

        // Wait for update
        await waitFor(() => {
            expect(result.current.isLoading).toBe(false);
        });

        expect(result.current.connectionInfo).toEqual(mockState);
    });
});
