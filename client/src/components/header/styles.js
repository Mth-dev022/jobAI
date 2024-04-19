import styled from 'styled-components'
import './../../index.css'

export const Container = styled.div`

  font-family: "Epilogue", sans-serif;

    .h-area {
        display:flex;
        width: 100%;
        height: 525px;
        background-color:#00AB7E;
    }
    .left-side {
        width: 100%;
    }
    .h-log-area {
        width: 60%;
        margin: 0 auto;
        padding-top: 20px;
        display:flex;
        justify-content: space-between;
    }
    .logo {
        position: relative;
        top: -30px;
        width: 250px;
    }
    .line {
        width: 60%;
        position: relative;
        top: -60px;
        margin: 0 auto;
        color: white;
    }
    .btn-area {
        display:flex;
        gap: 50px;
    }
    .log-in-btn {
        padding: 15px 15px;
        display:flex;
        align-items:center;
        justify-content:center;
        color: white;
        background-color: transparent;
        border: 1px solid white;
        font-size: 14px;
        font-weight: 700;
        cursor:pointer;

        &:hover {
            background-color:white;
            color:black;
        }
    }
    .register-btn {
        border: none;
        padding: 15px 40px;
        background-color: #4B39FF;
        color: white;
        font-size: 14px;
        font-weight: 700;
        cursor:pointer;

        &:hover {
            background-color:#2a17ec;
        }
    }
    .h-search-area {
        width: 60%;
        margin: 0 auto;
        padding-top: 100px;
        color: white;
    }
    .h-text {
        font-size: 14px;
        font-weight: 500;
    }
    .h-title {
        padding-top: 15px;
        padding-bottom: 50px;
        font-weight: 700;
        font-size: 48px;
    }
    .h-card-area {
        display:flex;
        gap: 20px;
        padding-top: 20px;
    }
    .h-card {
        display:flex;
        justify-content:center;
        align-items:center;
        width: 230px;
        border: 1px solid white;
        padding: 10px;
        cursor:pointer;

        &:hover {
            background-color:white;
            color:black;
        }
    }
    .icon {
        font-size: 20px;
        margin-right: 10px;
    }
    .right-side {
        position:absolute;
        right: 100px;
        top: 80px;
    }
    .logged-user {
        display:flex;
        gap: 20px;
        
        .user-content {
            display:flex;
            justify-content:center;
            align-items:center;
            color: white;
        }
        .icon {
            color: white;
            margin-right: 5px;
            font-size: 30px;
        }
        .btn {
            padding: 10px;
            color: white;
            background-color:#4B39FF;
            border: none;
            border-radius: 10px;
            font-weight: 600;

            &:hover {
                background-color: #2A17EC;
            }
        }
    }
    
`