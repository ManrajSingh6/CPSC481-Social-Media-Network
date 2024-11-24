interface HeadingProps {
  readonly headingText: string
  readonly subText?: string
  readonly headerColour?: string
  readonly headingSize?: 'small' | 'medium' | 'large'
}

export function Heading({
  headingText,
  subText,
  headerColour = 'text-header',
  headingSize = 'large'
}: HeadingProps): JSX.Element {
  return (
    <div>
      <h1
        className={`${headerColour} mb-0.5 ${headingSize === 'small' ? 'text-sm' : headingSize === 'medium' ? 'text-lg' : 'text-xl'} font-semibold`}
      >
        {headingText}
      </h1>
      {subText && <p className='text-sm text-accentText'>{subText}</p>}
    </div>
  )
}
