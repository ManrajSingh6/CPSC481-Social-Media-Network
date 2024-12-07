export interface ButtonProps {
  readonly text?: string
  readonly icon?: JSX.Element
  readonly onClick: () => void
  readonly variant?: 'primary' | 'secondary'
  readonly customStyle?: string
  readonly disabled?: boolean
  readonly roundedValue?: string
  readonly paddingValue?: string
}

export function Button({
  text,
  icon,
  onClick,
  variant = 'primary',
  customStyle = '',
  disabled,
  roundedValue = 'rounded-lg',
  paddingValue = 'p-1'
}: ButtonProps): JSX.Element {
  const variantStyles =
    !customStyle && variant === 'primary'
      ? 'bg-gray-950 text-white hover:bg-gray-500'
      : variant === 'secondary'
        ? 'text-gray-950 border border-gray-950 bg-white hover:bg-gray-200'
        : ''

  return (
    <button
      className={`flex items-center justify-center gap-2 ${roundedValue} ${paddingValue} text-sm shadow-sm transition-all duration-300 ease-in-out ${variantStyles} ${customStyle} ${disabled ? 'cursor-not-allowed opacity-70 disabled:hover:bg-gray-950' : 'cursor-pointer'}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className='text-sm'>{icon}</span>}
      {text && <p>{text}</p>}
    </button>
  )
}
