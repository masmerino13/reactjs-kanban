import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://tasknator-api.herokuapp.com'
})

export default instance
