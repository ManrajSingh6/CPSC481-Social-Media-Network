import { useParams } from 'react-router-dom';
import { MOCK_CHATS } from '../../utils/mockData';
import ChatItemComp from '../../components/chatItem';

export default function ChatPage() {
  const { id } = useParams(); // Access the 'name' parameter from the URL
  const chat = MOCK_CHATS.find((chat) => chat.friend_id.toString() === id); // Find the chat for the given ID

  if (!chat) {
    return <div>Chat not found!</div>; // If no chat found, show an error message
  }
  return (
    <div className="flex flex-col h-[90%] bg-white border rounded-lg p-2">
      {/* Heading Section */}
      <div className="mb-4 pb-2 border-b">
        <h1 className="text-2xl font-bold">{chat.friend_name}</h1>
      </div>

      {/* Scrollable Messages Section */}
      <div className="flex-1 overflow-y-auto mb-4"> {/* Scrollable messages */}
        <div className="space-y-4 p-2">
        {chat.messages.map((message, index) => (
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
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Type a message"
          className="flex-1 p-2 rounded-lg border"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Send</button>
      </div>
    </div>
  );
}