import React, { useState } from 'react';

import { auth } from '../../config';
import { Link, useNavigate } from 'react-router-dom';

import { useAuthValue } from '../../context/AuthContext';

import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        if (!auth.currentUser.emailVerified) {
          localStorage.setItem('authToken', JSON.stringify(user));

          navigate('/');
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="center">
      <div className="auth">
        <h1>Login</h1>
        <form onSubmit={login}>
          <input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
          />

          <input
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your  password"
          />

          <button type="submit">Sumbit</button>
        </form>
        <span>
          Don't have a account ?<Link to="/register">Create An Account</Link>
        </span>
      </div>
    </div>
  );
}

export default Login;
