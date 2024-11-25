import { ChevronRightIcon } from 'lucide-react'
import * as Icons from 'lucide-react'

interface SettingsItemProps {
  iconUrl: string
  title: string
  color?: string
  readonly onClick?: () => void
}

export default function SettingsItem({
  iconUrl,
  title,
  color = 'black',
  onClick
}: SettingsItemProps): JSX.Element {
  const LucideIcon = Icons[iconUrl as keyof typeof Icons] as React.ElementType
  if (!LucideIcon) {
    return <p>Invalid icon type: {iconUrl}</p>
  }
  return (
    <div
      className='flex w-full cursor-pointer flex-row items-center border-b p-2'
      onClick={onClick}
    >
      <LucideIcon size={28} color={color} className='mr-2' />
      <p
        className={`ml-2 text-${color}-500 ${color == 'black' ? '' : 'font-bold'}`}
      >
        {title}
      </p>
      {color == 'black' && <ChevronRightIcon className='ml-auto' />}
    </div>
  )
}
