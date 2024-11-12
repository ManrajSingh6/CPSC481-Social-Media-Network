import '../assets/styles.css';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const handleRegister = () => {
        navigate('/register')
    };
  return (
    <div className="login-container">
      
      <h1 className="header">Welcome Back :)</h1>
      <p className="subheader">Please enter your login details</p>

      <div className="form-container">
        <p className="label">Username</p>
        <input type="text" className="input" placeholder="Enter username" />
        <p className="label">Password</p>
        <input type="password" className="input" placeholder="Password" />
        <Link to='/forgot' className="text-blue-500 hover:text-blue-700 underline flex-start">
        Forgot Password?
        </Link>
        <button className="register-button">Login</button>
        <p className="label">
            <input style={{margin: '5px'}} type="checkbox"/>
            Remember me
        </p>
      </div>
      <br></br>
        <div style={styles.lineWithText}>
            <hr style={styles.hr} />
            <span style={{margin: 10}}>or</span>
            <hr style={styles.hr}/>
        </div>
      <br></br>
      <button 
        style={{width: '90%'}}
        className="login-button"
        onClick={handleRegister}>
        Register
      </button>
        
      <div className="footer">
        
        
        <span>Terms & Conditions</span>
        <span>About Us</span>
      </div>
    </div>
  )
}

export default Login;


const styles = {
  lineWithText: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  hr: {
    border: '1px solid black',
    width: '100%',
  }
}