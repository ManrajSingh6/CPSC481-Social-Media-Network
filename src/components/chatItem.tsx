import { Chat, ChatItem } from "../utils/types"

interface ChatItemCompProps {
    chat : ChatItem
    friendPicUrl: string
    userPicUrl: string
}
export default function ChatItemComp( {chat, friendPicUrl, userPicUrl} : ChatItemCompProps  ): JSX.Element {
    return (
        <div
            className={`flex ${chat.senderID === 1 ? 'flex-row' : 'flex-row-reverse'} items-start gap-4`}
        >
            <img
                src={chat.senderID === 1 ? friendPicUrl : userPicUrl}
                alt="Profile"
                className="w-8 h-8 rounded-full"
            />
            {chat.senderID === 1 ? 
                <div className={'max-w-xs p-2 rounded-lg bg-gray-200'}>
                    <p className="text-sm text-gray-600">{chat.message}</p>
                    <p className="text-xs text-gray-600 mt-1">{chat.time}</p>
                </div>
            :
                <div className={'max-w-xs p-2 rounded-lg bg-blue-500'}>
                    <p className="text-sm text-white">{chat.message}</p>
                    <p className="text-xs text-white mt-1">{chat.time}</p>
                </div>
            }
            
        </div>
    )
}