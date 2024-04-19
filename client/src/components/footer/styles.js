import styled from 'styled-components'

export const FooterContainer = styled.footer`

    width: 100%;
    background-color: #EFF0F1;
    height: 5rem;
    margin-top: 150px;

    .content {
        display:flex;
        justify-content:space-between;
        align-items: center;
        width: 60%;
        margin: 0 auto;
    }
    .informations {
        display:flex;
        justify-content:space-between;
        width: 60%;
        margin: 90px auto;
    }
    .title {
        color: #02a97f;
        margin-bottom: 20px;
        font-size: 14px;
        font-weight: 600;

        &:hover {
            text-decoration:underline;
        }
    }
    .list {
        list-style:none;
        display:flex;
        flex-direction: column;
        gap: 10px;
        color: #8C9BBC;
    }
    .list-items {
        cursor:pointer;

        &:hover {
            text-decoration:underline;
        }
    }
    .copyright {
        width: 60%;
        margin: 0 auto;
        padding: 50px;
    }
    .copyright-text {
        margin-top: 20px;
        color: #8C9BBC;
    }
    .author {
        text-decoration: none;
        color: #2A17EC;
        font-weight: 600;
        margin-left: 235px;
        padding-bottom: 100px;
    }
    .x {
        position:relative;
        top: -81px;
    }
    .y {
        position:relative;
        top: -87px;
    }
`