import { useParams, useNavigate } from 'react-router-dom'
import { MOCK_EVENTS } from '../../utils/mockData'
import { Event, Comment, User } from '../../utils/types'
import { Heading } from '../../components/common/heading'
import { Button } from '../../components/common/button'
import { formatTime } from '../../utils/formatting'
import { LikeDislikeButtonSet } from '../../components/common/likeDislikeButtonSet'
import { LabelValueItem } from '../../components/common/labelValueItem'
import ParticipantsStacks from '../../components/events/ParticipantsStack'
import { CommentSection } from '../../components/common/commentSection'
import { useState } from 'react'
import { useUser } from '../../context/userContext'

export function EventPage(): JSX.Element {
  const { id } = useParams()
  const eventID = parseInt(id as string)
  const { user } = useUser()
  const loggedInUser = user as User
  const navigate = useNavigate()

  const eventData = MOCK_EVENTS.find((events) => events.id === eventID) as Event

  // States to keep track of Page Changes
  const [likesCount, setLikesCount] = useState(eventData.likeCount) // number of likes
  const [isLiked, setIsLiked] = useState(false)
  const [isDisliked, setIsDisliked] = useState(false)
  const [comment, setComment] = useState('')
  const [postedComments, setPostedComments] = useState(eventData.comments)
  const [participants, setParticipants] = useState(eventData.rsvp)
  const [isRSVP, setIsRSVP] = useState(false)

  const handleLike = () => {
    if (isLiked) {
      // Unlike: decrement by 1
      setLikesCount((prev) => prev - 1)
      setIsLiked(false)
    } else {
      // Like: increment by 1, remove dislike if active
      setLikesCount((prev) => prev + 1 + (isDisliked ? 1 : 0))
      setIsLiked(true)
      setIsDisliked(false)
    }
  }

  const handleDislike = () => {
    if (isDisliked) {
      // Un-dislike: increment by 1
      setLikesCount((prev) => prev + 1)
      setIsDisliked(false)
    } else {
      // Dislike: decrement by 1, remove like if active
      setLikesCount((prev) => prev - 1 - (isLiked ? 1 : 0))
      setIsDisliked(true)
      setIsLiked(false)
    }
  }

  const handleAddComment = () => {
    if (!comment.trim().length) {
      return
    }

    console.log(comment)
    const userComment: Comment = {
      id: postedComments.length + 1,
      content: comment,
      creator: loggedInUser,
      createdAt: new Date()
    }

    setPostedComments((prev) => [...prev, userComment])
    console.log(postedComments)
    setComment('')
  }

  const handleRSVP = () => {
    setIsRSVP((prev) => !prev)
    if (!isRSVP) {
      setParticipants((prev) => [...prev, loggedInUser])
    } else {
      setParticipants((prev) => prev.filter((user) => user !== loggedInUser))
    }
  }

  return (
    <div>
      <div>
        <Button
          text='Back'
          onClick={() => navigate(`/discover`)}
          variant='secondary'
          paddingValue='px-4 py-1'
        />
      </div>
      <div className='mb-3 mt-8'>
        <Heading headingText={eventData.name} />
      </div>
      <div className='items-center rounded-lg border bg-white p-2'>
        <h1 className='mb-3 mt-2'>{eventData.description}</h1>
        <h1>
          <b>Where:</b> {eventData.location}
        </h1>
        <h1>
          <b>When:</b> {eventData.date.toLocaleDateString()}{' '}
          {formatTime(eventData.date)}
        </h1>
        <h1>
          <b>Duration:</b> {eventData.duration}
        </h1>
        <div className='mt-4 flex  w-full'>
          <div className='flex-none w-20'>
            <LabelValueItem label='Likes' value={likesCount.toString()} />
          </div>
          <div className='flex-none w-20'>
            <LabelValueItem
              label='Participants'
              value={participants.length.toString()}
            />
          </div>
          <div className='flex-none w-30 ml-auto'>
            <Button
              text={isRSVP ? 'Cancel RSVP' : 'RSVP'}
              onClick={() => {
                handleRSVP()
              }}
              paddingValue='px-4 py-2'
              variant={isRSVP ? 'secondary' : 'primary'}
            />
          </div>
        </div>
      </div>
      <div className='mt-2 flex justify-between'>
        <LikeDislikeButtonSet
          onLike={handleLike}
          onDislike={handleDislike}
          isLiked={isLiked}
          isDisliked={isDisliked}
        />
        <ParticipantsStacks
          rsvp={participants}
          onClick={() => {
            navigate(`/event/participants/${eventData.id}`)
          }}
        />
      </div>

      <div className='mt-3'>
        <CommentSection
          commentInput={comment}
          comments={postedComments}
          setCommentInput={setComment}
          onAddComment={() => {
            handleAddComment()
          }}
        />
      </div>
    </div>
  )
}
