import React, { useState, useEffect } from 'react'

import api from '../services/api'
import { storage } from '../services/firebase'

import '../styles/pages/list-pet.css'

function ListPet(){
    const [ pets, setPets ] = useState([])

    useEffect(() => {
        async function list(){
            await api
            .get('/listPet')
            .then(res => setPets(res.data))
            .catch(err => console.log(err.message))
        }
        list()
    }, [])
    
    function deletePet(id: string, filename: string){
        const confirmDelete = window.confirm('Deseja realmente excluir esse PET?')
        if(!confirmDelete) return 
        
        api
            .delete('/deletePet', { params: { id } })
            .then(() => {
                storage.ref().child(filename)
                    .delete()
                    .then(() => setPets(pets.filter((pet:any) => pet.id !== id)))
                    .catch(err => console.error(err))
            })
            .catch(err => console.log(err.message))
    }

    return(
        <div className="list-pets">
            <ul>
                {pets.map((pet:any) => (
                    <li key={pet.id}>
                        <img src={pet.avatar} alt={pet.name}/>
                        <footer>
                            <h3>{pet.name}</h3>
                            <p>{pet.owner} | {pet.phone}</p>
                        </footer>
                        <button type="button" onClick={() => deletePet(pet.id, pet.filename)}>EXCLUIR</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListPet