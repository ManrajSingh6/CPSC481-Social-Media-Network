import { ArrowLeft } from 'lucide-react'
import { Button } from '../components/common/button'
import { Heading } from '../components/common/heading'
import { LabelValueItem } from '../components/common/labelValueItem'
import { useNavigate } from 'react-router-dom'
import { SETTINGS_ROUTE } from '../utils/routes'

export function AppUpdatesPage(): JSX.Element {
  const navigate = useNavigate()

  return (
    <div className='flex flex-col gap-4'>
      <Heading
        headingText='App Updates'
        subText='No new updates are available.'
      />
      <div className='space-y-4'>
        <LabelValueItem
          label='1.1.3'
          value={'Improved RSVP tracking and minor bug fixes.'}
        />
        <LabelValueItem
          label='1.1.2'
          value={
            'Enhanced search functionality and consolidated discover page.'
          }
        />
        <LabelValueItem
          label='1.1.1'
          value={'Improved login security and minor bug fixes.'}
        />
        <LabelValueItem
          label='1.1.0'
          value={'Launched event creation and group chat features.'}
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
