import { render, fireEvent, act, waitFor } from '@testing-library/react-native';
import { ChatSession } from '@/modules/chat/components/organisms/chat_session';

// Mock InputWithDelete to avoid complex dependencies usually found in shared components
jest.mock('@/modules/shared', () => ({
    InputWithDelete: ({ }: any) => (
        <></> // Simplified mock, typically we'd use a real TextInput but let's see if we can just mock it or if we need to interact with it.
        // Actually, we need to interact with it. Let's return a TextInput.
    ),
}));

// Better mock for InputWithDelete
jest.mock('@/modules/shared', () => {
    const { TextInput } = require('react-native');
    return {
        InputWithDelete: (props: any) => <TextInput testID="input-with-delete" {...props} />,
    };
});

describe('ChatSession', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    it('renders initial messages', () => {
        const { getByText, getAllByText } = render(<ChatSession />);
        expect(getAllByText('Mi conversación').length).toBeGreaterThan(0);
        expect(getByText('Respuesta del chatbox')).toBeTruthy();
    });

    it('allows sending a message', async () => {
        const { getByTestId, getByText, getAllByText } = render(<ChatSession />);

        const input = getByTestId('input-with-delete');
        fireEvent.changeText(input, 'Hello World');

        // Find send button (it renders > text)
        const sendButton = getByText('>');
        fireEvent.press(sendButton);

        // Check if user message appears
        expect(getByText('Hello World')).toBeTruthy();

        // Fast forward time for bot response
        act(() => {
            jest.advanceTimersByTime(1000);
        });

        // Check if bot response appears
        await waitFor(() => {
            const botMessages = getAllByText('Respuesta del chatbox');
            expect(botMessages.length).toBeGreaterThan(0);
        });
    });

    it('adds bot response after delay', async () => {
        const { getByTestId, getByText, getAllByText } = render(<ChatSession />);
        const input = getByTestId('input-with-delete');

        fireEvent.changeText(input, 'New Message');
        fireEvent.press(getByText('>'));

        expect(getByText('New Message')).toBeTruthy();

        const initialBotCount = getAllByText('Respuesta del chatbox').length;

        act(() => {
            jest.advanceTimersByTime(800);
        });

        expect(getAllByText('Respuesta del chatbox').length).toBeGreaterThan(initialBotCount);
    });

    it('does not send empty message', () => {
        const { getByText, getAllByText } = render(<ChatSession />);
        const initialCount = getAllByText('Mi conversación').length; // Just counting random existing msgs

        const sendButton = getByText('>');
        fireEvent.press(sendButton);

        // Should stay same
        expect(getAllByText('Mi conversación').length).toBe(initialCount);
    });
});
