import { CalendarDays, MessageSquare, Settings, Users } from 'lucide-react'
import {
  EVENTS_ROUTE,
  GROUPS_ROUTE,
  MESSAGES_ROUTE,
  SETTINGS_ROUTE
} from '../utils/routes'
import { NavLink } from 'react-router-dom'

interface NavbarItemProps {
  readonly icon: JSX.Element
  readonly path: string
  readonly activeColor: string
}
const NAVBAR_ITEMS: NavbarItemProps[] = [
  {
    icon: <Users />,
    path: GROUPS_ROUTE,
    activeColor: 'text-blue-500'
  },
  {
    icon: <CalendarDays />,
    path: EVENTS_ROUTE,
    activeColor: 'text-green-500'
  },
  {
    icon: <MessageSquare />,
    path: MESSAGES_ROUTE,
    activeColor: 'text-purple-500'
  },
  {
    icon: <Settings />,
    path: SETTINGS_ROUTE,
    activeColor: 'text-black'
  }
]

export function Navbar(): JSX.Element {
  return (
    <div className='flex items-center justify-between'>
      {NAVBAR_ITEMS.map((navItem) => {
        return <NavbarItem key={navItem.path} {...navItem} />
      })}
    </div>
  )
}

function NavbarItem({ icon, path, activeColor }: NavbarItemProps): JSX.Element {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `flex h-full w-full justify-center font-bold ${isActive ? `${activeColor} font-bold` : 'text-gray-600'}`
      }
    >
      {icon}
    </NavLink>
  )
}
