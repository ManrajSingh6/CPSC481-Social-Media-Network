import { useState } from 'react'
import { AddButton } from '../components/common/addButton'
import { Heading } from '../components/common/heading'
import { InputField } from '../components/common/inputField'
import { MOCK_EVENTS, MOCK_GROUPS } from '../utils/mockData'
import { GroupOverviewCard } from '../components/groups/groupOverviewCard'
import {
  filterGroupsEventsBySearchTerm,
  sortEventsByDateDesc,
  sortGroupsByCreatedAtDateDesc
} from '../utils/filters'
import { ButtonGroup } from '../components/buttonGroup'
import { EventOverviewCard } from '../components/events/eventOverviewCard'
import { Event, Group, GroupOrEvent } from '../utils/types'
import { CreateGroupEventModal } from '@/components/modals/createGroupEventModal'
import { useUser } from '@/context/userContext'
import { Navigate } from 'react-router-dom'
import { LOGIN_ROUTE } from '@/utils/routes'

export function DiscoverPage(): JSX.Element {
  const { user } = useUser()

  if (!user) {
    return <Navigate to={LOGIN_ROUTE} />
  }

  const [filterItem, setFilterItem] = useState<GroupOrEvent>('Group')
  const [searchTerm, setSearchTerm] = useState('')

  const [mockGroups, setMockGroups] = useState(MOCK_GROUPS)
  const [mockEvents, setMockEvents] = useState(MOCK_EVENTS)

  const mockGroupsSortedDateDesc = sortGroupsByCreatedAtDateDesc(mockGroups)
  const mockEventsSortedDateDesc = sortEventsByDateDesc(mockEvents)

  const mockData = [...mockGroupsSortedDateDesc, ...mockEventsSortedDateDesc]

  const [createModalOpen, setCreateModalOpen] = useState(false)

  const filteredDataByItem = mockData.filter((item) => item.type === filterItem)

  const filteredDataBySearchTerm = filterGroupsEventsBySearchTerm(
    filteredDataByItem,
    searchTerm
  )

  function handleCreateGroupSubmit(newGroup: Group): void {
    setMockGroups((prev) => [...prev, newGroup])
    setCreateModalOpen(false)
  }

  function handleCreateEventSubmit(newEvent: Event): void {
    setMockEvents((prev) => [...prev, newEvent])
    setCreateModalOpen(false)
  }

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center justify-between'>
        <Heading headingText='Discover' />
        <AddButton onClick={() => setCreateModalOpen(true)} />
      </div>
      <InputField
        type='text'
        label={`Search ${filterItem}s`}
        placeholder={
          filterItem === 'Group' ? 'eg. Baking' : 'eg. Fitness Bootcamp'
        }
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ButtonGroup
        isTabGroup={true}
        buttons={[
          {
            label: 'Groups',
            onClick: () => {
              setFilterItem('Group')
              setSearchTerm('')
            }
          },
          {
            label: 'Events',
            onClick: () => {
              setFilterItem('Event')
              setSearchTerm('')
            }
          }
        ]}
      />
      <CreateGroupEventModal
        isOpen={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onGroupSubmit={handleCreateGroupSubmit}
        onEventSubmit={handleCreateEventSubmit}
        user={user}
      />
      {filteredDataBySearchTerm.length > 0 ? (
        filteredDataBySearchTerm.map((item) => {
          return filterItem === 'Group' ? (
            <GroupOverviewCard group={item as Group} key={item.id} />
          ) : (
            <EventOverviewCard event={item as Event} key={item.id} />
          )
        })
      ) : (
        <p className='text-gray-500'>No {filterItem}s found</p>
      )}
    </div>
  )
}
