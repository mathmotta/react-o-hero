import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {MdArrowBack} from 'react-icons/md'

import api from '../../services/api';
import './styles.css';

import logo from '../../assets/logo.svg';

export default function NewOccurrence(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const history = useHistory();

    const ngoId = localStorage.getItem('ngoId');

    async function handleRegister(e){
        e.preventDefault();

        const data = {title, description, value};

        try{
            await api.post('occurrences', data, {
                headers:{
                    Authorization: ngoId,
                }
            });

            history.push('/profile');
        }catch(err){
            alert('An error has occurred');
        }

    }

    return (
        <div className="new-occurrence-content">
        <div className="content">
            <section>
                <img src={logo} alt="Be The Hero"/>
                <h1>Register new occurrence</h1>
                <p>Describe your case with as many details as possible so a hero can pick it up!</p>

                <Link className="back-link" to="/profile">
                    <MdArrowBack size={16} color="#e02041" />
                    Voltar para home
                </Link>
            </section>
            <form onSubmit={handleRegister}>
                <input placeholder="Occurrence title" value={title} onChange={e => setTitle(e.target.value)}/>
                <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)}/>
                <input placeholder="Value" value={value} onChange={e => setValue(e.target.value)}/>
                <div>
                    <button className="button" type="submit">Register</button>
                </div>
            </form>
        </div>
    </div>
    );
}