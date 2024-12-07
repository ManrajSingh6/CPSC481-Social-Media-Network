import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { DISCOVER_ROUTE, LOGIN_ROUTE } from '../../utils/routes'
import { MOCK_GROUPS } from '../../utils/mockData'
import { Heading } from '../../components/common/heading'
import { AddButton } from '../../components/common/addButton'
import { LabelValueItem } from '../../components/common/labelValueItem'
import { PostOverviewCard } from '../../components/groups/postOverviewCard'
import { ArrowLeft } from 'lucide-react'
import { Button } from '../../components/common/button'
import { useState } from 'react'
import { CreatePostModal } from '@/components/modals/createPostModal'
import { useUser } from '@/context/userContext'
import { GroupPost } from '@/utils/types'

type SpecificGroupParams = {
  readonly groupId: string
}

export function SpecificGroupPage(): JSX.Element {
  const { user } = useUser()
  const navigate = useNavigate()
  const { groupId } = useParams<SpecificGroupParams>()

  const [createPostModalOpen, setCreatePostModalOpen] = useState(false)

  if (!groupId) {
    return <Navigate to={DISCOVER_ROUTE} />
  }
  const safeGroupId = parseInt(groupId)

  const groupInformation = MOCK_GROUPS.find((group) => group.id === safeGroupId)

  if (!groupInformation) {
    return <Navigate to={DISCOVER_ROUTE} />
  }

  if (!user) {
    return <Navigate to={LOGIN_ROUTE} />
  }

  const [mockPosts, setMockPosts] = useState(groupInformation.posts)

  function onPostSubmit(newPost: GroupPost): void {
    setMockPosts((prev) => [...prev, newPost])
    setCreatePostModalOpen(false)
  }

  return (
    <div className='flex flex-col gap-4'>
      <CreatePostModal
        isOpen={createPostModalOpen}
        onClose={() => setCreatePostModalOpen(false)}
        parentGroupName={groupInformation.name}
        user={user}
        onPostSubmit={onPostSubmit}
      />
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
        <AddButton onClick={() => setCreatePostModalOpen(true)} />
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
            {mockPosts.length > 1 ? (
              mockPosts.map((post) => {
                return (
                  <PostOverviewCard
                    key={post.id}
                    post={post}
                    groupId={groupInformation.id}
                  />
                )
              })
            ) : (
              <p className='text-gray-500'>No posts found</p>
            )}
          </div>
        }
      />
    </div>
  )
}
