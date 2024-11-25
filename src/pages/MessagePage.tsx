import { Heading } from '../components/common/heading'
import { AddButton } from '../components/common/addButton'
import MessageCard from '../components/messageCard'
import { MOCK_MESSAGES } from '../utils/mockData'

export function MessagePage(): JSX.Element {
  return (
    <div className='flex h-full flex-col gap-4'>
      <Heading headingText='Direct Messages' />
      <div className=''>
        {MOCK_MESSAGES.map((item) => {
          return <MessageCard dm={item} key={item.id} />
        })}
      </div>
      <div className='mb-2 mt-auto self-end'>
        <AddButton onClick={() => {}} />
      </div>
    </div>
  )
}
