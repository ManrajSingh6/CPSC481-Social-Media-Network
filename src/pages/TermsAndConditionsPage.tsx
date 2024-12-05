import { ArrowLeft } from 'lucide-react'
import { Button } from '../components/common/button'
import { Heading } from '../components/common/heading'
import { LabelValueItem } from '../components/common/labelValueItem'
import { useNavigate } from 'react-router-dom'

export function TermsAndConditionsPage(): JSX.Element {
  const navigate = useNavigate()

  const termsContent = {
    acceptance: 'By accessing and using this platform, you agree to be bound by these terms and conditions.',
    privacy: 'We respect your privacy and protect your personal information according to our privacy policy.',
    conduct: 'Users must behave respectfully, avoid harmful content, and follow community guidelines.',
    content: 'Users retain ownership of their content but grant us license to display and distribute it on the platform.',
    liability: 'We provide this service "as is" and are not liable for any damages arising from its use.'
  }

  return (
    <div className='flex flex-col h-full p-4 overflow-y-auto'>
      <div className='mb-4'>
        <Button
          text='Back'
          variant='secondary'
          icon={<ArrowLeft />}
          onClick={() => navigate(-1)}
        />
      </div>

      <Heading 
        headingText='Terms & Conditions'
        subText='Please read our terms of service'
      />

      <div className='space-y-6 flex-grow'>
        <LabelValueItem 
          label='Acceptance of Terms'
          value={termsContent.acceptance}
          className='bg-white rounded-lg p-4 shadow-sm'
        />
        <LabelValueItem 
          label='Privacy Policy'
          value={termsContent.privacy}
          className='bg-white rounded-lg p-4 shadow-sm'
        />
        <LabelValueItem 
          label='User Conduct'
          value={termsContent.conduct}
          className='bg-white rounded-lg p-4 shadow-sm'
        />
        <LabelValueItem 
          label='Content Rights'
          value={termsContent.content}
          className='bg-white rounded-lg p-4 shadow-sm'
        />
        <LabelValueItem 
          label='Limitation of Liability'
          value={termsContent.liability}
          className='bg-white rounded-lg p-4 shadow-sm'
        />
      </div>
    </div>
  )
}
