import React, { useState } from 'react'
import api from '../services/api'

import '../styles/pages/register-user.css'

function RegisterUser({ history, match }:any){
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    async function handleSubmit(e:any){
        e.preventDefault()
        const { role } = match.params

        await api.post('/registerUser', { email, password, role })
        .then(res => {
            console.log(res)
            alert('Usuário cadastrado com sucesso')
            history.push('/')
        })
        .catch(err => {
            alert('Não foi possível cadastrar o usuário, verifique se está apto para login e tente mais tarde')
        })
    }

    return (
        <div className="register-users">
            <form onSubmit={handleSubmit}>
                <h2>CADASTRE-SE</h2>
                <input 
                    type="email" 
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="Senha"
                    value={password}
                    onChange={ e => setPassword(e.target.value)}
                />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}

export default RegisterUser