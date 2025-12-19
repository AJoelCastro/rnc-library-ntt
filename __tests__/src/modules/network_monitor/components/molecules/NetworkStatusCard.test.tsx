import { render } from '@testing-library/react-native';
import { NetworkStatusCard } from '@/src/design/molecules/networkMonitor/NetworkStatusCard';

describe('NetworkStatusCard', () => {
    it('renders correctly with connection info', () => {
        const info = {
            type: 'wifi',
            isConnected: true,
            isInternetReachable: true,
        } as any; // Type casting as necessary

        const { getByText } = render(<NetworkStatusCard connectionInfo={info} />);

        expect(getByText('Estado de Conexión')).toBeTruthy();
        // It renders ConnectionBadge
        expect(getByText('WIFI')).toBeTruthy();
        // It renders reachability check
        expect(getByText(/Internet: ✓/)).toBeTruthy();
    });

    it('renders disconnected info', () => {
        const info = {
            type: 'none',
            isConnected: false,
            isInternetReachable: false,
        } as any;

        const { getByText } = render(<NetworkStatusCard connectionInfo={info} />);
        expect(getByText('NONE')).toBeTruthy();
        expect(getByText(/Internet: ✗/)).toBeTruthy();
    });
});
