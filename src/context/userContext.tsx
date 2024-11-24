import { createContext, useContext, useEffect, useState } from 'react'
import { User } from '../utils/types'
import { MOCK_USER } from '../utils/mockData'

const LOCAL_STORAGE_USER_KEY = 'logged_in_user'

interface UserContextType {
  readonly user: User | null
  readonly login: (username: string, password: string) => boolean
  readonly isUserLoading: boolean
}

interface UserProviderProps {
  children: React.ReactNode
}

const UserContext = createContext<UserContextType | null>(null)

export function UserProvider({ children }: UserProviderProps): JSX.Element {
  const [user, setUser] = useState<User | null>(null)
  const [isUserLoading, setIsUserLoading] = useState(true)

  function login(username: string, password: string): boolean {
    if (username === MOCK_USER.username && password === MOCK_USER.password) {
      setUser(MOCK_USER)
      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(MOCK_USER))
      return true
    }

    return false
  }

  useEffect(() => {
    setIsUserLoading(true)
    const existingLoggedInUser = localStorage.getItem(LOCAL_STORAGE_USER_KEY)
    if (existingLoggedInUser) {
      setUser(JSON.parse(existingLoggedInUser))
    }

    setIsUserLoading(false)
  }, [])

  return (
    <UserContext.Provider value={{ user, login, isUserLoading }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser(): UserContextType {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('Failed to use hook, no User Context provided.')
  }
  return context
}
