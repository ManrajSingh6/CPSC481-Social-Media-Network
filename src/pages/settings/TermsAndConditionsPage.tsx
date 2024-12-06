import { ArrowLeft } from 'lucide-react'
import { Button } from '../../components/common/button'
import { Heading } from '../../components/common/heading'
import { LabelValueItem } from '../../components/common/labelValueItem'
import { useNavigate } from 'react-router-dom'
import { SETTINGS_ROUTE } from '../../utils/routes'

export function TermsAndConditionsPage(): JSX.Element {
  const navigate = useNavigate()

  const ToCString =
    'By using our app, you agree to respect others, follow university policies, and avoid sharing inappropriate or harmful content. We may collect basic usage data to improve the app, and your account can be suspended for violating these terms. Enjoy connecting with your campus community!'

  return (
    <div className='flex flex-col gap-4'>
      <Heading
        headingText='Terms and Conditions'
        subText='Please review our terms of service'
      />
      <LabelValueItem label='Terms and Conditions' value={ToCString} />
      <Button
        text='Back to settings'
        variant='secondary'
        icon={<ArrowLeft />}
        onClick={() => navigate(SETTINGS_ROUTE)}
      />
    </div>
  )
}
