import { FooterContainer } from "./styles"
import { FaFacebookSquare } from "react-icons/fa";
import Face from '../../assets/social-media-logos/facebook.png'
import Insta from '../../assets/social-media-logos/instagram.png'
import Linkedin from '../../assets/social-media-logos/linkedin.png'
import YT from '../../assets/social-media-logos/youtube.png'

import Logo from '../../assets/social-media-logos/footer-logo.png'

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <div className="content">
                    <div className="x">
                        <a style={{ textDecoration: "none" }} href="#header">
                            <img src={Logo} />
                        </a>
                    </div>
                    <div className="y">
                        <img style={{ marginRight: "85px", cursor: "pointer" }} src={Insta} width="45px" />
                        <img style={{ marginRight: "85px", cursor: "pointer" }} src={Linkedin} width="45px" />
                        <img style={{ cursor: "pointer" }} src={YT} width="45px" />
                    </div>
                </div>
                <div className="informations">
                    <div>
                        <h3 className="title">Institucional</h3>
                        <ul className="list">
                            <li className="list-items">Quem somos</li>
                            <li className="list-items">Gestão horizontal</li>
                            <li className="list-items">Nosso negócio</li>
                            <li className="list-items">Publicidade</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="title">Empresas</h3>
                        <ul className="list">
                            <li className="list-items">Vagas For Business</li>
                            <li className="list-items">Recrutamento e Seleção</li>
                            <li className="list-items">Diversidade e Inclusão</li>
                            <li className="list-items">Inteligência Artificial</li>
                            <li className="list-items">Novidades</li>
                            <li className="list-items">Blog</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="title">Canditatos</h3>
                        <ul className="list">
                            <li className="list-items">O que faz cada cargo?</li>
                            <li className="list-items">Pesquisa de vagas</li>
                            <li className="list-items">Vagas de tecnologia</li>
                            <li className="list-items">Empresas contratando</li>
                            <li className="list-items">Serviços gratuitos para candidatos</li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    <hr className="line"></hr>
                    <p className="copyright-text">Copyright © 2024 Vagas Tecnologia. Todos os direitos reservados. <a className="author" href="https://github.com/Mth-dev022"> Desenvolvido por Matheus Souza</a> </p>

                </div>
            </FooterContainer>
        </>
    )
}

export default Footer