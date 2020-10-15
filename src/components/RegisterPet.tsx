import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import api from '../services/api'
import { storage } from '../services/firebase'

import '../styles/pages/register-pet.css'

function RegisterPet({ history }:any){
    const [name, setName] = useState('')
    const [owner, setOwner] = useState('')
    const [phone, setPhone] = useState('')
    const [avatar, setAvatar] = useState('')

    function savePet(avatar: File) {
        const file: File = avatar;
        const ext: string = file.type.split('/')[1];
        const filename: string = `${uuidv4()}.${ext}`;

        return saveOnStorage(avatar as any, filename)
            .then(file => getDownloadURL(file))
            .then(url => saveOnFirestore(filename, url))
    }

    function saveOnStorage(file: File, filename: string) {
        return storage.ref().child(filename).put(file)
    }

    function getDownloadURL(file: any) {
        return file.ref.getDownloadURL()
    }

    function saveOnFirestore(filename: string, avatar: string) {
        return api.post('/registerPet', { name, owner, phone, avatar, filename })
    }
    
    async function handleSubmit(e: any){
        e.preventDefault()

        savePet(avatar as any)
            .then(() => history.push('/finish'))
            .catch(err => console.error(err))
    }

    return (
        <div className="register-pets">
            <form onSubmit={handleSubmit}>
                <h2>CADASTRE SEU PET</h2>
                <input
                    placeholder="Nome do pet"
                    value={name}
                    onChange={(e:any) => setName(e.target.value)}
                />
                <input
                    placeholder="Seu nome"
                    value={owner}
                    onChange={(e:any) => setOwner(e.target.value)}
                />
                <input
                    placeholder="Telefone para contato"
                    value={phone}
                    onChange={(e:any) => setPhone(e.target.value)}
                />
                <label htmlFor="choosefile">Agora, uma foto do seu pet</label>
                <input
                    id="choosefile"
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    onChange={(e:any) => {
                        // console.log(e.target.files[0])
                        setAvatar(e.target.files[0])
                    }}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default RegisterPet