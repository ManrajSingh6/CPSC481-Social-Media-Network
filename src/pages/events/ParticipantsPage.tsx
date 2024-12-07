import { useState } from 'react'
import { Button } from '../../components/common/button'
import { MOCK_EVENTS } from '../../utils/mockData'
import { Event, Comment, User } from '../../utils/types'
import { useParams, useNavigate } from 'react-router-dom'
import { Heading } from '../../components/common/heading'
import { CustomImage } from '../../components/common/customImage'
import { useUser } from '../../context/userContext'

export function ParticipantsPage(): JSX.Element {
  const { id } = useParams()
  const eventID = parseInt(id as string)
  const { user } = useUser()
  const loggedInUser = user as User
  const navigate = useNavigate()

  const eventData = MOCK_EVENTS.find((events) => events.id === eventID) as Event

  return (
    <div>
      <div>
        <Button
          text='Back'
          onClick={() => navigate(`/event/${id}`)}
          variant='secondary'
          paddingValue='px-4 py-1'
        />
      </div>
      <div className='mb-3 mt-8'>
        <Heading headingText='Participants' subText={`For ${eventData.name}`} />
      </div>
      <div className='items-center rounded-lg border bg-white p-2'>
        {eventData.rsvp.map((participant) => (
          <div key={participant.id} className='flex border-b p-3'>
            <CustomImage
              alt='participant-profile-pic'
              src={participant.profilePicUrl}
              className='mr-4 h-8 w-8'
            />
            {participant.fullName}{' '}
            {eventData.creator === participant && ' (Creator)'}
          </div>
        ))}
      </div>
    </div>
  )
}
