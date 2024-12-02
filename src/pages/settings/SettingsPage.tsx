import { useNavigate } from 'react-router-dom'
import { CustomImage } from '../../components/common/customImage'
import { Heading } from '../../components/common/heading'
import SettingsItem from '../../components/settingsItem'
import { useUser } from '../../context/userContext'
import { MOCK_USER } from '../../utils/mockData'
import {
  APP_UPDATES_ROUTE,
  FAQ_ROUTE,
  LOGIN_ROUTE,
  NOTIFCATON_SETTINGS_ROUTE,
  PRIVACY_SAFETY_ROUTE,
  PROFILE_ROUTE,
  TERMS_AND_CONDITIONS_ROUTE
} from '../../utils/routes'

export default function SettingsPage(): JSX.Element {
  const { logout } = useUser()
  const navigate = useNavigate()

  function handleLogout(): void {
    logout()
    navigate(LOGIN_ROUTE)
  }

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
          <SettingsItem
            iconUrl='User'
            title='Profile'
            onClick={() => navigate(PROFILE_ROUTE)}
          />
          <SettingsItem
            iconUrl='Bell'
            title='Notification'
            onClick={() => navigate(NOTIFCATON_SETTINGS_ROUTE)}
          />
          <SettingsItem
            iconUrl='Shield'
            title='Privacy and Safety'
            onClick={() => navigate(PRIVACY_SAFETY_ROUTE)}
          />
        </div>
        <p className='my-2'>Support</p>
        <div className='rounded-lg border bg-white p-2'>
          <SettingsItem
            iconUrl='CircleHelp'
            title='Frequently Asked Questions'
            onClick={() => navigate(FAQ_ROUTE)}
          />
          <SettingsItem
            iconUrl='BookOpen'
            title='Terms & Conditions'
            onClick={() => navigate(TERMS_AND_CONDITIONS_ROUTE)}
          />
          <SettingsItem
            iconUrl='Info'
            title='App Updates'
            onClick={() => navigate(APP_UPDATES_ROUTE)}
          />
        </div>
        <div className='my-2 rounded-lg border bg-white p-2'>
          <SettingsItem
            iconUrl='LogOut'
            title='Logout'
            color='red'
            onClick={handleLogout}
          />
        </div>
      </div>
    </div>
  )
}
