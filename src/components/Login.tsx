import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import '../styles/pages/login.css'
import { auth } from '../services/firebase'
import api from '../services/api'

function Login({ history }:any){
    const [email , setEmail ] =  useState('')
    const [password , setPassword ] =  useState('')

    function handleSubmit(e:any){
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password)
            .then((res:any) => {
                api
                .get('/roleUser', {
                    params: { id: res.user.uid }
                    })
                .then((res:any) => {
                    history.push((res.data.role === 'admin')? '/list/pet': '/register/pet')
                })
                .catch(() => alert('Não foi possível efetuar o login, tente novamente por favor.')) 
            })
            .catch(() => alert('Não foi possível efetuar o login, tente novamente por favor.'))
    }

    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <h2>LOGIN</h2>
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
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
                <Link to="/register/user/client">Cadastrar novo usuário</Link>
            </form>
        </div>
    );
}
// value={email} onChange={e => setEmail(e.target.value)}
// value={password} onChange={e => setPassword(e.target.value)}
export default Login