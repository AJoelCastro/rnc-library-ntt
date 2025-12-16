import { render, fireEvent, act, waitFor } from '@testing-library/react-native';
import { ChatSession } from '../../../../../../../src/modules/chat/components/organisms/chat_session';
import { type Message } from '../../../../../../../src/modules/chat/types';

// Mock dependencies
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
    let mockSetMessages: jest.Mock;
    let defaultProps: any;

    beforeEach(() => {
        jest.useFakeTimers();
        mockSetMessages = jest.fn();
        defaultProps = {
            messages: [],
            setMessages: mockSetMessages,
        };
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    it('renders correctly with default empty messages', () => {
        const { queryByText } = render(<ChatSession {...defaultProps} />);
        expect(queryByText('Mi conversación')).toBeNull();
    });

    it('renders messages provided via props', () => {
        const messages: Message[] = [
            { id: '1', text: 'Hello from props', sender: 'user' },
            { id: '2', text: 'Bot welcome', sender: 'bot' },
        ];
        const { getByText } = render(<ChatSession {...defaultProps} messages={messages} />);

        expect(getByText('Hello from props')).toBeTruthy();
        expect(getByText('Bot welcome')).toBeTruthy();
    });

    it('sends a message when user types and clicks send', async () => {
        const onMessageSentMock = jest.fn();
        // Simulate setMessages updating state by using a mock implementation? 
        // Usually with controlled components we just check if the updater was called.
        // If the component relies on the prop `messages` to update before logic completes, that might be tricky,
        // but here `messages` prop is only used for rendering and scrollToEnd dependency.
        // The internal `handleSend` calls `setMessages` functional update.

        const { getByTestId } = render(
            <ChatSession {...defaultProps} onMessageSent={onMessageSentMock} />
        );

        const input = getByTestId('input-with-delete');
        const sendButton = getByTestId('send-button');

        fireEvent.changeText(input, 'New User Message');
        fireEvent.press(sendButton);

        // Check callback
        expect(onMessageSentMock).toHaveBeenCalledWith('New User Message');
        expect(onMessageSentMock).toHaveBeenCalledTimes(1);

        // Check setMessages called
        expect(mockSetMessages).toHaveBeenCalledTimes(1);

        // Verify arguments to setMessages (functional update)
        const updateFn = mockSetMessages.mock.calls[0][0];
        const newMessages = updateFn([]); // simulating previous messages empty
        expect(newMessages).toHaveLength(1);
        expect(newMessages[0].text).toBe('New User Message');

        // Check input cleared
        expect(input.props.value).toBe('');
    });

    it('triggers bot response after timeout', async () => {
        const { getByTestId } = render(<ChatSession {...defaultProps} />);
        const input = getByTestId('input-with-delete');
        const sendButton = getByTestId('send-button');

        fireEvent.changeText(input, 'Trigger Bot');
        fireEvent.press(sendButton);

        // First call for user message
        expect(mockSetMessages).toHaveBeenCalledTimes(1);

        // Fast forward time
        act(() => {
            jest.advanceTimersByTime(800);
        });

        // Second call for bot message
        await waitFor(() => {
            expect(mockSetMessages).toHaveBeenCalledTimes(2);
        });

        // Check the bot message update
        const botUpdateFn = mockSetMessages.mock.calls[1][0];
        const result = botUpdateFn([]); // previous ignored in check
        expect(result[0].sender).toBe('bot');
        expect(result[0].text).toBe('Respuesta del chatbox');
    });

    it('does not send empty messages', () => {
        const onMessageSentMock = jest.fn();
        const { getByTestId } = render(
            <ChatSession {...defaultProps} onMessageSent={onMessageSentMock} />
        );

        const input = getByTestId('input-with-delete');
        const sendButton = getByTestId('send-button');

        fireEvent.changeText(input, '   ');
        fireEvent.press(sendButton);

        expect(onMessageSentMock).not.toHaveBeenCalled();
        expect(mockSetMessages).not.toHaveBeenCalled();
    });
});
