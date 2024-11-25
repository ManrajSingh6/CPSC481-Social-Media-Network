import NotificationCard from '../components/notificationCard'
import { Heading } from '../components/util/heading'
import { MOCK_NOTIFICATIONS } from '../utils/mockData'

export default function NotificationsPage(): JSX.Element {
  return (
    <div>
      <Heading headingText='Notifications' headingSize='large' />

      <div className='mt-4'>
        <Heading headingText='Recent' headingSize='small' />
        {MOCK_NOTIFICATIONS.slice(0, 2).map((notif) => {
          return <NotificationCard notif={notif} />
        })}
      </div>

      <hr className='border' />

      <div className='mt-4'>
        <Heading headingText='Last Week' headingSize='small' />
        {MOCK_NOTIFICATIONS.slice(2, 4).map((notif) => {
          return <NotificationCard notif={notif} />
        })}
      </div>

      <hr className='border' />

      <div className='mt-4'>
        <Heading headingText='Last Month' headingSize='small' />
        <NotificationCard notif={MOCK_NOTIFICATIONS[4]} />
      </div>
    </div>
  )
}
