import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

import { Container } from './style';

import { FaUser, FaLock } from 'react-icons/fa';
import { IoMdMail } from "react-icons/io";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

  const notify = () => toast("Wow so easy!");
  const navigate = useNavigate()

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [usernameFocused, setUsernameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const handleUsernameFocus = () => {
    setUsernameFocused(true);
    setEmailFocused(false);
    setPasswordFocused(false);
  };

  const handleEmailFocus = () => {
    setEmailFocused(true);
    setUsernameFocused(false);
    setPasswordFocused(false);
  };

  const handlePasswordFocus = () => {
    setPasswordFocused(true);
    setUsernameFocused(false);
    setEmailFocused(false);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!username || !email || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }
    try {
      await axios.post("https://job-ai-one.vercel.app/api/auth/register", {
        username,
        email,
        password
      });
      toast.success('Registrado com sucesso');
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (error) {
      setError('Ocorreu um erro ao tentar se registrar. Por favor, tente novamente.');
      console.error(error);
    }
  };

  return (
    <Container>
      <div className="detail"></div>
      <div className="right-side">
        <div className="card">
          <h1 className="welcome">Inscrever-se</h1>
          <form onSubmit={handleSubmit}>
            <div className={`username ${usernameFocused ? 'focused' : ''}`}>
              <FaUser className={`icon ${usernameFocused ? 'focused' : ''}`} />
              <span className={`label ${usernameFocused ? 'focused' : ''}`}>
                Nome
              </span>
            </div>
            <input
              className={`input ${usernameFocused ? 'focused' : ''}`}
              type="text"
              value={username}
              onChange={handleUsernameChange}
              onFocus={handleUsernameFocus}
              onBlur={() => setUsernameFocused(false)}
            />

            <div className={`email ${emailFocused ? 'focused' : ''}`}>
              <IoMdMail className={`icon ${emailFocused ? 'focused' : ''}`} />
              <span className={`label ${emailFocused ? 'focused' : ''}`}>
                Email
              </span>
            </div>
            <input
              className={`input ${emailFocused ? 'focused' : ''}`}
              type="text"
              value={email}
              onChange={handleEmailChange}
              onFocus={handleEmailFocus}
              onBlur={() => setEmailFocused(false)}
            />

            <div className={`password ${passwordFocused ? 'focused' : ''}`}>
              <FaLock className={`icon ${passwordFocused ? 'focused' : ''}`} />
              <span className={`label ${passwordFocused ? 'focused' : ''}`}>
                Senha
              </span>
            </div>
            <input
              className={`input ${passwordFocused ? 'focused' : ''}`}
              type="password"
              value={password}
              onChange={handlePasswordChange}
              onFocus={handlePasswordFocus}
              onBlur={() => setPasswordFocused(false)}
            />
            {error && <p className='error-message'>{error}</p>}
            <button type="submit" className="btn">Registrar</button>
          </form>
        </div>
        <ToastContainer
            position="top-right"
            autoClose={2200} 
          />
      </div>
    </Container>
  );
};

export default Register;
