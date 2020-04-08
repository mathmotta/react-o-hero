import React from 'react';
import { Link } from 'react-router-dom';
import {MdExitToApp} from 'react-icons/md';

import './styles.css';

import logo from '../../assets/logo.svg'
import heroImg from '../../assets/heroes.png'

export default function Logon(){
    return(
        <div className="logon-container">
            <section className="form">
                <img src={logo} alt="Be The Hero"/>

                <form>
                    <h1>Sign in</h1>
                    <input placeholder="Your ID" />
                    <button type="submit" className="button">Go!</button>

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