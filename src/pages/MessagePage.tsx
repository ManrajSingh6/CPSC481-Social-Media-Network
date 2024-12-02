import { Heading } from '../components/common/heading'
import { AddButton } from '../components/common/addButton'
import MessageCard from '../components/messageCard'
import { MOCK_MESSAGES } from '../utils/mockData'

export function MessagePage(): JSX.Element {
  return (
    <div className='flex h-full flex-col gap-4'>
      <div className='flex items-center justify-between'>
        <Heading headingText='Direct Messages' />
        <AddButton onClick={() => {}} />
      </div>
      <div>
        {MOCK_MESSAGES.map((item) => {
          return <MessageCard directMessage={item} key={item.id} />
        })}
      </div>
    </div>
  )
}
