import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

import Phone from './../../assets/login/phone.png';
import User from './../../assets/login/user.png';
import { Container } from './style';
import { FaUser, FaLock } from 'react-icons/fa';
import { IoMdMail } from "react-icons/io";

const Login = () => {
  const { dispatch } = useContext(AuthContext)

  const navigate = useNavigate();
  const [usernameFocused, setUsernameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameFocus = () => {
    setUsernameFocused(true);
    setPasswordFocused(false);
  };

  const handlePasswordFocus = () => {
    setPasswordFocused(true);
    setUsernameFocused(false);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }
    try {
      const response = await axios.post("https://job-ai-chi.vercel.app/api/auth/login", {
        email,
        password
      });
      console.log(response.data);
      dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
      setError('');
      navigate('/');
    } catch (error) {
      if (error.response) {
        // Erro de resposta do servidor
        dispatch({ type: 'LOGIN_FAILURE', payload: error.response.data });
        setError(error.response.data);
      } else {
        // Erro de rede ou outro erro
        dispatch({ type: 'LOGIN_FAILURE', payload: 'Ocorreu um erro. Por favor, tente novamente.' });
        setError('Ocorreu um erro. Por favor, tente novamente.');
      }
      console.error(error);
    }
  };

  return (
    <Container>
      <div className="detail"></div>
      <div className="left-side">
        <img src={Phone} width="500px" alt="Phone" />
      </div>
      <div className="right-side">
        <div className="card">
          <img src={User} width="100px" alt="User" />
          <h1 className="welcome">Bem vindo</h1>
          <form>
            <div className={`username ${usernameFocused ? 'focused' : ''}`}>
              <IoMdMail className={`icon ${usernameFocused ? 'focused' : ''}`} />
              <span className={`label ${usernameFocused ? 'focused' : ''}`}>
                Email
              </span>
            </div>
            <input
              required
              className={`input ${usernameFocused ? 'focused' : ''}`}
              type="email"
              onChange={handleEmail}
              onFocus={handleUsernameFocus}
              onBlur={() => setUsernameFocused(false)}
            />
            <div className={`password ${passwordFocused ? 'focused' : ''}`}>
              <FaLock className={`icon ${passwordFocused ? 'focused' : ''}`} />
              <span className={`label ${passwordFocused ? 'focused' : ''}`}>
                Senha
              </span>
            </div>
            <input
              required
              className={`input ${passwordFocused ? 'focused' : ''}`}
              type="password"
              onChange={handlePassword}
              onFocus={handlePasswordFocus}
              onBlur={() => setPasswordFocused(false)}
            />
            <Link to="/register" style={{ textDecoration: "none" }}>
              {error && <> <p className='error-message'>{error}</p></>}
              <p className="register">Registrar-se</p>
            </Link>
            <button onClick={handleSubmit} className="btn">LOGIN</button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Login;
