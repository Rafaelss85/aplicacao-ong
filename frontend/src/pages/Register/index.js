import React, { useState } from 'react'
import logoImg from '../../assets/logo.svg'
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api'
import './styles.css'

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsApp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUF] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();
        const data = { name, email, whatsapp, city, uf };

        try {
            const response = await api.post('ongs', data);
            alert(`Seu ID de acesso: ${response.data.id}`);
            history.push('/');
        } catch (err) {
            alert(`Erro no Cadastro, tente novamente.`);
        }
    }
    /* Verificar preenchimento de campo
     * Mostrar melhor o ID
     * Manda um email com o cadastro e informações
     *   
     */

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontratem os casos da sua ONG.</p>

                    <Link  className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para o logon
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input value={name} onChange={e => setName(e.target.value)} placeholder="Nome da ONG" />
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="E-mail"/>
                    <input value={whatsapp} onChange={e => setWhatsApp(e.target.value)} placeholder="WhatsApp"/>
                    <div className="input-group">
                        <input value={city} onChange={e => setCity(e.target.value)} placeholder="Cidade"/>
                        <input value={uf} onChange={e => setUF(e.target.value)} placeholder="UF" style={{ width:80 }}/>
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}