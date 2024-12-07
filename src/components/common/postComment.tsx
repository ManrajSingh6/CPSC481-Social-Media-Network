import { Comment } from '../../utils/types'
import { CustomImage } from './customImage'

interface PostCommentProps {
  readonly comment: Comment
  readonly isSelfComment: boolean
}

export function PostComment({
  comment,
  isSelfComment
}: PostCommentProps): JSX.Element {
  const hoursAgo = Math.floor(
    (Date.now() - new Date(comment.createdAt).getTime()) / (60 * 60 * 1000)
  )

  return (
    <div
      className={`border-b p-2`}
      style={{ textAlign: isSelfComment ? 'right' : 'left' }}
    >
      <div
        className={`mb-2 flex items-center gap-4 ${isSelfComment ? 'flex-row-reverse' : ''}`}
      >
        <CustomImage
          src={comment.creator.profilePicUrl}
          alt='comment-author-profile-image'
          className='h-8 w-8 rounded-full align-top'
        />
        <div>
          <div
            className={`flex items-center gap-2 font-semibold ${
              isSelfComment ? 'justify-end' : ''
            }`}
          >
            <p>{isSelfComment ? 'You' : comment.creator.username}</p>
            <p className='text-sm font-normal text-gray-500 break-words whitespace-normal'>{`${hoursAgo}h`}</p>
          </div>
          <p className='text-sm text-gray-600 break-words whitespace-normal'>{comment.content}</p>
        </div>
      </div>
    </div>
  )
}
