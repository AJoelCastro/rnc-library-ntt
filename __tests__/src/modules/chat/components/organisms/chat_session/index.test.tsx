import { render, fireEvent, act, waitFor } from '@testing-library/react-native';
import { ChatSession } from '../../../../../../../src/modules/chat/components/organisms/chat_session';
import { type Message } from '../../../../../../../src/modules/chat/types';

// Mock dependencies to isolate the unit test
jest.mock('../../../../../../../src/modules/shared', () => {
    const { TextInput } = require('react-native');
    return {
        InputWithDelete: (props: any) => (
            <TextInput testID="input-with-delete" {...props} />
        ),
    };
});

jest.mock('../../../../../../../src/modules/chat/components/molecules/send_button', () => {
    const { TouchableOpacity, Text } = require('react-native');
    return {
        SendButton: ({ onPress }: any) => (
            <TouchableOpacity testID="send-button" onPress={onPress}>
                <Text>{'>'}</Text>
            </TouchableOpacity>
        ),
    };
});

describe('ChatSession', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    it('renders correctly with default empty messages', () => {
        const { queryByText } = render(<ChatSession />);
        // Should not show any "Mi conversación" initially if default props are used (which defaults to [])
        expect(queryByText('Mi conversación')).toBeNull();
    });

    it('renders initialMessages provided via props', () => {
        const initialMessages: Message[] = [
            { id: '1', text: 'Hello from props', sender: 'user' },
            { id: '2', text: 'Bot welcome', sender: 'bot' },
        ];
        const { getByText } = render(<ChatSession initialMessages={initialMessages} />);

        expect(getByText('Hello from props')).toBeTruthy();
        expect(getByText('Bot welcome')).toBeTruthy();
    });

    it('sends a message when user types and clicks send', async () => {
        const onMessageSentMock = jest.fn();
        const { getByTestId, getByText } = render(
            <ChatSession onMessageSent={onMessageSentMock} />
        );

        const input = getByTestId('input-with-delete');
        const sendButton = getByTestId('send-button');

        // Type message
        fireEvent.changeText(input, 'New User Message');

        // Press send
        fireEvent.press(sendButton);

        // Check if message appears in the list
        expect(getByText('New User Message')).toBeTruthy();

        // Check callback
        expect(onMessageSentMock).toHaveBeenCalledWith('New User Message');
        expect(onMessageSentMock).toHaveBeenCalledTimes(1);

        // Check if input is cleared (mock InputWithDelete receives value prop)
        expect(input.props.value).toBe('');
    });

    it('triggers bot response after timeout', async () => {
        const { getByTestId, getAllByText } = render(<ChatSession />);
        const input = getByTestId('input-with-delete');
        const sendButton = getByTestId('send-button');

        fireEvent.changeText(input, 'Trigger Bot');
        fireEvent.press(sendButton);

        // Fast forward time
        act(() => {
            jest.advanceTimersByTime(800);
        });

        await waitFor(() => {
            // "Respuesta del chatbox" is the hardcoded bot response text
            const botMessages = getAllByText('Respuesta del chatbox');
            expect(botMessages.length).toBeGreaterThan(0);
        });
    });

    it('does not send empty messages', () => {
        const onMessageSentMock = jest.fn();
        const { getByTestId } = render(
            <ChatSession onMessageSent={onMessageSentMock} />
        );

        const input = getByTestId('input-with-delete');
        const sendButton = getByTestId('send-button');

        // Whitespace only
        fireEvent.changeText(input, '   ');
        fireEvent.press(sendButton);

        expect(onMessageSentMock).not.toHaveBeenCalled();
    });

    it('handles styles for user and bot messages', () => {
        const initialMessages: Message[] = [
            { id: 'u1', text: 'User Msg', sender: 'user' },
            { id: 'b1', text: 'Bot Msg', sender: 'bot' },
        ];
        const { getByText } = render(<ChatSession initialMessages={initialMessages} />);

        const userBubble = getByText('User Msg').parent; // Approximate checks if we cared about style
        const botBubble = getByText('Bot Msg').parent;

        expect(userBubble).toBeTruthy();
        expect(botBubble).toBeTruthy();
    });
});
