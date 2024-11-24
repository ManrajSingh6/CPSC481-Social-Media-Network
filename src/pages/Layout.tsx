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
    <div className='bg-bgColor flex h-screen flex-col justify-between'>
      <div className='sticky border p-4'>
        <PageHeader user={user} />
      </div>
      <div className='h-full border p-4'>
        <Outlet />
      </div>
      <div className='sticky border p-4'>
        <Navbar />
      </div>
    </div>
  )
}
