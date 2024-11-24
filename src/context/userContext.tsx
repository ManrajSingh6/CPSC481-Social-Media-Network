import { createContext, useContext, useState } from 'react'
import { User } from '../utils/types'
import { MOCK_USER } from '../utils/mockData'

interface UserContextType {
  readonly user: User | null
  readonly login: (username: string, password: string) => boolean
}

interface UserProviderProps {
  children: React.ReactNode
}

export const UserContext = createContext<UserContextType | null>(null)

export function UserProvider({ children }: UserProviderProps): JSX.Element {
  const [user, setUser] = useState<User | null>(null)

  function login(username: string, password: string): boolean {
    if (username === MOCK_USER.username && password === MOCK_USER.password) {
      setUser(MOCK_USER)
      return true
    }

    return false
  }

  return (
    <UserContext.Provider value={{ user, login }}>
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
