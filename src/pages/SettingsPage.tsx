import { CustomImage } from '../components/common/customImage'
import { Heading } from '../components/common/heading'
import SettingsItem from '../components/settingsItem'
import { MOCK_USER } from '../utils/mockData'

export default function SettingsPage(): JSX.Element {
  return (
    <div>
      <div>
        <Heading headingText='Settings' />
      </div>
      <div className='my-4 flex flex-col items-center justify-center py-4'>
        <CustomImage
          src={MOCK_USER.profilePicUrl}
          alt={MOCK_USER.fullName + ' profile-picture'}
          className='mb-2 w-20'
        />
        <Heading headingText={MOCK_USER.fullName} headingSize='medium' />
      </div>
      <div>
        <p className='my-2'>Account settings</p>
        <div className='rounded-lg border bg-white p-2'>
          <SettingsItem iconUrl='User' title='Profile' />
          <SettingsItem iconUrl='Bell' title='Notification' />
          <SettingsItem iconUrl='Shield' title='Privacy and Safety' />
        </div>
        <p className='my-2'>Support</p>
        <div className='rounded-lg border bg-white p-2'>
          <SettingsItem
            iconUrl='CircleHelp'
            title='Frequently Asked Questions'
          />
          <SettingsItem iconUrl='BookOpen' title='Terms & Conditions' />
          <SettingsItem iconUrl='Info' title='App Updates' />
        </div>
        <div className='my-2 rounded-lg border bg-white p-2'>
          <SettingsItem iconUrl='LogOut' title='Logout' color='red' />
        </div>
      </div>
    </div>
  )
}
