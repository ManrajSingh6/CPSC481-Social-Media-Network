import React, { useState } from "react";
import { Heading } from "../../components/common/heading";

const MOCK_USERS = [
  { id: 1, name: "Aubrey Graham", pictureURL: "https://avatar.iran.liara.run/public/1" },
  { id: 2, name: "Sam Kim", pictureURL: "https://avatar.iran.liara.run/public/2" },
  { id: 3, name: "Luke Chiang", pictureURL: "https://avatar.iran.liara.run/public/3" },
];

interface User {
  id: number;
  name: string;
  pictureURL: string;
}

export default function NewChatPage(): JSX.Element {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [message, setMessage] = useState("");

  const filteredUsers = MOCK_USERS.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendMessage = () => {
    if (message.trim() === "") return;
    alert(`Message sent to ${selectedUser?.name}: "${message}"`);
    setMessage("");
    setSelectedUser(null);
  };

  return (
    <div className="flex flex-col h-screen ">
      {!selectedUser ? (
        // User Search Section
        <div>
          <Heading headingText="Start New Chat"/>
          <input
            type="text"
            placeholder="Search for a person"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 rounded-lg border mb-4"
          />
          <div className="space-y-2">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <div
                  key={user.id}
                  onClick={() => setSelectedUser(user)}
                  className="flex items-center gap-4 p-2 rounded-lg bg-white shadow hover:bg-gray-100 cursor-pointer"
                >
                  <img
                    src={user.pictureURL}
                    alt={`${user.name}'s profile`}
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="text-lg font-medium">{user.name}</span>
                </div>
              ))
            ) : (
              <p>No users found.</p>
            )}
          </div>
        </div>
      ) : (
        // Chat Section
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-4 mb-4">
            <img
              src={selectedUser.pictureURL}
              alt={`${selectedUser.name}'s profile`}
              className="w-12 h-12 rounded-full"
            />
            <h1 className="text-2xl font-bold">{selectedUser.name}</h1>
          </div>
          <div className="flex-1 bg-white border rounded-lg p-4 overflow-y-auto">
            {/* Empty state for no messages yet */}
            <p className="text-gray-500 text-center">Start a conversation with {selectedUser.name}!</p>
          </div>
          <div className="flex gap-2 mt-4">
            <input
              type="text"
              placeholder="Type your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 p-2 rounded-lg border"
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
