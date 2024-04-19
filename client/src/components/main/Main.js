import * as C from './style'
import { Companies } from './style'

import Person from './../../assets/main/example.png'
import Line from './../../assets//main/line.webp'

import Companie1 from './../../assets/companies/companie1.png'
import Companie2 from './../../assets/companies/companie2.png'
import Companie3 from './../../assets/companies/companie3.png'
import Companie4 from './../../assets/companies/companie4.png'
import Companie5 from './../../assets/companies/companie5.png'
import Companie6 from './../../assets/companies/companie6.png'

import { FaCalendar } from "react-icons/fa";
import { FaUsersBetweenLines } from "react-icons/fa6";
import { TbWorldPlus } from "react-icons/tb";
import { FaArrowRightLong } from "react-icons/fa6";

const Main = () => {

    return (
        <>
            <C.Container>
                <div className='left-side'>
                    <div className='card'>
                        <div>
                            <div className='circle'>
                                <FaCalendar className='icon' />
                            </div>
                        </div>
                        <div className='content-area'>
                            <div>
                                <h2 className='title'>Plataforma de emprego gratuita </h2>
                                <p className='text'>Funciona assim: as empresas contratam nossa plataforma de emprego para conduzir processos seletivos. Quem paga pelo serviço são elas, então você não precisa se preocupar.</p>
                            </div>
                        </div>
                    </div>

                    <div className='card'>
                        <div>
                            <div className='circle'>
                                <TbWorldPlus className='icon' />
                            </div>
                        </div>
                        <div className='content-area'>
                            <h2 className='title'>Grandes empresas estão aqui </h2>
                            <p className='text'>Com a consulta, você terá acesso a uma extensa rede de mais de 2.000 empresas, proporcionando uma variedade incomparável de oportunidades, desde startups promissoras até grandes corporações estabelecidas, abrindo portas para um universo de possibilidades e recursos à sua disposição.</p>
                        </div>
                    </div>

                    <div className='card'>
                        <div>
                            <div className='circle'>
                                <FaUsersBetweenLines className='icon' />
                            </div>
                        </div>
                        <div className='content-area'>
                            <h2 className='title'>Vagas de emprego para todos os perfis </h2>
                            <p className='text'>Vagas em todo o Brasil, com oportunidades para diversas áreas. Além disso, não importa se é seu primeiro emprego ou se você já tem uma carreira sólida. Poderá achar vagas de trabalho para todos os níveis.</p>
                        </div>
                    </div>

                </div>
                <div className='right-side'>
                    <h1 className='right-side-title'>Estamos ao seu lado para apoiar sua jornada profissional</h1>
                    <img src={Person} />
                    <img src={Line} style={{ position: "relative", top: "-450px", right: "290px" }} />
                </div>
            </C.Container>

            <Companies>
                <h1 className='title'>As melhores empresas estão aqui oferecendo vagas de emprego</h1>
                <div className='companies-container'>
                    <div> <img src={Companie1} /> </div>
                    <div> <img src={Companie2} /></div>
                    <div> <img src={Companie3} /></div>
                    <div> <img src={Companie4} /></div>
                    <div> <img src={Companie5} /></div>
                    <div> <img src={Companie6} /></div>
                </div>
                <button className='btn'> Veja todas as empresas contratando <FaArrowRightLong style={{ marginLeft: "10px" }} /> </button>
            </Companies>
        </>
    )
}

export default Main
