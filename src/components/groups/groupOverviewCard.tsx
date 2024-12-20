import { useState } from 'react'
import { useUser } from '../../context/userContext'
import { TRIM_LENGTH_CHARS, trimString } from '../../utils/formatting'
import { Group } from '../../utils/types'
import { Button } from '../common/button'
import { CustomImage } from '../common/customImage'
import { Heading } from '../common/heading'
import { useNavigate } from 'react-router-dom'

interface GroupOverviewCardProps {
  readonly group: Group
}

export function GroupOverviewCard({
  group
}: GroupOverviewCardProps): JSX.Element {
  const { user, enrollUserInGroupOrEvent, unenrollUserInGroupOrEvent } =
    useUser()

  const navigate = useNavigate()

  // This shouldn't happen, but added for type safety
  if (!user) {
    return <></>
  }

  const [enrolled, setEnrolled] = useState(
    user.enrolledGroupIds.includes(group.id)
  )

  function handleJoinGroup(): void {
    enrollUserInGroupOrEvent(group.id, 'Group')
    setEnrolled(true)
  }

  function handleLeaveGroup(): void {
    unenrollUserInGroupOrEvent(group.id, 'Group')
    setEnrolled(false)
  }

  return (
    <div className='rounded-lg border bg-white p-2 transition-all'>
      <div
        className='flex cursor-pointer items-center justify-between'
        onClick={() => navigate(`/group/${group.id}`)}
      >
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
      <div className='flex justify-end'>
        <Button
          text={enrolled ? 'Leave' : 'Join'}
          onClick={() => (enrolled ? handleLeaveGroup() : handleJoinGroup())}
          paddingValue='px-4 py-2'
          variant={enrolled ? 'secondary' : 'primary'}
        />
      </div>
    </div>
  )
}
