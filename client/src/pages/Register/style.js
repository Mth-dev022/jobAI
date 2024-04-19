import styled from 'styled-components'

export const Container = styled.div`

    .detail {
        width: 120px;
        height: 100vh;
        background-color:#38D39F;
        position:absolute;
    }
    .right-side{
        display:flex;
        justify-content:center;
        align-items:center;
        height:100vh;
    }
    .card {
        display:flex;
        justify-content:center;
        align-items: center;
        flex-direction: column;
        gap: 20px;
        width: 600px;
        height: 700px;
        border-radius: 10px;
        background-color: #f5f5f5;
    }
    .welcome {
        font-size: 46px;
        color: #333333;
    }
    .register {
        margin-left: 290px;
        color:#37D09C;
        font-weight: 600;
    }
    .input {
        display:block;
        margin: 20px auto;
        padding-left: 30px;
        font-size: 20px;
        width: 350px;
        border-left: none;
        border-right: none;
        border-top:none;
        outline:none;
        background: none;
        border-color:#d9d9d9;
    }
    .btn {
        padding: 20px;
        width: 350px;
        margin: 40px;
        border:none;
        border-radius: 15px;
        background-color: #37D09C;
        color: white;
        font-weight: 600;
        font-size: 20px;

        &:hover {
            background-color:#33BE8F;
            cursor: pointer;
        }
    }
    .username {
        position:relative;
        top: 20px;
        left: 38px;
        color:#9C9F9F;
    }
    .password {
        position:relative;
        top: 20px;
        left: 38px;
        color:#9C9F9F;
    }
    .email {
        position:relative;
        top: 20px;
        left: 38px;
        color:#9C9F9F;
    }
    .icon {
        color:#d9d9d9;
        font-size: 20px;
    }
    .icon.focused {
        color: #38D39F;
        transition: color 0.3s ease;
    }
    .label {
    transition: transform 0.3s ease;
    margin-left: 10px;
    font-size: 18px;
    font-weight: 700;
    }
    .label.focused {
    position:absolute;
    transform: translateY(-20px);
    transition: transform 0.3s ease, color 0.3s ease;
    }
    .input.focused {
    border-color: #38D39F;
    transition: .8s ease;
}
    .error-message {
        text-align: center;
        color: red;
        margin-bottom: 20px;
        font-weight: 600;
    }
    .toast {
        position:relative;
        top: -330px;
        left: 200px;
    }
`