import React, { useContext, useState, useEffect } from 'react';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import CreateCvButton from './components/cv/CreateCvButton'

import { DataContext } from './context/dataContext';

import { FaCity } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { MdPlace } from "react-icons/md";
import { LiaSuitcaseSolid } from "react-icons/lia";

import './index.css';

import Arrow1 from './assets/main/arrow.png';
import Arrow2 from './assets/main/arrow2.png';

function App() {

  const { data, loading } = useContext(DataContext) || { data: { data: [] }, loading: true };
  const [fixCV, setFixCV] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { 
        setFixCV(true);
      } else {
        setFixCV(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  return (
    <div className="App">
      <Header />
      {loading ? (
        <div className='spinner-container'>
          <div className='spinner'></div>
        </div>
      ) : (
        <>
          <div className='jobs-container'>
            {data && data.data && data.data.length > 0 && data.data.map((d, index) => (
              <a style={{ textDecoration: "none", color: "black" }} href={d.job_apply_link} key={index} className='jobs-card-link'>
                <div className='jobs-card'>
                  <p className="employer-info">
                    {d.employer_logo !== null && d.employer_logo !== "" ? (
                      <img style={{ marginRight: "8px" }} width="40px" height="20px" src={d.employer_logo} alt="Employer Logo" />
                    ) : (
                      <FaCity style={{ width: "40px", height: "20px" }} />
                    )}
                    <span className='company'>{d.employer_name}</span>
                  </p>
                  <p className='employe'>{d.job_title}</p>
                  <div className='icons-container'>
                    <p style={{ marginRight: "50px" }}>
                      <MdPlace style={{ width: "20px", height: "15px", color: "02A97F" }} />
                      {d.job_city} {d.job_country}
                    </p>
                    <p>
                      <MdComputer style={{ marginRight: "5px", width: "20px", height: "15px", color: "02A97F" }} />
                      {d.job_is_remote ? 'Remoto' : 'Presencial'}
                    </p>
                  </div>
                  <div className='icons-container'>
                    <p>
                      <LiaSuitcaseSolid style={{ width: "20px", height: "15px", color: "#02A97F" }} />
                      <span className='employment-type'> {d.job_employment_type} </span>
                    </p>
                  </div>
                  <hr className='line' />
                  <div className='icons-container'>
                    <p>
                      <span style={{ marginRight: "8px", fontSize: "15px" }}>Postada em:</span>
                      <span style={{ fontSize: "15px" }}>{formatDate(d.job_posted_at_datetime_utc)}</span>
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <h1 style={{ textAlign: "center", marginTop: "70px" }}>Oportunidades para sua carreira</h1>
          <img style={{ position: "relative", top: "10px", left: "300px" }} src={Arrow1} alt="Arrow1" />
          <img style={{ position: "relative", top: "-115px", left: "1200px" }} src={Arrow2} alt="Arrow2" />
          <hr style={{ width: "60%", margin: "200px auto" }}></hr>
          <Main />
          <Footer />
        </>
      )}
      {fixCV && (
        <div style={{ transition: 'bottom 1s ease', position: 'fixed', bottom: 0, width: '100%', zIndex: 999 }}>
          <CreateCvButton />
        </div>
      )}
    </div>
  );
}

export default App;
