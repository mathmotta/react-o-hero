import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import {MdExitToApp} from 'react-icons/md';

import './styles.css';

import logo from '../../assets/logo.svg'
import heroImg from '../../assets/heroes.png'
import api from '../../services/api';

export default function Logon(){
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('sessions', {id});

            localStorage.setItem('ngoId', id);
            localStorage.setItem('ngoName', response.data.name);

            history.push('/profile');
        } catch(err){
            alert('Login failed');
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={logo} alt="Be The Hero"/>

                <form onSubmit={handleLogin}>
                    <h1>Sign in</h1>
                    <input placeholder="Your ID" value={id} onChange={e => setId(e.target.value)}/>
                    <button className="button" type="submit" >Go!</button>

                    <Link className="back-link" to="/register">
                        <MdExitToApp size={16} color="#e02041" />
                        Sign up
                    </Link>
                </form>
            </section>

            <img src={heroImg} alt="hero" />
        </div>
    );
}