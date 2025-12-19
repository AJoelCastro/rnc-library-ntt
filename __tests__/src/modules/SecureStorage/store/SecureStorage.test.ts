import { SecureStorage } from '@/modules/SecureStorage/store/SecureStorage';
import NativeSecureStorage from '@/src/NativeSecureStorage';

jest.mock('@/src/NativeSecureStorage', () => ({
    setItem: jest.fn(),
    getItem: jest.fn(),
}));

describe('SecureStorage', () => {
    it('calls NativeSecureStorage.setItem correctly', async () => {
        (NativeSecureStorage.setItem as jest.Mock).mockResolvedValue(true);
        const result = await SecureStorage.setItem('key', 'value');
        expect(NativeSecureStorage.setItem).toHaveBeenCalledWith('key', 'value');
        expect(result).toBe(true);
    });

    it('calls NativeSecureStorage.getItem correctly', async () => {
        (NativeSecureStorage.getItem as jest.Mock).mockResolvedValue('stored_value');
        const result = await SecureStorage.getItem('key');
        expect(NativeSecureStorage.getItem).toHaveBeenCalledWith('key');
        expect(result).toBe('stored_value');
    });
});
