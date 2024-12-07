import { InputField } from '../common/inputField'
import { Button } from '../common/button'
import { LabelValueItem } from '../common/labelValueItem'

export interface CreatePostFormData {
  readonly title: string
  readonly content: string
  readonly imageUrl?: string
}

interface CreatePostFormProps {
  readonly formData: CreatePostFormData
  readonly setFormData: (formData: CreatePostFormData) => void
  readonly onSubmit: () => void
}

export function CreatePostForm({
  formData,
  setFormData,
  onSubmit
}: CreatePostFormProps): JSX.Element {
  function isFormDataValid(): boolean {
    return formData.title.trim() !== '' && formData.content.trim() !== ''
  }

  function onSubmitFormData(): void {
    if (!isFormDataValid()) {
      return
    }

    onSubmit()
  }

  return (
    <div className='mt-2 flex w-full flex-col gap-4'>
      <InputField
        label='Title'
        type='text'
        placeholder='eg. My Novel Review'
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <InputField
        label='Content'
        type='text'
        placeholder='eg. I just finished reading this novel and...'
        value={formData.content}
        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
      />
      <LabelValueItem
        label='Post Image (optional)'
        value={
          <input
            type='file'
            id='avatar'
            name='avatar'
            accept='image/png, image/jpeg'
            style={{ padding: '2px' }}
          />
        }
      />
      <Button
        variant='primary'
        text='Create Post'
        onClick={onSubmitFormData}
        paddingValue='p-2'
        disabled={!isFormDataValid()}
      />
    </div>
  )
}
