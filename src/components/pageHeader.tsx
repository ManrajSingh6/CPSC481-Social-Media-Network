import { Bell } from 'lucide-react'
import { User } from '../utils/types'
import { CustomImage } from './util/customImage'
import { useLocation, useNavigate } from 'react-router-dom'
import { NOTIFICATIONS_ROUTE } from '../utils/routes'

interface PageHeaderProps {
  readonly user: User
}

export function PageHeader({ user }: PageHeaderProps): JSX.Element {
  const navigate = useNavigate()
  const location = useLocation();

  // Check if the current route is the notifications page
  const isOnNotificationsPage = location.pathname === NOTIFICATIONS_ROUTE;

  return (
    <div className='flex items-center justify-between'>
      <CustomImage
        src={user.profilePicUrl}
        alt='user-profile-pic'
        className='h-14 w-14 rounded-full shadow-md'
      />
      <Bell
        className={`h-6 w-6 cursor-pointer ${isOnNotificationsPage ? 'text-black-500' : 'text-gray-500'}`}
        onClick={() => navigate(NOTIFICATIONS_ROUTE)}
      />
    </div>
  )
}
