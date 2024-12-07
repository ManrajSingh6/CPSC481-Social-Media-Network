import { Bell } from 'lucide-react'
import { User } from '../utils/types'
import { CustomImage } from './common/customImage'
import { NavLink } from 'react-router-dom'
import { NOTIFICATIONS_ROUTE } from '../utils/routes'

interface PageHeaderProps {
  readonly user: User
}

export function PageHeader({ user }: PageHeaderProps): JSX.Element {
  return (
    <div className='flex items-center justify-between'>
      <CustomImage
        src={user.profilePicUrl}
        alt='user-profile-pic'
        className='h-11 w-11 rounded-full shadow-md'
      />
      <NavLink
        to={NOTIFICATIONS_ROUTE}
        className={({ isActive }) =>
          `font-bold ${isActive ? `text-black-500 font-bold` : 'text-gray-600'}`
        }
      >
        <Bell />
      </NavLink>
    </div>
  )
}
