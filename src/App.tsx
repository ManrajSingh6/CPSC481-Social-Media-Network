import './assets/styles.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import LoginPage from './pages/auth/LoginPage.tsx'
import RegisterPage from './pages/auth/RegisterPage.tsx'
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage.tsx'
import {
  FORGOT_ROUTE,
  DISCOVER_ROUTE,
  LOGIN_ROUTE,
  MESSAGES_ROUTE,
  NOTIFICATIONS_ROUTE,
  REGISTER_ROUTE,
  SETTINGS_ROUTE
} from './utils/routes'
import { ProtectedRoute } from './components/protectedRoute.tsx'
import { DiscoverPage } from './pages/DiscoverPage.tsx'
import { Layout } from './pages/Layout.tsx'
import { UserProvider } from './context/userContext.tsx'
import { PhoneSilhouetteWrapper } from './pages/PhoneSilhoutteWrapper.tsx'
import { MessagePage } from './pages/MessagePage.tsx'
import SettingsPage from './pages/SettingsPage.tsx'
import NotificationsPage from './pages/NotificationPage.tsx'

function App() {
  return (
    <PhoneSilhouetteWrapper>
      <UserProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Navigate to={LOGIN_ROUTE} />} />
            <Route path={LOGIN_ROUTE} element={<LoginPage />} />
            <Route path={REGISTER_ROUTE} element={<RegisterPage />} />
            <Route path={FORGOT_ROUTE} element={<ForgotPasswordPage />} />
            <Route element={<ProtectedRoute />}>
              <Route path='/' element={<Layout />}>
                <Route path={DISCOVER_ROUTE} element={<DiscoverPage />} />
                <Route path={MESSAGES_ROUTE} element={<MessagePage />} />
                <Route path={SETTINGS_ROUTE} element={<SettingsPage />} />
                <Route
                  path={NOTIFICATIONS_ROUTE}
                  element={<NotificationsPage />}
                />
              </Route>
            </Route>
          </Routes>
        </Router>
      </UserProvider>
    </PhoneSilhouetteWrapper>
  )
}

export default App
