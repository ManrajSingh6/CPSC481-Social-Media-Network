import { useUser } from '../../context/userContext'
import { Event } from '../../utils/types'
import { Button } from '../button'
import { CustomImage } from '../customImage'
import { Heading } from '../heading'

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

  // TODO: get these working
  const isUserEnrolledInEvent = user.enrolledEventIds.includes(event.id)

  function handleRSVP(): void {
    enrollUserInGroupOrEvent(event.id, 'Event')
  }

  function handleCancelRSVP(): void {
    unenrollUserInGroupOrEvent(event.id, 'Event')
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
          text={isUserEnrolledInEvent ? 'Cancel RSVP' : 'RSVP'}
          onClick={() =>
            isUserEnrolledInEvent ? handleCancelRSVP : handleRSVP()
          }
          paddingValue='px-4 py-2'
          variant={isUserEnrolledInEvent ? 'secondary' : 'primary'}
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
