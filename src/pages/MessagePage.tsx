import { Heading } from '../components/util/heading'
import { AddButton } from '../components/util/addButton'
import MessageCard from '../components/messageCard'
import { MOCK_MESSAGES } from '../utils/mockData'
import { DirectMessage } from '../utils/types'

export function MessagePage(): JSX.Element {
  return (
    <div className='flex h-full flex-col gap-4'>
      <div className='flex items-center justify-between'>
        <Heading headingText='Direct Messages' />
      </div>
      <div className=''>
        {MOCK_MESSAGES.map((item) => {
          return <MessageCard dm={item as DirectMessage} />
        })}
      </div>
      <div className='mb-2 mt-auto self-end'>
        <AddButton onClick={() => {}} />
      </div>
    </div>
  )
}
