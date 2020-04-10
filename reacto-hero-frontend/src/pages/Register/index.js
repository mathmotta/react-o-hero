import React, {useState} from 'react';
import { Link } from 'react-router-dom';
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

    function handleRegister(e){
        e.preventDefault();
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
                    <input placeholder="NGO Name"/>
                    <input type="email" placeholder="E-mail"/>
                    <input placeholder="Whatsapp"/>
                    <div className="input-group">
                        <input placeholder="City"/>
                        <input placeholder="Country" style={{width:180}}/>
                    </div>
                    <button className="button" type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}