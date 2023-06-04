import axios from 'axios'

const axiosInstans = axios.create({ baseURL: 'https://localhost:8000' })

axiosInstans.interceptors.request.use((req) => {
    return req
})

export default axiosInstans