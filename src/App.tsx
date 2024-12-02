<<<<<<< HEAD
// Handles application routing and layout
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Layout/Navbar'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Your routes here */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
=======
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
  SETTINGS_ROUTE,
  PROFILE_ROUTE,
  TERMS_AND_CONDITIONS_ROUTE,
  FAQ_ROUTE,
  PRIVACY_SAFETY_ROUTE,
  APP_UPDATES_ROUTE,
  NOTIFCATON_SETTINGS_ROUTE
} from './utils/routes'
import { ProtectedRoute } from './components/protectedRoute.tsx'
import { DiscoverPage } from './pages/DiscoverPage.tsx'
import { Layout } from './pages/Layout.tsx'
import { UserProvider } from './context/userContext.tsx'
import { PhoneSilhouetteWrapper } from './pages/PhoneSilhoutteWrapper.tsx'
import { MessagePage } from './pages/MessagePage.tsx'
import SettingsPage from './pages/SettingsPage.tsx'
import NotificationsPage from './pages/NotificationPage.tsx'
import { ProfilePage } from './pages/ProfilePage.tsx'
import { TermsAndConditionsPage } from './pages/TermsAndConditionsPage.tsx'
import { FAQPage } from './pages/FAQPage.tsx'
import { PrivacySafetyPage } from './pages/PrivacySafetyPage.tsx'
import { AppUpdatesPage } from './pages/AppUpdatesPage.tsx'
import { NotificationSettingsPage } from './pages/NotificationSettingsPage.tsx'

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
                <Route
                  path={NOTIFCATON_SETTINGS_ROUTE}
                  element={<NotificationSettingsPage />}
                />
                <Route path={PROFILE_ROUTE} element={<ProfilePage />} />
                <Route
                  path={TERMS_AND_CONDITIONS_ROUTE}
                  element={<TermsAndConditionsPage />}
                />
                <Route path={FAQ_ROUTE} element={<FAQPage />} />
                <Route
                  path={PRIVACY_SAFETY_ROUTE}
                  element={<PrivacySafetyPage />}
                />
                <Route path={APP_UPDATES_ROUTE} element={<AppUpdatesPage />} />
              </Route>
            </Route>
          </Routes>
        </Router>
      </UserProvider>
    </PhoneSilhouetteWrapper>
  )
}

export default App
>>>>>>> main
