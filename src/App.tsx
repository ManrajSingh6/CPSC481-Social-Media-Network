import './assets/styles.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage.tsx'
import RegisterPage from './pages/RegisterPage.tsx'
import ForgotPasswordPage from './pages/ForgotPasswordPage.tsx'
import {
  EVENTS_ROUTE,
  FORGOT_ROUTE,
  GROUPS_ROUTE,
  LOGIN_ROUTE,
  MESSAGES_ROUTE,
  NOTIFICATIONS_ROUTE,
  REGISTER_ROUTE,
  SETTINGS_ROUTE
} from './utils/routes'
import { ProtectedRoute } from './components/protectedRoute.tsx'
import { EventsPage } from './pages/EventsPage.tsx'
import { GroupsPage } from './pages/GroupsPage.tsx'
import { Layout } from './pages/Layout.tsx'
import { UserProvider } from './context/userContext.tsx'

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to={LOGIN_ROUTE} />} />
          <Route path={LOGIN_ROUTE} element={<LoginPage />} />
          <Route path={REGISTER_ROUTE} element={<RegisterPage />} />
          <Route path={FORGOT_ROUTE} element={<ForgotPasswordPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path='/' element={<Layout />}>
              <Route path={GROUPS_ROUTE} element={<GroupsPage />} />
              <Route path={EVENTS_ROUTE} element={<EventsPage />} />
              <Route path={MESSAGES_ROUTE} element={<p>Messages Page</p>} />
              <Route path={SETTINGS_ROUTE} element={<p>Settings Page</p>} />
              <Route
                path={NOTIFICATIONS_ROUTE}
                element={<p>Notifications Page</p>}
              />
            </Route>
          </Route>
        </Routes>
      </Router>
    </UserProvider>
  )
}

export default App
