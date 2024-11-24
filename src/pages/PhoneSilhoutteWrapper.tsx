export function PhoneSilhouetteWrapper({
  children
}: {
  readonly children: React.ReactNode
}): JSX.Element {
  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-200'>
      {/* iPhone Container */}
      <div className='relative h-[812px] w-[375px] overflow-hidden rounded-[40px] border-4 border-black bg-white shadow-lg'>
        {/* App Content */}
        <div className='flex h-full w-full flex-col items-center justify-start overflow-auto'>
          {children}
        </div>
      </div>
    </div>
  )
}
