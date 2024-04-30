import React, { useContext, useState } from 'react'
import axios from 'axios'
import * as C from './styles'
import { IoIosSearch } from "react-icons/io";

import { DataContext } from './../../../context/dataContext'

const Navbar = () => {

    const {setData, setLoading } = useContext(DataContext) || ''

    const [formValue, setFormValue] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormValue(e.target.value);
    }

    const handleClick = async () => {
       const options = {
              method: 'GET',
              url: 'https://jsearch.p.rapidapi.com/search',
              params: {
                query: 'Python developer in Texas, USA',
                page: '1',
                num_pages: '1'
              },
              headers: {
                'X-RapidAPI-Key': '0d4772f77emshbb607fed986a3c4p124dc8jsnad0674983b19',
                'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
              }
            };
        try {
            setLoading(true)
            const response = await axios.get('https://jsearch.p.rapidapi.com/search', options);
            setData(response.data)
            setLoading(false)
        } catch (e) {
            setError(e.message);
            console.error(error);
        }
    }
    
    return (
        <C.Container>
            <form onSubmit={(e) => e.preventDefault()}>
                <input className='input'
                    required
                    type='text'
                    placeholder='Digite um cargo, cidade ou estado'
                    value={formValue}
                    onChange={handleChange} />
                <button
                    className='btn'
                    type="submit"
                    onClick={handleClick}>
                    <div>
                        <IoIosSearch className='icon' />
                    </div>
                    <div>buscar</div>
                </button>
            </form>
        </C.Container>
    )
}

export default Navbar
