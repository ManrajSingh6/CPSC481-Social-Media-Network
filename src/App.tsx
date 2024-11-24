import './assets/styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import ForgotPassword from './pages/forgot';
import { FORGOT_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from './utils/routes';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={LOGIN_ROUTE} />} />
        <Route path={LOGIN_ROUTE} element={<Login />} />
        <Route path={REGISTER_ROUTE} element={<Register />} />
        <Route path={FORGOT_ROUTE} element={<ForgotPassword />} />
        <Route />
      </Routes>
    </Router>
  )
}

export default App;
