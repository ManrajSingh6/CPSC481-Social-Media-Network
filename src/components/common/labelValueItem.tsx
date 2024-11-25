interface LabelValueItemProps {
  readonly label: string
  readonly value: string | JSX.Element
}

export function LabelValueItem({
  label,
  value
}: LabelValueItemProps): JSX.Element {
  return (
    <div className='flex flex-col gap-0.5'>
      <p className='text-accentText text-sm font-semibold'>{label}</p>
      {typeof value === 'string' ? (
        <p className='text-header'>{value}</p>
      ) : (
        value
      )}
    </div>
  )
}
