import axios from 'axios'

export const http = axios.create({
    baseURL: 'http://shop.back/api',
    headers: {
        "Content-type": "application/json"
    }
})