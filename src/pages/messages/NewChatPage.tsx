import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { MOCK_CHATS, MOCK_NEW_USERS } from '../../utils/mockData'
import { NewChatUser } from '../../utils/types'
import { Heading } from '../../components/common/heading'

export default function NewChatPage(): JSX.Element {
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  // Combine existing chats and new potential contacts (new users)
  const allUsers = [
    ...MOCK_CHATS.map((chat) => ({
      id: chat.friend_id,
      pictureURL: chat.friend_pictureURL,
      name: chat.friend_name
    })),
    ...MOCK_NEW_USERS.map((user) => ({
      id: user.id,
      pictureURL: user.pictureURL,
      name: user.name
    }))
  ]

  // Remove duplicates (favor existing chats)
  const uniqueUsers = Array.from(
    new Map(allUsers.map((user) => [user.id, user])).values()
  )

  // Filter users based on the search query
  const filteredUsers = uniqueUsers.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleUserSelection = (user: NewChatUser) => {
    // Check if there's an existing chat
    const existingChat = MOCK_CHATS.find((chat) => chat.friend_id === user.id)

    if (existingChat) {
      // Navigate to the existing chat page
      navigate(`/chat/${existingChat.friend_id}`)
    } else {
      // Navigate to a new chat page with no messages
      navigate(`/chat/${user.id}`, { state: { isNewChat: true, user } })
    }
  }

  return (
    <div className='flex h-screen flex-col'>
      {/* <h1 className="text-2xl font-bold mb-4">Start New Chat</h1> */}
      <Heading headingText='Start New Chat' />
      {/* Search Bar */}
      <input
        type='text'
        placeholder='Search for a person'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className='mb-4 w-full rounded-lg border p-2'
      />

      {/* User List */}
      <div className='space-y-2'>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div
              key={user.id}
              onClick={() => handleUserSelection(user)}
              className='flex cursor-pointer items-center gap-4 rounded-lg bg-white p-2 shadow hover:bg-gray-100'
            >
              <img
                src={user.pictureURL}
                alt={`${user.name}'s profile`}
                className='h-10 w-10 rounded-full'
              />
              <span className='text-lg font-medium'>{user.name}</span>
            </div>
          ))
        ) : (
          <p className='text-gray-500'>No users found.</p>
        )}
      </div>
    </div>
  )
}
