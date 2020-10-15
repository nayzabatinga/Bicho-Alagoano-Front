import React from 'react'

import checked from '../images/checked.png'
import '../styles/pages/finish.css'

function Finish(){
    return (    
        <div className="finish">
            <img src={checked} alt="checked"/>
            <h1>Obrigado por participar da seleção BICHO ALAGOANO</h1>
            <h2>Caso seu pet seja selecionado, retornaremos no número indicado por você. Fique atento(a)!</h2>
        </div>
    );
}

export default Finish