import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/navbar'
import { PageHeader } from '../components/pageHeader'
import { useUser } from '../context/userContext'

export function Layout(): JSX.Element {
  const { user } = useUser()

  // This shouldn't occur with the protected route and current setup
  if (!user) {
    return <div>No user. Loading...</div>
  }

  return (
    <div className='flex h-screen w-full flex-col bg-bgColor'>
      {/* Header */}
      <div className='sticky top-0 z-[9999999] border bg-bgColor p-4'>
        <PageHeader user={user} />
      </div>

      {/* Main Content (Scrollable) */}
      <div className='no-scrollbar flex-1 overflow-y-auto p-4'>
        <Outlet />
      </div>

      {/* Navbar (Fixed at Bottom) */}
      <div className='sticky bottom-0 z-[9999999] border bg-bgColor p-4'>
        <Navbar />
      </div>
    </div>
  )
}
