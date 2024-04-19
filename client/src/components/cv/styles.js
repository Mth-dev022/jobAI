import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 70px;
    position: relative;
`

export const BackgroundContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    background: #4b39ff;
    overflow: hidden;
    z-index: 0;
`

export const ButtonArea = styled.div`
    position: relative;
    z-index: 10;
    button {
      position:absolute;
      top: 10px;
      right: 0;
      padding: 16px 150px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      font-size: 20px;
      background: transparent;
      color: white;
      cursor: pointer;
      border: none;
    }
`

const animate = keyframes`
    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }
    100%{
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }
`
export const Background = styled.ul`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    background: #4b39ff;
    overflow: hidden;
    z-index: 0;

    li {
        position: absolute;
        display: block;
        list-style: none;
        width: 20px;
        height: 20px;
        background: rgba(255, 255, 255, 0.2);
        animation: ${animate} 18s linear infinite;
    }

     li:nth-child(0) {
    left: 13%;
    width: 104px;
    height: 104px;
    bottom: -104px;
    animation-delay: 1s;
}
 li:nth-child(1) {
    left: 16%;
    width: 111px;
    height: 111px;
    bottom: -111px;
    animation-delay: 4s;
}
 li:nth-child(2) {
    left: 21%;
    width: 109px;
    height: 109px;
    bottom: -109px;
    animation-delay: 7s;
}
 li:nth-child(3) {
    left: 60%;
    width: 110px;
    height: 110px;
    bottom: -110px;
    animation-delay: 7s;
}
 li:nth-child(4) {
    left: 6%;
    width: 107px;
    height: 107px;
    bottom: -107px;
    animation-delay: 18s;
}
 li:nth-child(5) {
    left: 82%;
    width: 105px;
    height: 105px;
    bottom: -105px;
    animation-delay: 13s;
}
 li:nth-child(6) {
    left: 23%;
    width: 101px;
    height: 101px;
    bottom: -101px;
    animation-delay: 23s;
}
 li:nth-child(7) {
    left: 69%;
    width: 107px;
    height: 107px;
    bottom: -107px;
    animation-delay: 24s;
}
 li:nth-child(8) {
    left: 33%;
    width: 102px;
    height: 102px;
    bottom: -102px;
    animation-delay: 36s;
}
 li:nth-child(9) {
    left: 79%;
    width: 110px;
    height: 110px;
    bottom: -110px;
    animation-delay: 17s;
}
 li:nth-child(10) {
    left: 60%;
    width: 100px;
    height: 100px;
    bottom: -100px;
    animation-delay: 38s;
}
 li:nth-child(11) {
    left: 82%;
    width: 100px;
    height: 100px;
    bottom: -100px;
    animation-delay: 9s;
}
 li:nth-child(12) {
    left: 42%;
    width: 106px;
    height: 106px;
    bottom: -106px;
    animation-delay: 27s;
}
 li:nth-child(13) {
    left: 10%;
    width: 110px;
    height: 110px;
    bottom: -110px;
    animation-delay: 54s;
}
 li:nth-child(14) {
    left: 22%;
    width: 102px;
    height: 102px;
    bottom: -102px;
    animation-delay: 34s;
}
 li:nth-child(15) {
    left: 51%;
    width: 100px;
    height: 100px;
    bottom: -100px;
    animation-delay: 24s;
}
 li:nth-child(16) {
    left: 56%;
    width: 100px;
    height: 100px;
    bottom: -100px;
    animation-delay: 7s;
}
 li:nth-child(17) {
    left: 23%;
    width: 109px;
    height: 109px;
    bottom: -109px;
    animation-delay: 2s;
}
 li:nth-child(18) {
    left: 56%;
    width: 100px;
    height: 100px;
    bottom: -100px;
    animation-delay: 11s;
}
 li:nth-child(19) {
    left: 31%;
    width: 105px;
    height: 105px;
    bottom: -105px;
    animation-delay: 48s;
}
 li:nth-child(20) {
    left: 21%;
    width: 107px;
    height: 107px;
    bottom: -107px;
    animation-delay: 50s;
}
 li:nth-child(21) {
    left: 15%;
    width: 102px;
    height: 102px;
    bottom: -102px;
    animation-delay: 9s;
}
 li:nth-child(22) {
    left: 10%;
    width: 105px;
    height: 105px;
    bottom: -105px;
    animation-delay: 108s;
}
 li:nth-child(23) {
    left: 3%;
    width: 103px;
    height: 103px;
    bottom: -103px;
    animation-delay: 64s;
}
 li:nth-child(24) {
    left: 81%;
    width: 103px;
    height: 103px;
    bottom: -103px;
    animation-delay: 51s;
}
 li:nth-child(25) {
    left: 89%;
    width: 103px;
    height: 103px;
    bottom: -103px;
    animation-delay: 125s;
}
 li:nth-child(26) {
    left: 74%;
    width: 105px;
    height: 105px;
    bottom: -105px;
    animation-delay: 56s;
}
 li:nth-child(27) {
    left: 41%;
    width: 107px;
    height: 107px;
    bottom: -107px;
    animation-delay: 44s;
}
 li:nth-child(28) {
    left: 53%;
    width: 101px;
    height: 101px;
    bottom: -101px;
    animation-delay: 137s;
 }
`
