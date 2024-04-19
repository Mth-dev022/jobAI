import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 380px;
    background: linear-gradient(135deg, #0FABCC, #2C7ACF);

    .h-content {
        display:flex;
        flex-direction: column;
        gap: 20px;
        justify-content:center;
        align-items:center;
        padding-top: 70px;
    }
    h1 {
        font-size: 44px;
        color: white;
        font-weight: 600;
    }
    p {
        color: white;
        font-size: 18px;
        font-weight: 500;
    }
    button {
        padding: 20px 60px;
        margin-top: 30px;
        font-size: 15px;
        border-radius: 10px;
        border:none;
        font-weight: 600;
        background: linear-gradient(135deg, #f6f6f6, #D2D2D2);
        cursor: pointer;
    }
`
export const Main = styled.main`
    background-color: #F8FBFE;
    width: 100%;
    display:flex;
    justify-content:center;
    flex-direction: column;
    align-items:center;
    margin: 80px 0px 50px 0px;

    h2 {
        width: 800px;
        color: #535B7C;
        font-size: 35px;
        text-align: center;
        font-weight: 700;
    }
    p {
        color: #959BAF;
        font-weight: 600;
        font-size: 18px;
        text-align: center;
        margin-top: 30px;
    }
    .card-container {
        display:flex;
        justify-content:center;
        margin-top: 50px;
        gap: 30px;
    }
    .card {
        display:flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
        width: 350px;
        height: 300px;
    }
    .special-card {
        position:relative;
        width: 350px;
        height: 300px;
        display:flex;
        flex-direction: column;
        align-items:center;
        justify-content:center;
        background-color: #FFFFFF;
        border-radius: 10px;

        .blue-line {
            position:absolute;
            top: 0;
            width: 100%;
            height: 7px;
            background-color: #03B4C6;
        }
    }
    .card-title {
        color: #535B7C;
        font-size: 18px;
    }
    .card-sub-title {
        color: #959BAF;
        font-weight: 500;
        font-size: 16px;
        text-align: center;
        margin-top: 30px;
    }
    .icon {
        font-size: 40px;
        color: #536080;
        margin-bottom: 20px;
    }
`