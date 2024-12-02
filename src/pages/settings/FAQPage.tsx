import { ArrowLeft } from 'lucide-react'
import { Button } from '../../components/common/button'
import { Heading } from '../../components/common/heading'
import { LabelValueItem } from '../../components/common/labelValueItem'
import { useNavigate } from 'react-router-dom'
import { SETTINGS_ROUTE } from '../../utils/routes'

export function FAQPage(): JSX.Element {
  const navigate = useNavigate()

  return (
    <div className='flex flex-col gap-4'>
      <Heading headingText='Some Frequently Asked Questions' />
      <div className='space-y-4'>
        <LabelValueItem
          label='What is the purpose of our app?'
          value={
            'This is a platform for university students to join groups, discover events, and connect with others on campus.'
          }
        />
        <LabelValueItem
          label='How do I join a group?'
          value={
            'Identify a group you want to join in the Discover page, and click the join button.'
          }
        />
        <LabelValueItem
          label='Can I create my own group?'
          value={
            'Yes! Use the create group button in the Discover page, fill in the details and create!'
          }
        />
        <LabelValueItem
          label='Is my data safe?'
          value={
            'We prioritize your privacy and only collect necessary data to enhance your experience. For details, check our Privacy Policy.'
          }
        />
        <LabelValueItem
          label='Who do I contact for support?'
          value={
            <p>
              Email us at{' '}
              <span className='font-semibold'>cpsc.t4g1@support.edu</span>
            </p>
          }
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
