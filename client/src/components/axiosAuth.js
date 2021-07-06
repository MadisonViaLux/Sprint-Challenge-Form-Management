import axios from 'axios'



export const axiosAuth = () => {
    const token = localStorage.getItem('token');
console.log(token)
    return axios.create({
        headers: {
            'Content-Type': 'application/json',
            'authorization':token
        },

        baseURL: 'http://localhost:5000/api'
    })
}