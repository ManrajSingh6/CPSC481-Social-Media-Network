import '../../assets/styles.css'
import { Link, useNavigate } from 'react-router-dom'
import {
  ABOUT_US_ROUTE,
  LOGIN_ROUTE,
  TERMS_AND_CONDITIONS_ROUTE
} from '../../utils/routes'

function RegisterPage() {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate(LOGIN_ROUTE)
  }

  return (
    <div className='login-container'>
      <button className='back-icon-button' onClick={handleLogin}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='back-icon'
        >
          <line x1='19' y1='12' x2='5' y2='12'></line>
          <polyline points='12 19 5 12 12 5'></polyline>
        </svg>
      </button>
      <h1 className='header'>Register</h1>
      <p className='subheader'>Please enter your login details</p>
      <div className='form-container'>
        <text className='label'>Email</text>
        <input type='email' className='input' placeholder='Enter email' />
        <text className='label'>Username</text>
        <input type='text' className='input' placeholder='Enter username' />
        <text className='label'>Password</text>
        <input type='password' className='input' placeholder='Password' />
        <text className='label'>Confirm Password</text>
        <input
          type='password'
          className='input'
          placeholder='Confirm Password'
        />
        <button className='register-button'>Register</button>
        <button className='login-button' onClick={handleLogin}>
          Already a User? Login
        </button>
      </div>
      <div className='footer'>
        <Link to={TERMS_AND_CONDITIONS_ROUTE}>Terms & Conditions</Link>
        <Link to={ABOUT_US_ROUTE}>About Us</Link>
      </div>
    </div>
  )
}

export default RegisterPage
