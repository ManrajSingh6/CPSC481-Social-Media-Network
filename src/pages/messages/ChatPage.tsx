import { useParams } from 'react-router-dom';
import { MOCK_CHATS } from '../../utils/mockData';
import ChatItemComp from '../../components/chatItem';
import { InputField } from '../../components/common/inputField';
import { Button } from '../../components/common/button';
import { useState } from 'react';
import { Heading } from '../../components/common/heading';

export default function ChatPage() {
  const { id } = useParams(); // Access the 'name' parameter from the URL
  const chat = MOCK_CHATS.find((chat) => chat.friend_id.toString() === id); // Find the chat for the given ID
  
  const [messages, setMessages] = useState(chat?.messages || []);
  const [newMessage, setNewMessage] = useState("");

  if (!chat) {
    return <div>Chat not found!</div>; // If no chat found, show an error message
  }

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;
    const newChatItem = {
      senderID: 0,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      message: newMessage,
    };
    setMessages([newChatItem, ...messages ]);
    setNewMessage("");
  };

  return (
    <div className="flex flex-col h-[90%] bg-white border rounded-lg p-2">
      {/* Heading Section */}
      <div className="mb-4 pb-2 border-b">
        <Heading headingText={chat.friend_name}/>
      </div>

      {/* Scrollable Messages Section */}
      <div className="flex-1 overflow-y-auto mb-4 scroll-"> {/* Scrollable messages */}
        <div className="space-y-4 p-2">
        {messages
          .slice()
          .reverse()
          .map((message, index) => (
            <ChatItemComp 
              chat={message} 
              friendPicUrl={chat.friend_pictureURL} 
              userPicUrl={chat.user_pictureURL} 
              key={index}
            />
          ))}
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