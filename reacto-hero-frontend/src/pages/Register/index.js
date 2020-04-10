import React, {useState} from 'react';
import { Link, useHistory} from 'react-router-dom';
import {MdArrowBack} from 'react-icons/md';

import api from '../../services/api';
import './styles.css';

import logo from '../../assets/logo.svg';

export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            country,
        };

        try{
            const response = await api.post('ngos', data);

            alert(`Your access ID: ${response.data.id}`);

            history.push('/')
        }catch (err){
            alert(`Registration error!`);
        }

    }

    return (
        <div className="register-content">
            <div className="content">
                <section>
                    <img src={logo} alt="Be The Hero"/>
                    <h1>Register</h1>
                    <p>Register now, access and help people find your NGO occurrences.</p>

                    <Link className="back-link" to="/">
                        <MdArrowBack size={16} color="#e02041" />
                        Back
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input placeholder="NGO Name" value={name} onChange={e => setName(e.target.value)}/>
                    <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
                    <input placeholder="Whatsapp" value={whatsapp} onChange={e => setWhatsapp(e.target.value)}/>
                    <div className="input-group">
                        <input placeholder="City" value={city} onChange={e => setCity(e.target.value)}/>
                        <input placeholder="Country" style={{width:180}} value={country} onChange={e => setCountry(e.target.value)}/>
                    </div>
                    <button className="button" type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}