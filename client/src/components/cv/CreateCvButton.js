import React from 'react'
import * as C from './styles'
import { useNavigate } from 'react-router-dom'

const Cv = () => {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate('/cvarea')
  }
  return (
    <C.Container>
      <C.BackgroundContainer>
        <C.Background>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </C.Background>
      </C.BackgroundContainer>
      <C.ButtonArea>
        <button onClick={handleNavigate}>Criar currículo</button>
      </C.ButtonArea>
    </C.Container>
  )
}

export default Cv
