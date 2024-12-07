import { InputField } from '../common/inputField'
import { Button } from '../common/button'

export interface CreateGroupFormData {
  readonly name: string
  readonly description: string
}

interface CreateGroupFormProps {
  readonly formData: CreateGroupFormData
  readonly setFormData: (formData: CreateGroupFormData) => void
  readonly onSubmit: () => void
}

export function CreateGroupForm({
  formData,
  setFormData,
  onSubmit
}: CreateGroupFormProps): JSX.Element {
  function isFormDataValid(): boolean {
    return formData.name.trim() !== '' && formData.description.trim() !== ''
  }

  function onSubmitFormData(): void {
    if (!isFormDataValid()) {
      return
    }

    onSubmit()
  }

  return (
    <div className='flex w-full flex-col gap-4'>
      <InputField
        label='Group Name'
        type='text'
        placeholder='eg. Baking Enthusiasts'
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <InputField
        label='Description'
        type='text'
        placeholder='eg. A group for people who love to bake'
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
      />
      <Button
        variant='primary'
        text='Create Group'
        onClick={onSubmitFormData}
        paddingValue='p-2'
        disabled={!isFormDataValid()}
      />
    </div>
  )
}
