import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Css/LoginSignup.css';
import Swal from 'sweetalert2';
function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true); 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    const url = isLogin ? 'http://localhost:5000/login' : 'http://localhost:5000/register';
    const body = isLogin
      ? { email, password }
      : { username: name, email, password };

    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.userId || data.user?.id) {
          localStorage.setItem('userId', data.userId || data.user.id);
          {isLogin ? Swal.fire({
                title: "login successful",
                icon: "success",
               draggable: true
                                }) 
: Swal.fire({
                title: "Registration successful",
                icon: "success",
               draggable: true
                                }) }
          navigate('/'); // or "/"
        } else {
          alert('Failed: ' + (data.message || 'Unknown error'));
        }
      })
      .catch((err) => {
        console.error(err);
        alert('Error during request');
      });
  };

  return (
    <div className='thePage'>
      <div className='the-cover-of-all-item'>
        {!isLogin && (
          <input
            type='text'
            placeholder='Your Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}
        <input
          type='email'
          placeholder='Email Address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleSubmit}>Continue</button>

        <p className='thelogin'>
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <span onClick={() => setIsLogin(!isLogin)} style={{ cursor: 'pointer', color: 'blue' }}>
            {isLogin ? 'Register here' : 'Login here'}
          </span>
        </p>

        <div className='the-agree-policy'>
          <input type='checkbox' />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
