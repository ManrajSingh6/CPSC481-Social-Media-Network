import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { DISCOVER_ROUTE } from '../../utils/routes'
import { MOCK_GROUPS } from '../../utils/mockData'
import { Heading } from '../../components/common/heading'
import { AddButton } from '../../components/common/addButton'
import { LabelValueItem } from '../../components/common/labelValueItem'
import { PostOverviewCard } from '../../components/groups/postOverviewCard'
import { ArrowLeft } from 'lucide-react'
import { Button } from '../../components/common/button'

type SpecificGroupParams = {
  readonly groupId: string
}

export function SpecificGroupPage(): JSX.Element {
  const navigate = useNavigate()
  const { groupId } = useParams<SpecificGroupParams>()

  if (!groupId) {
    return <Navigate to={DISCOVER_ROUTE} />
  }
  const safeGroupId = parseInt(groupId)

  const groupInformation = MOCK_GROUPS.find((group) => group.id === safeGroupId)

  if (!groupInformation) {
    return <Navigate to={DISCOVER_ROUTE} />
  }

  return (
    <div className='flex flex-col gap-4'>
      <div className='mb-2'>
        <Button
          variant='secondary'
          icon={<ArrowLeft className='w-5' />}
          text='Back'
          onClick={() => navigate(DISCOVER_ROUTE)}
        />
      </div>
      <div className='flex items-center justify-between'>
        <Heading headingText={groupInformation.name} />
        <AddButton onClick={() => {}} />
      </div>
      <LabelValueItem
        label='Created By'
        value={`${groupInformation.creator.fullName} (${groupInformation.creator.username})`}
      />
      <LabelValueItem
        label='Group Description'
        value={groupInformation.description}
      />
      <LabelValueItem
        className='mt-2'
        label='Posts'
        value={
          <div className='space-y-4'>
            {groupInformation.posts.map((post) => {
              return (
                <PostOverviewCard
                  key={post.id}
                  post={post}
                  groupId={groupInformation.id}
                />
              )
            })}
          </div>
        }
      />
    </div>
  )
}
