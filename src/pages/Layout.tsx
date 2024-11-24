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
    <div className='bg-bgColor flex h-screen flex-col justify-between gap-6 p-4'>
      <PageHeader user={user} />
      <div className='h-full'>
        <Outlet />
      </div>
      <Navbar />
    </div>
  )
}
