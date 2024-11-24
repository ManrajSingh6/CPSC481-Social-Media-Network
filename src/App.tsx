import './assets/styles.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage.tsx'
import RegisterPage from './pages/RegisterPage.tsx'
import ForgotPasswordPage from './pages/ForgotPasswordPage.tsx'
import {
  EVENTS_ROUTE,
  FORGOT_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE
} from './utils/routes'
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to={LOGIN_ROUTE} />} />
        <Route path={LOGIN_ROUTE} element={<LoginPage />} />
        <Route path={REGISTER_ROUTE} element={<RegisterPage />} />
        <Route path={FORGOT_ROUTE} element={<ForgotPasswordPage />} />
        <Route path={EVENTS_ROUTE} element />
      </Routes>
    </Router>
  )
}

export default App
