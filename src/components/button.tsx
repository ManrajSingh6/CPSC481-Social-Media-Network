export interface ButtonProps {
  readonly text?: string
  readonly icon?: JSX.Element
  readonly onClick: () => void
  readonly variant?: 'primary' | 'secondary'
  readonly customStyle?: string
  readonly disabled?: boolean
}

export function Button({
  text,
  icon,
  onClick,
  variant = 'primary',
  customStyle = '',
  disabled
}: ButtonProps): JSX.Element {
  const variantStyles =
    !customStyle && variant === 'primary'
      ? 'bg-blue-800 text-white hover:bg-blue-600'
      : variant === 'secondary'
        ? 'text-buttonFilterText border border-buttonFilterText bg-pageBackground shadow-xl transition-colors'
        : ''

  return (
    <button
      className={`flex items-center justify-center gap-2 rounded-lg p-2 text-sm shadow-sm transition-all ${variantStyles} ${customStyle}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className='text-sm'>{icon}</span>}
      {text && <p>{text}</p>}
    </button>
  )
}
