import { ArrowLeft } from 'lucide-react'
import { Button } from '../components/common/button'
import { Heading } from '../components/common/heading'
import { LabelValueItem } from '../components/common/labelValueItem'
import { useNavigate } from 'react-router-dom'
import { SETTINGS_ROUTE } from '../utils/routes'

export function NotificationSettingsPage(): JSX.Element {
  const navigate = useNavigate()

  return (
    <div className='flex flex-col gap-4'>
      <Heading
        headingText='Notification Settings'
        subText="Please edit app notification settings in your phone's settings app."
      />
      <LabelValueItem label='Are notifications enabled?' value={'True'} />
      <Button
        text='Back to settings'
        variant='secondary'
        icon={<ArrowLeft />}
        onClick={() => navigate(SETTINGS_ROUTE)}
      />
    </div>
  )
}
