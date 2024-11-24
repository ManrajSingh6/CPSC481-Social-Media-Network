import { Bell } from 'lucide-react'
import { User } from '../utils/types'
import { CustomImage } from './customImage'

interface PageHeaderProps {
  readonly user: User
}

export function PageHeader({ user }: PageHeaderProps): JSX.Element {
  return (
    <div className='flex items-center justify-between'>
      <CustomImage
        src={user.profilePicUrl}
        alt='user-profile-pic'
        className='h-14 w-14 rounded-full shadow-md'
      />
      <Bell className='h-6 w-6' />
    </div>
  )
}
