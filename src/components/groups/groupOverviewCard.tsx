import { trimString } from '../../utils/formatting'
import { Group } from '../../utils/types'
import { CustomImage } from '../customImage'
import { Heading } from '../heading'

const TRIM_LENGTH_CHARS = 100

interface GroupOverviewCardProps {
  readonly group: Group
}

export function GroupOverviewCard({
  group
}: GroupOverviewCardProps): JSX.Element {
  return (
    <div className='cursor-pointer rounded-lg border bg-white p-2 transition-all hover:border-slate-500'>
      <div className='flex items-center justify-between'>
        <Heading headingText={group.name} headingSize='medium' />
        <CustomImage
          src={group.creator.profilePicUrl}
          alt='post-author-profile-image'
          className='w-8'
        />
      </div>
      <p className='text-gray-600'>
        {trimString(group.description, TRIM_LENGTH_CHARS)}
      </p>
    </div>
  )
}
