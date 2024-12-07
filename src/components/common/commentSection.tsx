import { useUser } from '../../context/userContext'
import { Comment } from '../../utils/types'
import { Button } from './button'
import { InputField } from './inputField'
import { LabelValueItem } from './labelValueItem'
import { PostComment } from './postComment'

interface CommentSectionProps {
  readonly comments: readonly Comment[]
  readonly commentInput: string
  readonly setCommentInput: (value: string) => void
  readonly onAddComment: () => void
}

export function CommentSection({
  comments,
  commentInput,
  setCommentInput,
  onAddComment
}: CommentSectionProps): JSX.Element {
  const { user } = useUser()

  if (!user) {
    return <></>
  }

  const sortedComments = [...comments].sort((a, b) => {
    return b.createdAt.getTime() - a.createdAt.getTime() // Sort in time ascending order (newest first)
  })

  return (
    <div className='rounded-lg border bg-white p-2'>
      <LabelValueItem
        label='Comments'
        value={
          <div className='mt-2 flex flex-col gap-4'>
            {sortedComments.map((comment) => {
              return (
                <PostComment
                  key={comment.id}
                  comment={comment}
                  isSelfComment={comment.creator.id === user.id}
                />
              )
            })}
          </div>
        }
      />
      <LabelValueItem
        label='Add New Comment'
        className='mt-4'
        value={
          <>
            <div className='flex items-center justify-between gap-2'>
              <InputField
                type='text'
                value={commentInput}
                placeholder='Add a comment'
                onChange={(e) => setCommentInput(e.target.value)}
                width='w-full'
              />
              <Button
                text='Add'
                variant='primary'
                onClick={onAddComment}
                paddingValue='px-4 py-2'
              />
            </div>
          </>
        }
      />
    </div>
  )
}
