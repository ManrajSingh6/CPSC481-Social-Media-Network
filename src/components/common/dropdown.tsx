import Select from 'react-select'

export interface DropdownOption<T> {
  readonly label: string
  readonly value: T
  readonly isDisabled?: boolean
}

interface DropdownProps<T> {
  readonly selectedOption: DropdownOption<T> | null
  readonly options: readonly DropdownOption<T>[]
  readonly defaultOption?: DropdownOption<T>
  readonly onSelect: (value: DropdownOption<T> | null) => void
  readonly dropdownLabel?: string
  readonly placeholder?: string
}

export function Dropdown<T>({
  selectedOption,
  options,
  defaultOption,
  onSelect,
  dropdownLabel,
  placeholder
}: DropdownProps<T>): JSX.Element {
  return (
    <div className='flex flex-col gap-1'>
      {dropdownLabel && (
        <label className='text-header text-sm'>{dropdownLabel}</label>
      )}
      <Select
        className='w-fit text-sm focus:outline-none'
        defaultValue={defaultOption}
        onChange={onSelect}
        value={selectedOption}
        options={defaultOption ? [defaultOption].concat(options) : options}
        placeholder={placeholder}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            border: '1px solid #cbd5e1',
            minWidth: '150px',
            backgroundColor: 'white',
            width: 'fit-content',
            cursor: state.isDisabled ? 'not-allowed' : 'pointer',
            boxShadow: 'none'
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            textDecoration: state.isDisabled ? 'line-through' : 'none',
            backgroundColor: state.isSelected ? '#2a5573' : '#FFFFFF',
            color: state.isSelected
              ? '#FFFFFF'
              : state.isFocused
                ? '#2a5573'
                : '#858585',
            cursor: state.isDisabled ? 'not-allowed' : 'pointer'
          })
        }}
      />
    </div>
  )
}
