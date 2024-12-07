import { useState } from 'react'
import { CreatePostForm, CreatePostFormData } from '../forms/createPostForm'
import { Modal } from './modal'
import { GroupPost, User } from '@/utils/types'

interface CreatePostModalProps {
  readonly isOpen: boolean
  readonly onClose: () => void
  readonly parentGroupName: string
  readonly onPostSubmit: (newPost: GroupPost) => void
  readonly user: User
}

export function CreatePostModal({
  isOpen,
  onClose,
  onPostSubmit,
  parentGroupName,
  user
}: CreatePostModalProps): JSX.Element {
  const [createPostFormData, setCreatePostFormData] =
    useState<CreatePostFormData>(getDefaultCreatePostFormData())

  function getDefaultCreatePostFormData(): CreatePostFormData {
    return {
      title: '',
      content: '',
      imageUrl: ''
    }
  }

  function onSubmitCreatePost(): void {
    const newPost: GroupPost = {
      id: 1200, // This is not one of our post ids in the mock data
      title: createPostFormData.title,
      content: createPostFormData.content,
      imageUrl: createPostFormData.imageUrl,
      createdAt: new Date(),
      creator: user,
      likeCount: 0,
      comments: []
    }

    onPostSubmit(newPost)
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      header={`Create a Post in ${parentGroupName}`}
      content={
        <div className='flex flex-col gap-4'>
          <CreatePostForm
            formData={createPostFormData}
            setFormData={setCreatePostFormData}
            onSubmit={onSubmitCreatePost}
          />
        </div>
      }
    />
  )
}
