import React, { useState} from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Link, PDFDownloadLink} from '@react-pdf/renderer';

import * as C from './styles';

import User from '../../../assets/Generated-CV/user.png'
import SuitCase from '../../../assets/Generated-CV/suitcase.png'

const GenerateCV = () => {
  const [title, setTitle] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [resume, setResume] = useState('');

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleCountry = (e) => {
    setCountry(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleProfessionalResume = (e) => {
    setResume(e.target.value);
  };

  const [historicoProfissional, setHistoricoProfissional] = useState([
    {
      companyName: '',
      initDate: '',
      endDate: '',
      resume: ''
    }])
  const addProfessionalHistoryField = () => {
    setHistoricoProfissional([...historicoProfissional, { companyName: '', initDate: '', endDate: '', resume: '' }]);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const list = [...historicoProfissional];
    list[index][name] = value;
    setHistoricoProfissional(list);
  };

  const [socialMedia, setSocialMedia] = useState('');
  const [linkSocialMedia, setLinkSocialMedia] = useState('');
  const [socialMediaList, setSocialMediaList] = useState([]);

  const handleSocialMedia = (e) => {
    setSocialMedia(e.target.value);
  };

  const handleLinkSocialMedia = (e) => {
    setLinkSocialMedia(e.target.value);
  };

  const handleAddInput = () => {
    const newInput = { socialMedia: socialMedia, linkSocialMedia: linkSocialMedia };
    setSocialMediaList([...socialMediaList, newInput]);
    setSocialMedia('');
    setLinkSocialMedia('');
  };

  const [skills, setSkills] = useState(['', '', '']);
  const handleSkill = (index, value) => {
    const newSkills = [...skills];
    newSkills[index] = value;
    setSkills(newSkills);
  };
  const addSkillsField = () => {
    setSkills([...skills, '']);
  };

  const [hobbies, setHobbies] = useState()
  const handleHobbies = (e) => {
    setHobbies(e.target.value)
  }

  const styles = StyleSheet.create({
    page: {
      display: 'flex',
      flexDirection: "column",
      padding: 20,
    },
    section: {
      marginBottom: 10
    },
    name: {
      fontSize: '24px',
      color: "#3D3F41"
    },
    title: {
      fontSize: "10px",
      marginTop: 5
    },
    icon: {
      width: 9,
      height: 9
    },
    desc: {
      fontSize: "13px"
    },
    value: {
      fontSize: "11px",
      marginLeft: 9,
      marginTop: 5,
      color: "#808080"
    },
    text: {
      marginLeft: 9,
      marginTop: 5,
      fontSize: "11px"
    },
    link: {
      color: "#0099FF",
      fontSize: "13px",
      marginTop: 10,
      marginRight: 9
    },
    skills: {
      marginTop: 5,
      marginLeft: 9,
      fontSize: 11
    }
  });

  const MyDocument = () => {

    return (
      <Document>
        <Page size="A4" style={styles.page}>

          {/* name and title */}
          <View style={styles.section}>
            <Text style={styles.name}>{firstName} {lastName}</Text>
            <Text style={styles.title}>{title}</Text>
          </View>

          {/* professional resume */}
          <View style={styles.section}>
            <Text>
              <Image src={User} style={styles.icon} />
              <Text style={styles.desc}> Profile </Text>
            </Text>
            <View style={styles.value}>
              <Text> {resume} </Text>
            </View>
          </View>

          {/* employment history */}
          <View style={styles.section}>
            <Text>
              <Image src={SuitCase} style={styles.icon} />
              <Text style={styles.desc}> Employment History </Text>
            </Text>
            <View>
              <Text style={styles.text}> {historicoProfissional[0].companyName} </Text>
              <Text style={styles.value}> {historicoProfissional[0].initDate} - {historicoProfissional[0].endDate} </Text>
              <Text style={styles.text}> {historicoProfissional[0].resume} </Text>
            </View>
          </View>

          {/* Details */}
          <View style={styles.section}>
            <Text>Details</Text>
            <Text style={styles.value}>{city}</Text>
            <Text style={styles.value}>{country}</Text>
            <Text style={styles.value}>{email}</Text>
          </View>

          {/* Links */}
          <View style={styles.section}>
            <Text>Links</Text>
            <Link src={linkSocialMedia}>
              <Text style={styles.link}>{socialMedia}</Text>
            </Link>
          </View>

          {/* skills */}
          <View style={styles.section}>
            <Text>Skills</Text>
          </View>
          <View style={{ paddingRight: "9px" }}>
            {skills.map((skill, index) => (
              <View key={index}>
                <Text style={styles.value}>{skill}</Text>
              </View>
            ))}
          </View>

          {/* Hobbies */}
          <View style={styles.section}>
            <Text style={{ marginTop: "20px" }}> Hobbies </Text>
            <Text style={styles.value}> {hobbies} </Text>
          </View>

        </Page>
      </Document>
    )
  }

  return (
    <C.Container>
      <h1>Informações pessoais</h1>
      <form>
        <label> Título
          <input placeholder='Desenvolvedor Front-End' className='input' type='text' value={title} onChange={handleTitle} />
        </label>

        <div className='input-area'>
          <div>
            <label> Primeiro nome
              <input required className='input' placeholder='João' type='text' value={firstName} onChange={handleFirstName} style={{ marginRight: "30px" }} />
            </label>
          </div>
          <div>
            <label> Último nome
              <input required className='input' placeholder='Silva' type='text' value={lastName} onChange={handleLastName} />
            </label>
          </div>
        </div>

        <div className='input-area'>
          <div>
            <label> Email
              <input required className='input' placeholder='joao@email.com' type='text' value={email} onChange={handleEmail} style={{ marginRight: "30px" }} />
            </label>
          </div>
          <div>
            <label> Telefone
              <input required className='input' placeholder='11 9912345678' type='text' value={phone} onChange={handlePhone} />
            </label>
          </div>
        </div>

        <div className='input-area'>
          <div>
            <label> País
              <input required className='input' placeholder='Brasil' type='text' value={country} onChange={handleCountry} style={{ marginRight: "30px" }} />
            </label>
          </div>
          <div>
            <label> Cidade
              <input required className='input' placeholder='Rio de Janeiro' type='text' value={city} onChange={handleCity} />
            </label>
          </div>
        </div>

        <div>
          <h2>Resumo profissional</h2>
          <p>Escreva de 2 a 4 frases curtas e energéticas para interessar o leitor! Mencione sua função, experiência e, o mais importante, suas maiores conquistas, melhores qualidades e habilidades.</p>
          <textarea required className='text-area' placeholder='Escreva um breve resumo sobre você' value={resume} onChange={handleProfessionalResume} />
        </div>

        <div>
          <h2>Portfólio & Redes Sociais</h2>
          <p>
            Você pode adicionar links para sites que deseja que os gerentes de contratação vejam! Talvez seja um link para o seu Portfólio, perfil do LinkedIn ou site pessoal.
          </p>

          <div style={{ display: 'flex' }}>
            <input
              className='socials'
              style={{ marginRight: '20px' }}
              placeholder='LinkedIn'
              type='text'
              value={socialMedia}
              onChange={handleSocialMedia}
              required
            />
            <input
              className='socials'
              placeholder='Inserir link'
              type='text'
              value={linkSocialMedia}
              onChange={handleLinkSocialMedia}
              required
            />
          </div>

          {socialMediaList.map((item, index) => (
            <div style={{ display: "flex" }} key={index}>
              <input required placeholder='Github' style={{ marginRight: "20px" }} className="socials" value={item.socialMedia} readOnly />
              <input required placeholder='Inserir link' className="socials" value={item.linkSocialMedia} readOnly />
            </div>
          ))}
        </div>

        <button type='button' onClick={handleAddInput} className='create-input'>
          Adicionar campo
        </button>
        <div>

          <h2>Histórico profissional</h2>
          <p>Mostre suas experiências relevantes (últimos 10 anos). Use marcadores para anotar suas conquistas se possível - Use números/fatos (Alcançado X, medido por Y, fazendo Z)</p>

          {historicoProfissional.map((historico, index) => (
            <>
              <div key={index}>
                <input
                  name="companyName"
                  placeholder="Nome da empresa"
                  type="text"
                  className='socials'
                  value={historico.companyName}
                  onChange={e => handleInputChange(index, e)}
                  required
                />
                <div style={{ display: "flex" }}>
                  <input
                    max="2024"
                    className='date-input'
                    name="initDate"
                    placeholder="Data de início"
                    type="date"
                    value={historico.initDate}
                    onChange={e => handleInputChange(index, e)}
                    required
                  />
                  <input
                    className='date-input'
                    name="endDate"
                    placeholder="Data de término"
                    type="date"
                    value={historico.endDate}
                    onChange={e => handleInputChange(index, e)}
                    required
                  />
                </div>
                <textarea
                  name="resume"
                  placeholder="Descreva um breve resumo sobre sua atuação na empresa"
                  type="text"
                  value={historico.resume}
                  onChange={e => handleInputChange(index, e)}
                  required
                />
              </div>
            </>
          ))}
          <button type="button" onClick={addProfessionalHistoryField} className='create-input'>
            Adicionar campo
          </button>
        </div>

        <div>
          <h2>Habilidades</h2>
          <p>
            Escolha habilidades importantes que mostram que você se enquadra na posição. Certifique-se de que correspondem com as principais habilidades mencionadas na lista de empregos (especialmente ao se inscrever por meio de um sistema online)
          </p>
          {skills.map((skill, index) => (
            <input
              key={index}
              placeholder={`Habilidade ${index + 1}`}
              type="text"
              className='socials'
              value={skill}
              onChange={(e) => handleSkill(index, e.target.value)}
              required
            />
          ))}
          <button type="button" onClick={addSkillsField} className='create-input'>
            Adicionar campo
          </button>
        </div>

        <div>
          <h2>Hobbies</h2>
          <p>Do que você gosta?</p>
          <textarea placeholder='Diga coisas que gosta de fazer no tempo livre'
            value={hobbies}
            onChange={handleHobbies}
            required />
        </div>

        <div className='generate-cv-area'>
          <PDFDownloadLink className="generate-cv"
            document={<MyDocument />} fileName="curriculo.pdf">
            Gerar curriculo
          </PDFDownloadLink>
        </div>

      </form>
    </C.Container>
  );
};

export default GenerateCV;
