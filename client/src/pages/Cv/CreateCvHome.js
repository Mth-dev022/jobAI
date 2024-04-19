import React from 'react'
import { Container, Main } from './styles'

import { BiNotepad } from "react-icons/bi";
import { RiPencilRulerLine } from "react-icons/ri";
import { FaChartLine } from "react-icons/fa6";

import {Link} from 'react-router-dom'

const CreateCvHome = () => {
  return (
    <>
      <Container>
        <div className='header'>
          <div className='h-content'>
            <h1>Crie seu currículo em PDF!</h1>
            <p>O CURRÍCULO PREFERIDO PELOS RECRUTADORES</p>
            <Link to="/editcv">
               <button>CRIAR CURRÍCULO</button>
            </Link>
          </div>
        </div>
      </Container>

      <Main>
        <div className='main-content'>
          <h2>Um bom currículo abre portas para um bom emprego</h2>
          <p>Crie, estilize, publique e compartilhe seu currículo gratuitamente</p>
        </div>
        <div className='card-container'>
          <div className='card'>
            <BiNotepad className='icon'/>
            <h3 className='card-title'>Currículo online!</h3>
            <p className='card-sub-title'>Crie seu currículo totalmente online</p>
          </div>
          <div className='special-card'>
            <div className='blue-line'></div>
          <RiPencilRulerLine className='icon'/>
            <h3 className='card-title'>Simples e Rápido</h3>
            <p className='card-sub-title'>Diferente do que há na internet. Currículo fácil de criar e baixar.</p>
          </div>
          <div className='card'>
            <FaChartLine className='icon'/>
            <h3 className='card-title'>PDF para baixar e imprimir</h3>
            <p className='card-sub-title'>Complete seu currículo, baixe e imprima gratuitamente.</p>
          </div>
        </div>
      </Main>

    </>
  )
}

export default CreateCvHome