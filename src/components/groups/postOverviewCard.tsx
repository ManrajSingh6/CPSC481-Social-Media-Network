import { useNavigate } from 'react-router-dom'
import { TRIM_LENGTH_CHARS, trimString } from '../../utils/formatting'
import { GroupPost } from '../../utils/types'
import { CustomImage } from '../common/customImage'
import { Heading } from '../common/heading'

interface PostOverviewCardProps {
  readonly post: GroupPost
  readonly groupId: number
}

export function PostOverviewCard({
  post,
  groupId
}: PostOverviewCardProps): JSX.Element {
  const navigate = useNavigate()

  return (
    <div
      className='cursor-pointer rounded-lg border bg-white p-2 transition-all'
      onClick={() => navigate(`/group/${groupId}/post/${post.id}`)}
    >
      <div className='flex items-center justify-between'>
        <Heading headingText={post.title} headingSize='small' />
        <CustomImage
          src={post.creator.profilePicUrl}
          alt='post-author-profile-image'
          className='w-7 rounded-full'
        />
      </div>
      <p className='text-gray-600'>
        {trimString(post.content, TRIM_LENGTH_CHARS)}
      </p>
    </div>
  )
}
