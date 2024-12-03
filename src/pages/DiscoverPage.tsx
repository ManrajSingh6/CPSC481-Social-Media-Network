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

const MOCK_GROUPS_SORTED_DATE_DESC = sortGroupsByCreatedAtDateDesc(MOCK_GROUPS) // Sorted by the date the group was created
const MOCK_EVENTS_SORTED_DATE_DESC = sortEventsByDateDesc(MOCK_EVENTS) // Sorted by the actual event's date

const MOCK_DATA = [
  ...MOCK_GROUPS_SORTED_DATE_DESC,
  ...MOCK_EVENTS_SORTED_DATE_DESC
]

export function DiscoverPage(): JSX.Element {
  const [filterItem, setFilterItem] = useState<GroupOrEvent>('Group')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredDataByItem = MOCK_DATA.filter(
    (item) => item.type === filterItem
  )

  const filteredDataBySearchTerm = filterGroupsEventsBySearchTerm(
    filteredDataByItem,
    searchTerm
  )

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center justify-between'>
        <Heading headingText='Discover' />
        <AddButton onClick={() => {}} />
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
        label='Filter by'
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
      {filteredDataBySearchTerm.map((item) => {
        return filterItem === 'Group' ? (
          <GroupOverviewCard group={item as Group} key={item.id} />
        ) : (
          <EventOverviewCard event={item as Event} key={item.id} />
        )
      })}
    </div>
  )
}
