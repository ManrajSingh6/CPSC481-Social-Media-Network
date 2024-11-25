import { CustomNotification } from '../utils/types'
import { CustomImage } from './common/customImage'

interface NotificationCardProps {
  notif: CustomNotification
}

export default function NotificationCard({
  notif
}: NotificationCardProps): JSX.Element {
  return (
    <div
      className='my-4 flex flex-row items-center rounded-lg border bg-white p-2'
      key={notif.id}
    >
      <CustomImage src={notif.pictureURL} alt='user-image' className='w-12' />

      <span className='ml-2 font-bold text-gray-600'>
        {notif.value1}
        <span className='font-normal'>&nbsp;{notif.message1}</span>
        {notif.value2 !== '' && (
          <span>
            &nbsp;{notif.value2}
            <span className='font-normal'>&nbsp;{notif.message2}</span>
          </span>
        )}
      </span>
      <div className='ml-2 flex-shrink-0'>
        <p className='font-bold text-gray-600'>{notif.time}</p>
      </div>
    </div>
  )
}
