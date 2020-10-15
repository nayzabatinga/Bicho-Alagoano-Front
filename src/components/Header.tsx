import React from 'react'

import '../styles/pages/header.css'
import { auth } from '../services/firebase'

function Header(){
    async function logout(){
        auth.signOut()
            .then(() => {
                
                window.location.replace('/')
                console.log(auth.currentUser)
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className="header">
            <h1>BICHO ALAGOANO</h1>
            <p>{auth.currentUser}</p>
            {(auth.currentUser === null) ? <button type="button" onClick={logout}>Logout</button>: '' }
        </div>
    );
}

export default Header