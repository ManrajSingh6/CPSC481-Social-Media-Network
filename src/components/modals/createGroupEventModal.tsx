import { EventDuration, Group, GroupOrEvent, Event, User } from '@/utils/types'
import { Modal } from './modal'
import { useState } from 'react'
import { ButtonGroup } from '../buttonGroup'
import { CreateGroupForm, CreateGroupFormData } from '../forms/createGroupForm'
import { CreateEventForm, CreateEventFormData } from '../forms/createEventForm'

interface CreateGroupEventModalProps {
  readonly isOpen: boolean
  readonly onClose: () => void
  readonly onGroupSubmit: (newGroup: Group) => void
  readonly onEventSubmit: (newEvent: Event) => void
  readonly user: User
}

export function CreateGroupEventModal({
  isOpen,
  onClose,
  onGroupSubmit,
  onEventSubmit,
  user
}: CreateGroupEventModalProps): JSX.Element {
  const [selectedTab, setSelectedTab] = useState<GroupOrEvent>('Group')

  const [createGroupFormData, setCreateGroupFormData] =
    useState<CreateGroupFormData>(getDefaultCreateGroupFormData())

  const [createEventFormData, setCreateEventFormData] =
    useState<CreateEventFormData>(getDefaultCreateEventFormData())

  function getDefaultCreateGroupFormData(): CreateGroupFormData {
    return {
      name: '',
      description: ''
    }
  }

  function getDefaultCreateEventFormData(): CreateEventFormData {
    return {
      name: '',
      description: '',
      location: '',
      date: new Date(),
      duration: { label: EventDuration['Hour'], value: EventDuration.Hour },
      imageUrl: ''
    }
  }

  function handleCreateGroupSubmit(): void {
    const newGroup: Group = {
      id: 100, // None of our mock data has this id
      name: createGroupFormData.name,
      description: createGroupFormData.description,
      creator: user,
      posts: [],
      createdAt: new Date(),
      type: 'Group'
    }

    onGroupSubmit(newGroup)
  }

  function handleCreateEventSubmit(): void {
    const newEvent: Event = {
      id: 444, // None of our mock data has this id
      name: createEventFormData.name,
      description: createEventFormData.description,
      location: createEventFormData.location,
      date: createEventFormData.date,
      duration: createEventFormData.duration.value,
      creator: user,
      type: 'Event',
      likeCount: 0,
      imageUrl: createEventFormData.imageUrl,
      comments: []
    }

    onEventSubmit(newEvent)
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      header={`Create ${selectedTab}`}
      subHeader='Fill in the details below to get started'
      content={
        <div className='flex flex-col gap-4'>
          <ButtonGroup
            label='Create'
            isTabGroup={true}
            buttons={[
              {
                label: 'Group',
                onClick: () => {
                  setSelectedTab('Group')
                  setCreateEventFormData(getDefaultCreateEventFormData())
                }
              },
              {
                label: 'Event',
                onClick: () => {
                  setSelectedTab('Event')
                  setCreateGroupFormData(getDefaultCreateGroupFormData())
                }
              }
            ]}
          />
          {selectedTab === 'Group' ? (
            <CreateGroupForm
              formData={createGroupFormData}
              setFormData={setCreateGroupFormData}
              onSubmit={handleCreateGroupSubmit}
            />
          ) : (
            <CreateEventForm
              formData={createEventFormData}
              setFormData={setCreateEventFormData}
              onSubmit={handleCreateEventSubmit}
            />
          )}
        </div>
      }
    />
  )
}
