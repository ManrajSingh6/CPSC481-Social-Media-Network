// Basic message page structure
// - Display list of conversations
// - Display messages within a conversation
// - Input for new message
// Implement chat functionality
// Add real-time messaging
// Add user online status
// Include message notifications
import { useState, useEffect } from 'react';
import { getMessages } from '../../services/mockAPI';
import { Message } from '../../types';
import styles from './Messages.module.css';

const Messages = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const loadMessages = async () => {
      try {
        const data = await getMessages('1'); // Current user ID
        setMessages(data);
      } catch (error) {
        console.error('Failed to load messages:', error);
      }
    };

    loadMessages();
  }, []);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    // Add message sending logic
    setNewMessage('');
  };

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.conversations}>
          {/* Conversation list */}
        </div>
      </div>
      
      <div className={styles.chat}>
        {selectedChat ? (
          <>
            <div className={styles.messages}>
              {/* Message list */}
            </div>
            <form onSubmit={handleSendMessage} className={styles.messageInput}>
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
              />
              <button type="submit">Send</button>
            </form>
          </>
        ) : (
          <div className={styles.noChat}>
            Select a conversation to start messaging
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;