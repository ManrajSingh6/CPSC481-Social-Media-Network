import { ArrowLeft } from 'lucide-react'
import { Button } from '../components/common/button'
import { Heading } from '../components/common/heading'
import { LabelValueItem } from '../components/common/labelValueItem'
import { useNavigate } from 'react-router-dom'

export function AboutUsPage(): JSX.Element {
    const navigate = useNavigate()
  
    const aboutContent = {
      story: 'We are passionate about creating meaningful connections within university communities, making it easier for students to engage, participate, and thrive in campus life.',
      mission: 'Our mission is to enhance the university experience by providing a seamless platform for students to discover events, join groups, and build lasting connections.',
      team: 'We are a dedicated team of developers and designers committed to building innovative solutions that bring campus communities closer together.'
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
          headingText='About Us'
          subText='Learn more about our platform and mission'
        />
        
        <div className='space-y-6 flex-grow'>
          <LabelValueItem 
            label='Our Story' 
            value={aboutContent.story}
            className='bg-white rounded-lg p-4 shadow-sm'
          />
          <LabelValueItem 
            label='Our Mission' 
            value={aboutContent.mission}
            className='bg-white rounded-lg p-4 shadow-sm'
          />
          <LabelValueItem 
            label='Our Team' 
            value={aboutContent.team}
            className='bg-white rounded-lg p-4 shadow-sm'
          />
        </div>
      </div>
    )
  }
