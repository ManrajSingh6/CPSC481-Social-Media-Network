import { useState } from 'react'
import { useUser } from '../../context/userContext'
import { Event } from '../../utils/types'
import { Button } from '../common/button'
import { CustomImage } from '../common/customImage'
import { Heading } from '../common/heading'

interface EventOverviewCardProps {
  readonly event: Event
}

export function EventOverviewCard({
  event
}: EventOverviewCardProps): JSX.Element {
  const { user, enrollUserInGroupOrEvent, unenrollUserInGroupOrEvent } =
    useUser()

  // This shouldn't happen, but added for type safety
  if (!user) {
    return <></>
  }

  const [RSVP, setRSVP] = useState(user.enrolledEventIds.includes(event.id))

  function handleRSVP(): void {
    enrollUserInGroupOrEvent(event.id, 'Event')
    setRSVP(true)
  }

  function handleCancelRSVP(): void {
    unenrollUserInGroupOrEvent(event.id, 'Event')
    setRSVP(false)
  }

  return (
    <div className='rounded-lg border border-blue-400 bg-white p-2 transition-all'>
      <div className='mb-2 flex cursor-pointer items-center justify-between'>
        <Heading headingText={event.name} headingSize='medium' />
        <CustomImage
          src={event.creator.profilePicUrl}
          alt='post-author-profile-image'
          className='w-8'
        />
      </div>
      <ul className='flex flex-col gap-2 text-gray-600'>
        <p>{event.description}</p>
        <LabelValueItem label='Where' value={event.location} />
        <LabelValueItem label='When' value={event.date.toDateString()} />
        <LabelValueItem label='Duration' value={event.duration} />
      </ul>
      <div className='flex justify-end'>
        <Button
          text={RSVP ? 'Cancel RSVP' : 'RSVP'}
          onClick={() => (RSVP ? handleCancelRSVP() : handleRSVP())}
          paddingValue='px-4 py-2'
          variant={RSVP ? 'secondary' : 'primary'}
        />
      </div>
    </div>
  )
}

function LabelValueItem({
  label,
  value
}: {
  label: string
  value: string
}): JSX.Element {
  return (
    <li className='flex items-center gap-2 text-sm'>
      <span className='font-bold'>{label}:</span>
      {value}
    </li>
  )
}
