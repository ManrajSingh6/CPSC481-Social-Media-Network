import { Plus } from 'lucide-react'
import { Button } from './button'

interface AddButtonProps {
  readonly onClick: () => void
}

export function AddButton({ onClick }: AddButtonProps): JSX.Element {
  return (
    <Button
      icon={<Plus />}
      onClick={onClick}
      variant='primary'
      roundedValue='rounded-full'
    />
  )
}
