import { InputField } from '../common/inputField'
import { Button } from '../common/button'
import { EventDuration } from '@/utils/types'
import { DatePicker } from '../common/datePicker'
import { Dropdown, DropdownOption } from '../common/dropdown'

export interface CreateEventFormData {
  readonly name: string
  readonly description: string
  readonly location: string
  readonly date: Date
  readonly duration: DropdownOption<EventDuration>
  readonly imageUrl?: string
}

interface CreateEventFormProps {
  readonly formData: CreateEventFormData
  readonly setFormData: (formData: CreateEventFormData) => void
  readonly onSubmit: () => void
}

export function CreateEventForm({
  formData,
  onSubmit,
  setFormData
}: CreateEventFormProps): JSX.Element {
  function isFormDataValid(): boolean {
    return (
      formData.name.trim() !== '' &&
      formData.description.trim() !== '' &&
      formData.location.trim() !== '' &&
      formData.date >= new Date()
    )
  }

  function onSubmitFormData(): void {
    if (!isFormDataValid()) {
      return
    }

    onSubmit()
  }

  const durationOptions: DropdownOption<EventDuration>[] = Object.entries(
    EventDuration
  ).map(([key, value]) => {
    return {
      label: value,
      value: EventDuration[key as keyof typeof EventDuration]
    }
  })

  return (
    <div className='flex w-full flex-col gap-4'>
      <InputField
        label='Event Name'
        type='text'
        placeholder='eg. Car Meet'
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <InputField
        label='Description'
        type='text'
        placeholder='eg. Let us show off our cars!'
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
      />
      <InputField
        label='Location'
        type='text'
        placeholder='eg. 1234 Elm Street'
        value={formData.location}
        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
      />
      <Dropdown
        dropdownLabel='Duration'
        options={durationOptions}
        selectedOption={formData.duration}
        onSelect={(opt) => {
          if (opt) {
            setFormData({ ...formData, duration: opt })
          }
        }}
      />
      <DatePicker
        label='Date'
        date={formData.date}
        setDate={(date) => {
          if (date) {
            setFormData({ ...formData, date })
          }
        }}
        minDate={new Date()}
      />
      <Button
        variant='primary'
        text='Create Event'
        onClick={onSubmitFormData}
        paddingValue='p-2'
        disabled={!isFormDataValid()}
      />
    </div>
  )
}
