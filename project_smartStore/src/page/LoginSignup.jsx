import React from 'react'
import "./Css/LoginSignup.css"
function LoginSignup() {
  return (
    <div className='thePage'>
      <div className='the-cover-of-all-item'>
      <input type="text"  placeholder='Your Name'/>
      <input type="email"  placeholder='Email Address'/>
      <input type="password"  placeholder='Password'/>
      <button>Continue</button>
        <p className='thelogin'>Already Have An Account ? <span>Login here</span></p>
     <div className='the-agree-policy'>
      <input type="checkbox" />
      <p>By continuing, I agree to the terms of use & privacy policy</p>
     </div>
</div>
    </div>
  )
}

export default LoginSignup