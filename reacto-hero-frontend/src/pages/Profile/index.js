import React from 'react';
import { Link } from 'react-router-dom'
import { MdPowerSettingsNew, MdDelete} from 'react-icons/md'

import './styles.css';

import logo from '../../assets/logo.svg'

export default function Profile(){
    return (
        <div className="profile-container">
            <header>
                <img src={logo} alt="Be The Hero"/>
                <span>Bem vindo, NGO</span>

                <Link className="button" to="/occurences/new">Register new occurence</Link>
                <button type="button">
                    <MdPowerSettingsNew size={18} color="#e02041" />
                </button>
            </header>

            <h1>Registered occurrences</h1>
            <ul>
                <li>
                    <strong>OCCURRENCE:</strong>
                    <p>Test</p>

                    <strong>DESCRIPTION:</strong>
                    <p>R$120,00</p>

                    <button type="button" style={{backgroundColor:'transparent'}} >
                        <MdDelete size = {20} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>OCCURRENCE:</strong>
                    <p>Test</p>

                    <strong>DESCRIPTION:</strong>
                    <p>R$120,00</p>

                    <button type="button" style={{backgroundColor:'transparent'}}>
                        <MdDelete size = {20} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>OCCURRENCE:</strong>
                    <p>Test</p>

                    <strong>DESCRIPTION:</strong>
                    <p>R$120,00</p>

                    <button type="button" style={{backgroundColor:'transparent'}}>
                        <MdDelete size = {20} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>OCCURRENCE:</strong>
                    <p>Test</p>

                    <strong>DESCRIPTION:</strong>
                    <p>R$120,00</p>

                    <button type="button" style={{backgroundColor:'transparent'}}>
                        <MdDelete size = {20} color="#a8a8b3" />
                    </button>
                </li>
            </ul>
        </div>
    )
}