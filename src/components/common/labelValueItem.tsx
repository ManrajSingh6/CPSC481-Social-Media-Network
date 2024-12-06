interface LabelValueItemProps {
  readonly label: string
  readonly value: string | JSX.Element
  readonly className?: string
}

export function LabelValueItem({
  label,
  value,
  className = ''
}: LabelValueItemProps): JSX.Element {
  return (
    <div className={`flex flex-col gap-0.5 ${className}`}>
      <p className='text-accentText text-sm font-semibold'>{label}</p>
      {typeof value === 'string' ? (
        <p className='text-header'>{value}</p>
      ) : (
        value
      )}
    </div>
  )
}
