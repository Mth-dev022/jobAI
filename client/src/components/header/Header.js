import React, { useState, useContext, useEffect} from 'react';
import axios from 'axios';

import { FaRocket } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { FaWheelchair } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import Logo from '../../assets/header/logo.png'

import { Link } from 'react-router-dom';

import Image from '../../assets/header/person.webp';
import * as C from './styles'; 
import Navbar from './navbar/Navbar';

import { DataContext } from '../../context/dataContext';
import {AuthContext} from '../../context/authContext'

const Header = () => {
    
    const { data, setData, setLoading, loading } = useContext(DataContext)
    const {dispatch } = useContext(AuthContext);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async (value) => {
        const options = {
              method: 'GET',
              url: 'https://jsearch.p.rapidapi.com/search',
              params: {
                query: value,
                page: '1',
                num_pages: '5'
              },
              headers: {
                'X-RapidAPI-Key': '0d4772f77emshbb607fed986a3c4p124dc8jsnad0674983b19',
                'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
              }
            };
        try {
            setLoading(true)
            const response = await axios.get('https://jsearch.p.rapidapi.com/search', options);
            setData(response.data)
            setLoading(false)
        } catch (e) {
            setError(e.message);
            console.error(error);
            setLoading(false)
        }
    }
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const handleTec = (value) => {
        handleSearch(value);
    }
    const handleTrainee = (value) => {
        handleSearch(value);
    }
    const handleLogout = () => {
        localStorage.removeItem('user'); 
        dispatch({ type: "LOGOUT" }); 
        setIsLoggedIn(false);
    };

      const user = JSON.parse(localStorage.getItem('user'));

      return (
          <C.Container id="header">
              <div className='h-area'>
                  <div className='left-side'>
                      <div className='h-log-area'>
                          <img className="logo" src={Logo} />
                          <div className='btn-area'>
                              {user ? (
                                    <div className='logged-user'>
                                       <div> 
                                            <div className='user-content'>
                                                <p> <FaRegUserCircle className='icon'/> </p>
                                                <p> {user.username} </p>                                    
                                            </div>
                                        </div>
                                        <div>
                                            <button className='btn' onClick={handleLogout}>Logout</button>
                                        </div>
                                  </div>
                              ) : (
                                  <>
                                      <Link style={{ textDecoration: "none" }} to="/login">
                                          <div className='log-in-btn'>Entrar</div>
                                      </Link>
                                      <Link to="/register">
                                          <button className='register-btn'>Cadastre-se gratuitamente</button>
                                      </Link>
                                  </>
                              )}
                          </div>
                      </div>
                      <hr className='line' />
                      <div className='h-search-area'>
                          <p className='h-text'>SÃO MAIS DE 12.000 VAGAS</p>
                          <h1 className='h-title'>Encontre sua vaga de emprego</h1>
                          <Navbar />
                          <div className='h-card-area'>
                              <div onClick={() => handleSearch('pcd')} className='h-card'> <FaWheelchair className='icon' /> Vagas para PCD</div>
                              <div onClick={() => handleTec('tecnologia')} className='h-card'> <MdComputer className='icon' /> Vagas de Tecnologia</div>
                              <div onClick={() => handleTrainee('trainee')} className='h-card'> <FaRocket className='icon' /> Estágio e Trainee</div>
                          </div>
                      </div>
                  </div>
                  <div className='right-side'>
                      <img src={Image} alt="Pessoa" />
                  </div>
              </div>
          </C.Container>
      );
  };
  
  export default Header;
