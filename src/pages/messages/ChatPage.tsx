import { useParams } from 'react-router-dom';
import { MOCK_CHATS, MOCK_NEW_USERS } from '../../utils/mockData'; // Import both existing and new users
import ChatItemComp from '../../components/chatItem';
import { useEffect, useRef, useState } from 'react';
import { Heading } from '../../components/common/heading';

export default function ChatPage() {
  const { id } = useParams(); // Access the 'id' parameter from the URL
  const chat = MOCK_CHATS.find((chat) => chat.friend_id.toString() === id); // Find the chat for the given ID
  const newUser = MOCK_NEW_USERS.find((user) => user.id.toString() === id); // Find the user if it's a new chat

  const [messages, setMessages] = useState(chat?.messages || []); // Use the existing messages if present, otherwise an empty array
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null); // Reference to the bottom of the messages container

  const handleSendMessage = () => {

    if (newMessage.trim() === "") return;

    const newChatItem = {
      senderID: 0,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      message: newMessage,
    };

    // For new chats, set the message state accordingly
    if (!chat) {
      setMessages([newChatItem]); // Start a new conversation
    } else {
      setMessages([newChatItem, ...messages]); // Add to the existing conversation
    }
    
    setNewMessage("");
    scrollToBottom();
  };

  
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // If no chat exists, show a "start new chat" message
  if (!chat && !newUser) {
    return <div>User not found!</div>;
  }

  useEffect(() => {
    scrollToBottom(); // Scroll to the bottom when the component renders
  }, []);

  return (
    <div className="flex flex-col h-[90%] bg-white border rounded-lg p-2">
      {/* Heading Section */}
      <div className="mb-4 pb-2 border-b">
        <Heading headingText={chat?.friend_name || newUser?.name || ""} />
      </div>

      {/* Scrollable Messages Section */}
      <div className="flex-1 overflow-y-auto mb-4"> {/* Scrollable messages */}
        <div className="space-y-4 p-2">
          {messages.length > 0 ? (
            messages.slice().reverse().map((message, index) => (
              <ChatItemComp 
                chat={message} 
                friendPicUrl={chat?.friend_pictureURL || newUser?.pictureURL || ""} 
                userPicUrl="https://avatar.iran.liara.run/public/5" 
                key={index}
              />
            ))
          ) : (
            <div className="text-center text-gray-500">Start the conversation by typing a message!</div>
          )}
          <div ref={messagesEndRef}/>
        </div>
      </div>

      {/* New Message Section */}
      <div className="flex items-end gap-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message"
          className="flex-1 p-2 rounded-lg border"
        />
        <button
          onClick={handleSendMessage}
          className="bg-gray-950 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition-colors duration-300 ease-in-out"
        >
          Send
        </button>
      </div>
    </div>
  );
}
