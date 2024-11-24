import { useState } from 'react'
import { AddButton } from '../components/addButton'
import { Heading } from '../components/heading'
import { InputField } from '../components/inputField'
import { MOCK_EVENTS, MOCK_GROUPS } from '../utils/mockData'
import { GroupOverviewCard } from '../components/groups/groupOverviewCard'
import { filterGroupsEventsBySearchTerm } from '../utils/filters'
import { ButtonGroup } from '../components/buttonGroup'
import { EventOverviewCard } from '../components/events/eventOverviewCard'
import { Event, Group, GroupOrEvent } from '../utils/types'

const MOCK_DATA = [...MOCK_GROUPS, ...MOCK_EVENTS]

export function DiscoverPage(): JSX.Element {
  const [filterItem, setFilterItem] = useState<GroupOrEvent>('Group')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredDataByItem = MOCK_DATA.filter((item) => {
    return item.type === filterItem
  })

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
      <InputField
        type='text'
        label={`Search ${filterItem}s`}
        placeholder={
          filterItem === 'Group' ? 'eg. Baking' : 'eg. Fitness Bootcamp'
        }
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
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
