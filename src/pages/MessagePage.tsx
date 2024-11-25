import { Heading } from '../components/heading'
import { AddButton } from "../components/addButton"
import MessageCard from '../components/messageCard'
import { MOCK_MESSAGES } from "../utils/mockData"
import { DirectMessage } from '../utils/types'

export function MessagePage(): JSX.Element {
    return (
        <div className='flex flex-col gap-4 h-full'>
            <div className='flex items-center justify-between'>
                <Heading headingText='Direct Messages' />
            </div>
            <div className=''>
                {MOCK_MESSAGES.map( (item) => {
                    return <MessageCard dm={item as DirectMessage}/>
                })}
                
            </div>
            <div className='self-end mt-auto mb-2'>
                <AddButton onClick={() => {}} />
            </div>
        </div>
    )
}