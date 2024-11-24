import { useState } from 'react'
import { AddButton } from '../components/addButton'
import { Heading } from '../components/heading'
import { InputField } from '../components/inputField'
import { MOCK_EVENTS } from '../utils/mockData'
import { filterGroupsEventsBySearchTerm } from '../utils/filters'
import { EventOverviewCard } from '../components/events/eventOverviewCard'

export function EventsPage(): JSX.Element {
  const [eventsSearchValue, setEventsSearchValue] = useState('')

  const filteredEvents = filterGroupsEventsBySearchTerm(
    MOCK_EVENTS,
    eventsSearchValue
  )

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center justify-between'>
        <Heading headingText='Discover Events' />
        <AddButton onClick={() => {}} />
      </div>
      <InputField
        type='text'
        label='Search Events'
        placeholder='eg. Community Baking Workshop'
        value={eventsSearchValue}
        onChange={(e) => setEventsSearchValue(e.target.value)}
      />
      {filteredEvents.map((event) => {
        return <EventOverviewCard event={event} key={event.id} />
      })}
    </div>
  )
}
