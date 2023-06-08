import axios from 'axios'

// const axiosInstans = axios.create({ baseURL: 'https://localhost:8000' })
const axiosInstans = axios.create({ baseURL: 'https://storeproductsserver.onrender.com' })
axiosInstans.interceptors.request.use((req) => {
    return req
})

export default axiosInstans