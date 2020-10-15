import axios from 'axios'

const api = axios.create({
    baseURL: 'https://us-central1-hand-talk-challenge.cloudfunctions.net/app'
})

export default api