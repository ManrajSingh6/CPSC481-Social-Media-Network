interface InputFieldProps<T extends string | number> {
  readonly type: React.HTMLInputTypeAttribute
  readonly value: T
  readonly onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  readonly name?: string
  readonly placeholder?: string
  readonly errorCondition?: boolean
  readonly errorMessage?: string
  readonly required?: boolean
  readonly label?: string
  readonly className?: string
  readonly icon?: JSX.Element
  readonly maxLengthChars?: number
  readonly maxNumber?: number
  readonly minNumber?: number
  readonly step?: string
  readonly width?: string
}

export function InputField<T extends string | number>({
  type,
  value,
  onChange,
  name,
  placeholder,
  errorCondition,
  errorMessage,
  required,
  label,
  className,
  icon,
  maxLengthChars,
  minNumber,
  maxNumber,
  step,
  width
}: InputFieldProps<T>): JSX.Element {
  return (
    <div className={`flex flex-col ${width}`}>
      {label && <label className='text-header mb-0.5 text-sm'>{label}</label>}
      <div className='flex items-center'>
        {icon && <p className='absolute pl-2'>{icon}</p>}
        <input
          type={type}
          value={value}
          onChange={onChange}
          name={name}
          placeholder={placeholder}
          required={required}
          className={`focus:border-subtleHover w-full rounded-md border p-2 text-sm focus:outline-none ${errorCondition ? 'border-red-500' : 'border-slate-300'} ${className}`}
          maxLength={maxLengthChars}
          max={maxNumber}
          min={minNumber}
          step={step}
        />
      </div>
      {errorCondition && <p className='text-xs text-red-500'>{errorMessage}</p>}
    </div>
  )
}
