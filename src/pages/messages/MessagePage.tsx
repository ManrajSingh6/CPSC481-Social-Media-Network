import { Heading } from '../../components/common/heading'
import { AddButton } from '../../components/common/addButton'
import MessageCard from '../../components/messageCard'
import { MOCK_MESSAGES } from '../../utils/mockData'
import { NavLink } from 'react-router-dom'
import { NEW_CHAT_ROUTE } from '../../utils/routes'

export function MessagePage(): JSX.Element {
  return (
    <div className='flex h-full flex-col gap-4'>
      <div className='flex items-center justify-between'>
        <Heading headingText='Direct Messages' />
        <NavLink to={NEW_CHAT_ROUTE}>
          <AddButton onClick={() => {}} />
        </NavLink>
      </div>
      <div>
        {MOCK_MESSAGES.map((item) => {
          return <MessageCard directMessage={item} key={item.id} />
        })}
      </div>
    </div>
  )
}
