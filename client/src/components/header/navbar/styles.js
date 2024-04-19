import styled from 'styled-components'

export const Container = styled.div`
    .input {
        width: 850px;
        padding: 20px;
        font-size: 20px;
        border: none;
        z-index: 0;
        position:relative;
    }
    .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 150px;
        height: 55px;
        padding: 15px 30px;
        background-color: #4B39FF;
        color: white;
        border: none;
        font-size: 18px;
        cursor: pointer;
        margin-left: 697px;
        margin-top: -58px;
        z-index:10;
        position:relative;

        &:hover {
            background-color: #2a17ec;
        }
    }
    .icon {
        font-size: 25px;
    }
    
`