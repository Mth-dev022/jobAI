import styled from 'styled-components'

export const Container = styled.div`
  width: 50%;
  margin: 0 auto;

  .input {
    display:block;
    width: 430px;
    padding: 10px;
    margin: 10px 0px 20px 0px;
    background-color: #EFF3F9;
    outline:none;
    border: none;
  }
  .input-area {
    display:flex;
  }
  .date-input {
    margin: 0 10px 20px 0px;
    background-color: #EFF3F9;
    border: none;
    padding: 15px;
  }
  .create-input {
    border: none;
    background-color:transparent;
    font-size: 15px;
    color: #0099FF;
    font-weight: 600;
    cursor: pointer;
  }
  h1 {
    margin: 30px 0px 20px 0px;
  }
  label {
    color: gray;
  }
  h2 {
    margin-top: 20px;
  }
  p {
    margin: 20px 0px 10px 0;
    color: gray;
  }
  textarea {
    width: 95%;
    height: 150px;
    font-size: 20px;
    padding: 10px;
  }
  .socials {
    display:block;
    width: 430px;
    padding: 10px;
    margin: 10px 0px 20px 0px;
    background-color: #EFF3F9;
    outline:none;
    border: none;
  }
  .generate-cv-area {
    display:flex;
    justify-content:center;
    margin: 20px 0px 20px 0px;
  }
  .generate-cv {
    background-color: #0099ff;
    padding: 15px 60px;
    border-radius: 10px;
    border: none;
    font-size: 15px;
    font-weight: 600;
    color: white;
    cursor: pointer;
    text-decoration: none;
  }
`