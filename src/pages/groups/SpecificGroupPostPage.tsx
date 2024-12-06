import { useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { DISCOVER_ROUTE } from '../../utils/routes'
import { MOCK_GROUPS } from '../../utils/mockData'
import { Heading } from '../../components/common/heading'
import { LabelValueItem } from '../../components/common/labelValueItem'
import { CustomImage } from '../../components/common/customImage'
import { Button } from '../../components/common/button'
import { ArrowLeft } from 'lucide-react'
import { LikeDislikeButtonSet } from '../../components/common/likeDislikeButtonSet'

type SpecificGroupPostParams = {
  readonly groupId: string
  readonly postId: string
}

export function SpecificGroupPostPage(): JSX.Element {
  const navigate = useNavigate()
  const { groupId, postId } = useParams<SpecificGroupPostParams>()

  const [isLiked, setIsLiked] = useState(false)

  if (!groupId || !postId) {
    return <Navigate to={DISCOVER_ROUTE} />
  }

  const safeGroupId = parseInt(groupId)
  const safePostId = parseInt(postId)

  const groupInformation = MOCK_GROUPS.find((group) => group.id === safeGroupId)

  if (!groupInformation) {
    return <Navigate to={DISCOVER_ROUTE} />
  }

  const postInformation = groupInformation.posts.find(
    (post) => post.id === safePostId
  )

  if (!postInformation) {
    return <Navigate to={`/group/${groupInformation.id}`} />
  }

  const likeCount = isLiked
    ? postInformation.likeCount + 1
    : postInformation.likeCount

  return (
    <div className='flex flex-col gap-2'>
      <div className='mb-2'>
        <Button
          variant='secondary'
          icon={<ArrowLeft className='w-5' />}
          text='Back'
          onClick={() => navigate(`/group/${safeGroupId}`)}
        />
      </div>
      {postInformation.imageUrl && (
        <div className='flex flex-col items-center rounded-lg border bg-white p-2'>
          <CustomImage
            src={postInformation.imageUrl}
            alt='post-image'
            className='w-[40%] self-center rounded-lg'
          />
        </div>
      )}
      <div className='space-y-2 rounded-lg border bg-white p-2'>
        <Heading headingText={postInformation.title} />
        <LabelValueItem label='' value={postInformation.content} />
        <LabelValueItem label='Likes' value={likeCount.toString()} />
      </div>
      <LikeDislikeButtonSet
        onLike={() => setIsLiked(true)}
        onDislike={() => setIsLiked(false)}
        isLiked={isLiked}
        isDisliked={!isLiked}
      />
    </div>
  )
}
