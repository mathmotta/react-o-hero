import React from 'react';
import {Link} from 'react-router-dom';
import {MdArrowBack} from 'react-icons/md'

import './styles.css';

import logo from '../../assets/logo.svg';

export default function NewOccurrence(){
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
            <form>
                <input placeholder="Occurrence title"/>
                <textarea placeholder="Description"/>
                <input placeholder="Value"/>
                <div>
                    <button className="button" type="submit">Register</button>
                </div>
            </form>
        </div>
    </div>
    );
}