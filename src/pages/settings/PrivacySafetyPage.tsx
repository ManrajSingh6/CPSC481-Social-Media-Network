import { ArrowLeft } from 'lucide-react'
import { Button } from '../../components/common/button'
import { Heading } from '../../components/common/heading'
import { LabelValueItem } from '../../components/common/labelValueItem'
import { useNavigate } from 'react-router-dom'
import { SETTINGS_ROUTE } from '../../utils/routes'

export function PrivacySafetyPage(): JSX.Element {
  const navigate = useNavigate()

  const privacySafetyString =
    'Your privacy and safety are our top priorities. We collect minimal data necessary to provide a great experience and never share your personal information without your consent. Our team actively monitors the platform to ensure a safe environment, and we provide tools for reporting inappropriate content. For detailed information, refer to our Privacy Policy.'

  return (
    <div className='flex flex-col gap-4'>
      <Heading headingText='Our Privacy and Safety Policy' />
      <LabelValueItem label='Privacy and Safety' value={privacySafetyString} />
      <Button
        text='Back to settings'
        variant='secondary'
        icon={<ArrowLeft />}
        onClick={() => navigate(SETTINGS_ROUTE)}
      />
    </div>
  )
}
