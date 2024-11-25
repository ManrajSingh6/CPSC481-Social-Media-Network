import { useState } from 'react'
import { Button } from './util/button'

const FIRST_ELEMENT = 0

interface IndividualButtonProps {
  readonly label: string
  readonly onClick: () => void
}

interface ButtonGroupProps {
  readonly buttons: readonly IndividualButtonProps[]
  readonly direction?: 'row' | 'column'
  readonly isTabGroup?: boolean
  readonly label?: string
}

export function ButtonGroup({
  buttons,
  direction = 'row',
  isTabGroup = false,
  label
}: ButtonGroupProps): JSX.Element {
  const [selectedIndex, setSelectedIndex] = useState<number>(FIRST_ELEMENT)

  return (
    <div className={`${isTabGroup && 'w-full'}`}>
      {label && <p className='text-header mb-1 text-sm'>{label}</p>}
      <div
        className={`flex ${direction === 'row' ? 'h-10 flex-row' : 'flex-col'} ${isTabGroup ? 'gap-1 rounded-lg border bg-white p-1' : 'gap-2'}`}
      >
        {buttons.map((button, index) => {
          const isSelected = selectedIndex === index
          return (
            <Button
              key={`btn-item-${index}`}
              onClick={() => {
                setSelectedIndex(index)
                button.onClick()
              }}
              text={button.label}
              customStyle={`${isSelected ? 'bg-gray-950 text-white' : 'bg-white'} text-xs border ${isTabGroup ? 'flex-grow' : ''} border-slate-200`}
            />
          )
        })}
      </div>
    </div>
  )
}
