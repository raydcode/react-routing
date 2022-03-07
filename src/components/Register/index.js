import React, { useState } from 'react';
import { auth } from '../../config';
import { Link, useNavigate } from 'react-router-dom';

import { useAuthValue } from '../../context/AuthContext';

import {
  createUserWithEmailAndPassword,
} from 'firebase/auth';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const { setTimeActive } = useAuthValue();
  const navigate = useNavigate();

  const validatePassword = () => {
    let isValid = true;

    if (password !== '' && confirmPassword !== '') {
      if (password !== confirmPassword) {
        isValid = false;
        setError('Password does not match');
      }
    }

    return isValid;
  };

  const register = (e) => {
    e.preventDefault();
    if (validatePassword()) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          setTimeActive(true);
          navigate('/login');
        })
        .catch((error) => {
          alert(error);
        });

      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <div className="center">
      <div className="auth">
        <h1>Register</h1>
        <form onSubmit={register}>
          <input
            type="email"
            value={email}
            placeholder="Enter your email address"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="Enter your  password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            value={confirmPassword}
            placeholder="Confirm password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit">Sumbit</button>
        </form>
        <span>
          Already registered ?<Link to="/login">Login</Link>
        </span>
      </div>
    </div>
  );
}

export default Register;
