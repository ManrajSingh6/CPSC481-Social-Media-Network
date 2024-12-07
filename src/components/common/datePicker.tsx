import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ShadButton } from '@/components/ui/shadButton'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'

interface DatePickerProps {
  readonly date: Date | undefined
  readonly setDate: (date: Date | undefined) => void
  readonly label?: string
  readonly placeholder?: string
  readonly defaultDate?: Date
  readonly maxDate?: Date
  readonly minDate?: Date
}

export function DatePicker({
  date,
  setDate,
  label,
  placeholder = 'Pick a date',
  maxDate,
  minDate
}: DatePickerProps) {
  return (
    <div className='flex flex-col'>
      <Popover>
        {label && <label className='text-header mb-0.5 text-sm'>{label}</label>}
        <PopoverTrigger asChild>
          <ShadButton
            variant={'outline'}
            className={cn(
              'focus:border-subtleHover w-[280px] justify-start border border-slate-300 bg-white p-4 text-left font-normal',
              !date && 'text-muted-foreground'
            )}
          >
            <CalendarIcon className='mr-2 h-4 w-4' />
            {date ? format(date, 'PPP') : <span>{placeholder}</span>}
          </ShadButton>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0'>
          <Calendar
            mode='single'
            selected={date}
            onSelect={(date) => setDate(date)}
            initialFocus
            disabled={(day) => {
              if (minDate && day < minDate) return true
              if (maxDate && day > maxDate) return true
              return false // Default to false for all other cases
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
