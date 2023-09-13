import React from 'react'
import logo from '../../assets/logo.svg'
import './Login.css'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div className="loginFrame">
      <div className='loginContainer'>
        <h2 className='welcomeTxt'>Welcome</h2>
        <img className='logoIcon' src={logo} alt="logo" />
        <div className="emailContainer">
          <input className='emailInput' type="text" placeholder='Email' />
          <div className='bottomLine'></div>
        </div>

  


        <div className='passwordContainer' >
          <input className='passwordInput emailInput' type="password" placeholder='Password' />
          <div className='passwordBottomLine bottomLine'></div>
        </div>
        <button className='loginBtn'>LogIn</button>
        <span className='signUpTxt'>Don’t have an account? <Link className='signUpLink' to='/signup'>Sign Up</Link></span>
      </div>
     
    </div>
  )
}

export default Login