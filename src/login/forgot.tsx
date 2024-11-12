import '../assets/styles.css';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login')
    };
  return (
    <div className="login-container">
      <button 
      className='back-icon-button'
      onClick={handleLogin}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className='back-icon'
        >
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </button>
      <h1 className="header">Forgot Password?</h1>
      <p className="subheader">Please enter your email address on which 
        you would like to receive the password reset link</p>

      <div className="form-container">
        <p className="label">Email</p>
        <input type="text" className="input" placeholder="Enter email" />
        
        
        <button className="register-button">Send Reset Link</button>
      </div>
      <div className="footer">
        
        
        <span>Terms & Conditions</span>
        <span>About Us</span>
      </div>
    </div>
  )
}

export default ForgotPassword;