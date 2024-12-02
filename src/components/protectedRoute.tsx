import { Navigate, Outlet } from 'react-router-dom'
import { useUser } from '../context/userContext'
import { LOGIN_ROUTE } from '../utils/routes'

export function ProtectedRoute(): JSX.Element {
  const { user, isUserLoading } = useUser()

  if (isUserLoading) {
    return <p>Loading...</p>
  }

  return user ? <Outlet /> : <Navigate to={LOGIN_ROUTE} />
}
