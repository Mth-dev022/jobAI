import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    width: 60%;
    margin: 0 auto;

    .left-side {
        display: flex;
        flex-direction: column;
        gap: 130px;
        width: 50%;
    }
    .card {
        display: flex;
        width:900px;
    }
    .circle {
        width: 50px;
        height: 50px;
        background-color: #D6F3EF;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .content-area {
        margin-left: 20px;
        width: 600px;
        font-size: 16px;
    }
    .title {
        font-size: 30px;
        font-weight: 600;
    }
    .text {
        padding-top: 20px;
        color: #5E6C80;
    }
    .icon {
        font-size: 25px;
        color: #02A97F;
    }
    .right-side {
        display:flex;
        align-items: center;
        flex-direction: column;
        width: 50%;
        margin-left: 200px;
    }
    .right-side-title {
        width: 80%;
        letter-spacing: 1px;
        margin-bottom: 70px;
        font-weight: 600;
        font-size:32px
    }
        `;

export const Companies = styled.div`
        width: 60%;
        margin: 0 auto;
        display:flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;

    .companies-container {
        display:flex;
        justify-content:center;
        gap: 100px;
        margin-top: 50px;
    }
    .title {
        text-align:center;
        margin-top: 200px;
    }
    .btn {
        display:flex;
        justify-content:center;
        align-items:center;
        background-color: #4B39FF;
        color: white;
        padding: 25px;
        width: 500px;
        margin-top: 50px;
        font-size: 18px;
        font-weight: 600;
        border:none;
        cursor: pointer;

        &:hover {
            background-color:#2A17EC;
        }
    }
`
