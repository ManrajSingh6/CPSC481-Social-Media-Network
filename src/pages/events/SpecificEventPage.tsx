import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { useUser } from '../../context/userContext'
import { Button } from '../../components/common/button'
import { ArrowLeft, Share } from 'lucide-react'
import { CommentSection } from '../../components/common/commentSection'
import { CustomImage } from '../../components/common/customImage'
import { LabelValueItem } from '../../components/common/labelValueItem'
import { LikeDislikeButtonSet } from '../../components/common/likeDislikeButtonSet'
import { DISCOVER_ROUTE } from '../../utils/routes'
import { MOCK_EVENTS } from '../../utils/mockData'
import { Heading } from '../../components/common/heading'
import { useState } from 'react'
import { Comment } from '../../utils/types'
import { useToast } from '@/hooks/use-toast'
import { ONE_SECOND } from '@/components/ui/toast'

type SpecificEventPostParams = {
  readonly eventId: string
}

export function SpecificEventPage(): JSX.Element {
  const navigate = useNavigate()
  const { eventId } = useParams<SpecificEventPostParams>()
  const { user } = useUser()
  const { toast } = useToast()

  const [isLiked, setIsLiked] = useState(() => Math.random() < 0.5)

  if (!eventId) {
    return <Navigate to={DISCOVER_ROUTE} />
  }

  const safeEventId = parseInt(eventId)

  const eventInformation = MOCK_EVENTS.find((event) => event.id === safeEventId)

  if (!eventInformation) {
    return <Navigate to={DISCOVER_ROUTE} />
  }

  const [RSVP, setRSVP] = useState(user?.enrolledEventIds.includes(safeEventId))

  const [eventComments, setEventComments] = useState<readonly Comment[]>(
    eventInformation.comments
  )

  const [commentInput, setCommentInput] = useState('')

  const likeCount = isLiked
    ? eventInformation.likeCount + 1
    : eventInformation.likeCount

  function onAddComment(): void {
    if (commentInput.trim() === '' || !user) {
      return
    }

    const newComment: Comment = {
      id: eventComments.length + 1,
      content: commentInput,
      creator: user,
      createdAt: new Date() // Now
    }

    setEventComments((prev) => [...prev, newComment])
    setCommentInput('')
  }

  return (
    <div className='flex flex-col gap-2'>
      <div className='mb-2 flex items-center justify-between'>
        <Button
          variant='secondary'
          icon={<ArrowLeft className='w-5' />}
          text='Back'
          onClick={() => navigate(DISCOVER_ROUTE)}
        />
        <Button
          variant='secondary'
          icon={<Share className='w-5' />}
          text='Share'
          onClick={() =>
            toast({
              title: `Shared Event: ${eventInformation.name}`,
              description: 'Event shared successfully',
              duration: ONE_SECOND
            })
          }
        />
      </div>
      {eventInformation.imageUrl && (
        <div className='flex flex-col items-center rounded-lg border bg-white p-2'>
          <CustomImage
            src={eventInformation.imageUrl}
            alt='event-post-image'
            className='w-[40%] self-center rounded-lg'
          />
        </div>
      )}
      <div className='space-y-2 rounded-lg border bg-white p-2'>
        <Heading headingText={eventInformation.name} />
        <ul className='flex flex-col gap-2'>
          <LabelValueItem
            label='Created By'
            value={`${eventInformation.creator.fullName} (${eventInformation.creator.username})`}
          />
          <LabelValueItem
            label='Description'
            value={eventInformation.description}
          />
          <LabelValueItem label='Where' value={eventInformation.location} />
          <LabelValueItem
            label='When'
            value={eventInformation.date.toDateString()}
          />
          <LabelValueItem label='Duration' value={eventInformation.duration} />
        </ul>
        <LabelValueItem label='Likes' value={likeCount.toString()} />
      </div>
      <div className='flex items-center justify-between'>
        <LikeDislikeButtonSet
          onLike={() => setIsLiked(true)}
          onDislike={() => setIsLiked(false)}
          isLiked={isLiked}
          isDisliked={!isLiked}
        />
        <Button
          text={RSVP ? 'Cancel RSVP' : 'RSVP'}
          onClick={() => (RSVP ? setRSVP(false) : setRSVP(true))}
          paddingValue='px-4 py-2'
          variant={RSVP ? 'secondary' : 'primary'}
        />
      </div>
      <CommentSection
        commentInput={commentInput}
        comments={eventComments}
        setCommentInput={setCommentInput}
        onAddComment={onAddComment}
      />
    </div>
  )
}
