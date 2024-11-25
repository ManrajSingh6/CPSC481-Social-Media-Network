import { CustomImage } from './common/customImage'
import { Heading } from './common/heading'
import { DirectMessage } from '../utils/types'

interface MessageCardProps {
  directMessage: DirectMessage
}

export default function MessageCard({
  directMessage
}: MessageCardProps): JSX.Element {
  return (
    <div className='mb-2 flex cursor-pointer flex-row rounded-lg border bg-white p-2'>
      <div className='mr-4'>
        <CustomImage
          src={directMessage.pictureURL}
          alt='Friend-Profile-Picture'
          className='w-8'
        />
      </div>
      <div className='flex-1'>
        <div className='flex items-center justify-between'>
          <Heading headingText={directMessage.name} headingSize='medium' />
          <p className='text-gray-600'>{directMessage.time}</p>
        </div>
        <div className='w-max self-start text-gray-600'>
          <p className=''>{directMessage.message}</p>
        </div>
      </div>
    </div>
  )
}
