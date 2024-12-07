import '../../assets/styles.css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { DISCOVER_ROUTE, REGISTER_ROUTE } from '../../utils/routes'
import { useState } from 'react'
import { MOCK_USER } from '../../utils/mockData'
import { useUser } from '../../context/userContext'

interface LoginData {
  readonly username: string
  readonly password: string
}

function LoginPage() {
  const navigate = useNavigate()

  // TODO: Implement login functionality with setLoginData
  const [loginData] = useState<LoginData>({
    username: MOCK_USER.username,
    password: MOCK_USER.password
  })

  const { login: loginUser } = useUser()

  const handleRegister = () => {
    navigate(REGISTER_ROUTE)
  }

  function handleLogin() {
    const success = loginUser(loginData.username, loginData.password)

    if (success) {
      navigate(DISCOVER_ROUTE)
    } else {
      alert('Invalid login') // TODO: use nicer alerting mechanism
    }
  }

  return (
    <div className='login-container'>
      <h1 className='header'>Welcome Back :{')'}</h1>
      <p className='subheader'>Please enter your login details</p>

      <div className='form-container'>
        <p className='label'>Username</p>
        <input
          type='text'
          className='input'
          placeholder='Enter username'
          value={loginData.username}
        />
        <p className='label'>Password</p>
        <input
          type='password'
          className='input'
          placeholder='Password'
          value={loginData.password}
        />
        <Link
          to='/forgot'
          className='flex-start text-blue-500 underline hover:text-blue-700'
        >
          Forgot Password?
        </Link>
        <button className='register-button' onClick={handleLogin}>
          Login
        </button>
        <p className='label'>
          <input style={{ margin: '5px' }} type='checkbox' />
          Remember me
        </p>
      </div>
      <br></br>
      <div className='flex w-full items-center justify-center'>
        <hr className='w-full border border-black' />
        <span style={{ margin: 10 }}>or</span>
        <hr className='w-full border border-black' />
      </div>
      <br></br>
      <button
        style={{ width: '90%' }}
        className='login-button'
        onClick={handleRegister}
      >
        Register
      </button>
      <div className='footer'>
        <Link to='/terms-and-conditions'>Terms & Conditions</Link>
        <Link to='/about-us'>About Us</Link>
      </div>
    </div>
  )
}

export default LoginPage
