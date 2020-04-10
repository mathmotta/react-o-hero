import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom'
import { MdPowerSettingsNew, MdDelete} from 'react-icons/md'

import api from '../../services/api';
import './styles.css';

import logo from '../../assets/logo.svg'

export default function Profile(){
    const [occurrences, setOccurrences] = useState([]);
    const ngoName = localStorage.getItem('ngoName');
    const ngoId = localStorage.getItem('ngoId');
    const history = useHistory();

    useEffect(() => {
        api.get('ngos/query', {
            headers: {
                Authorization: ngoId,
            }
        }).then(response => {
            setOccurrences(response.data);
        })
    },[ngoId]);

    async function handleDelete(id){
        try{
            await api.delete(`occurrences/${id}`, {
                headers: {
                    Authorization: ngoId,
                }
            });

            setOccurrences(occurrences.filter(oc => oc.id !== id));
        }catch(err){
            alert('Error deleting occurrence.');
        }
    }

    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logo} alt="Be The Hero"/>
                <span>Welcome, {ngoName}</span>

                <Link className="button" to="/occurrences/new">Register new occurence</Link>
                <button type="button" onClick={handleLogout}>
                    <MdPowerSettingsNew size={18} color="#e02041" />
                </button>
            </header>

            <h1>Registered occurrences</h1>
            <ul>
                {occurrences.map(oc => (
                    <li key={oc.id}>
                        <strong>OCCURRENCE:</strong>
                        <p>{oc.title}</p>

                        <strong>DESCRIPTION:</strong>
                        <p>{oc.description}</p>

                        <strong>VALUE:</strong>
                        <p>{Intl.NumberFormat('pt-PT', {style: 'currency', currency: 'EUR'}).format(oc.value)}</p>

                        <button type="button" style={{backgroundColor:'transparent'}} onClick={() => handleDelete(oc.id)} >
                            <MdDelete size = {20} color="#a8a8b3" />
                        </button>
                    </li> 
                ))}
            </ul>
        </div>
    )
}