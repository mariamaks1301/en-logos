import axios from "axios";

const instance = axios.create({
    baseURL: 'https://logos-en-4131cf99b384.herokuapp.com/api'
})

export default instance;