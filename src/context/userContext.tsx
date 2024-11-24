import { createContext, useContext, useEffect, useState } from 'react'
import { GroupOrEvent, User } from '../utils/types'
import { MOCK_USER } from '../utils/mockData'

const LOCAL_STORAGE_USER_KEY = 'logged_in_user'

interface UserContextType {
  readonly user: User | null
  readonly login: (username: string, password: string) => boolean
  readonly enrollUserInGroupOrEvent: (
    groupOrEventId: number,
    type: GroupOrEvent
  ) => void
  readonly unenrollUserInGroupOrEvent: (
    groupOrEventId: number,
    type: GroupOrEvent
  ) => void
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

  function enrollUserInGroupOrEvent(
    groupOrEventId: number,
    type: GroupOrEvent
  ): void {
    if (!user) {
      return
    }

    if (type === 'Event') {
      user.enrolledEventIds.push(groupOrEventId)
      return
    }

    user.enrolledGroupIds.push(groupOrEventId)
    return
  }

  function unenrollUserInGroupOrEvent(
    groupOrEventId: number,
    type: GroupOrEvent
  ): void {
    if (!user) {
      return
    }

    if (type === 'Event') {
      const newUser: User = {
        ...user,
        enrolledEventIds: user.enrolledEventIds.filter(
          (eventId) => eventId !== groupOrEventId
        )
      }
      setUser(newUser)
      updateUserInLocalStorage(newUser)
      return
    }

    const newUser: User = {
      ...user,
      enrolledEventIds: user.enrolledGroupIds.filter(
        (eventId) => eventId !== groupOrEventId
      )
    }
    setUser(newUser)
    updateUserInLocalStorage(newUser)
    return
  }

  function updateUserInLocalStorage(user: User): void {
    localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(user))
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
    <UserContext.Provider
      value={{
        user,
        login,
        isUserLoading,
        enrollUserInGroupOrEvent,
        unenrollUserInGroupOrEvent
      }}
    >
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
