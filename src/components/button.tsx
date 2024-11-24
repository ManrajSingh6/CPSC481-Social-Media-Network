export interface ButtonProps {
  readonly text?: string
  readonly icon?: JSX.Element
  readonly onClick: () => void
  readonly variant?: 'primary' | 'secondary'
  readonly customStyle?: string
  readonly disabled?: boolean
  readonly roundedValue?: string
}

export function Button({
  text,
  icon,
  onClick,
  variant = 'primary',
  customStyle = '',
  disabled,
  roundedValue = 'rounded-lg'
}: ButtonProps): JSX.Element {
  const variantStyles =
    !customStyle && variant === 'primary'
      ? 'bg-gray-950 text-white hover:bg-gray-900'
      : variant === 'secondary'
        ? 'text-buttonFilterText border border-buttonFilterText bg-pageBackground shadow-xl transition-colors'
        : ''

  return (
    <button
      className={`flex items-center justify-center gap-2 ${roundedValue} p-1 text-sm shadow-sm transition-all ${variantStyles} ${customStyle}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className='text-sm'>{icon}</span>}
      {text && <p>{text}</p>}
    </button>
  )
}
