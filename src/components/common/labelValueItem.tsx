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
      <p className='text-sm font-semibold'>{label}</p>
      {typeof value === 'string' ? (
        <p className='text-header text-gray-600'>{value}</p>
      ) : (
        value
      )}
    </div>
  )
}
