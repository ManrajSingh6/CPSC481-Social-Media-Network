import { ArrowLeft } from 'lucide-react'
import { Button } from '../components/common/button'
import { Heading } from '../components/common/heading'
import { LabelValueItem } from '../components/common/labelValueItem'
import { useUser } from '../context/userContext'
import { useNavigate } from 'react-router-dom'
import { SETTINGS_ROUTE } from '../utils/routes'

export function ProfilePage(): JSX.Element {
  const { user } = useUser()
  const navigate = useNavigate()

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div className='flex flex-col gap-4'>
      <Heading
        headingText='Your Profile'
        subText='Here is some more information about you!'
      />
      <div className='space-y-4'>
        <LabelValueItem label='Name' value={user.fullName} />
        <LabelValueItem label='Username' value={user.username} />
        <LabelValueItem label='Email' value={user.email} />
        <LabelValueItem
          label='Groups Enrolled'
          value={user.enrolledGroupIds.length.toString()}
        />
        <LabelValueItem
          label='Events Enrolled'
          value={user.enrolledEventIds.length.toString()}
        />
      </div>
      <Button
        text='Back to settings'
        variant='secondary'
        icon={<ArrowLeft />}
        onClick={() => navigate(SETTINGS_ROUTE)}
      />
    </div>
  )
}
