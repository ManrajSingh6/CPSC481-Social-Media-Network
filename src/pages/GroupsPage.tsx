import { useState } from 'react'
import { AddButton } from '../components/addButton'
import { Heading } from '../components/heading'
import { InputField } from '../components/inputField'
import { MOCK_GROUPS } from '../utils/mockData'
import { GroupOverviewCard } from '../components/groups/groupOverviewCard'
import { filterGroupsEventsBySearchTerm } from '../utils/filters'

export function GroupsPage(): JSX.Element {
  const [groupsSearchValue, setGroupsSearchValue] = useState('')

  const filteredGroups = filterGroupsEventsBySearchTerm(
    MOCK_GROUPS,
    groupsSearchValue
  )

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center justify-between'>
        <Heading headingText='Discover Groups' />
        <AddButton onClick={() => {}} />
      </div>
      <InputField
        type='text'
        label='Search Groups'
        placeholder='eg. Baking'
        value={groupsSearchValue}
        onChange={(e) => setGroupsSearchValue(e.target.value)}
      />
      {filteredGroups.map((group) => {
        return <GroupOverviewCard group={group} key={group.id} />
      })}
    </div>
  )
}
