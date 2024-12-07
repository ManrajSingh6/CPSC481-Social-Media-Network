import { ChatItem } from '../utils/types'

interface ChatItemCompProps {
  chat: ChatItem
  friendPicUrl: string
  userPicUrl: string
}
export default function ChatItemComp({
  chat,
  friendPicUrl,
  userPicUrl
}: ChatItemCompProps): JSX.Element {
  return (
    <div
      className={`flex ${chat.senderID === 1 ? 'flex-row' : 'flex-row-reverse'} items-start gap-4`}
    >
      <img
        src={chat.senderID === 1 ? friendPicUrl : userPicUrl}
        alt='Profile'
        className='h-8 w-8 rounded-full'
      />
      {chat.senderID === 1 ? (
        <div className={'max-w-xs rounded-lg bg-gray-200 p-2'}>
          <p className='text-sm text-gray-600'>{chat.message}</p>
          <p className='mt-1 text-xs text-gray-600'>{chat.time}</p>
        </div>
      ) : (
        <div className={'max-w-xs rounded-lg bg-gray-950 p-2'}>
          <p className='text-sm text-white'>{chat.message}</p>
          <p className='mt-1 text-xs text-white'>{chat.time}</p>
        </div>
      )}
    </div>
  )
}
