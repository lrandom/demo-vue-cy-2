import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL, //endpoint api
  timeout: 15000, //timeout request
})

axiosInstance.interceptors.request.use(
  config => {
    // Do something before request is sent
    if (localStorage.getItem('token')) {
      ;``
      config.headers['Authorization'] =
        `Bearer ${localStorage.getItem('token')}`
    }
    return config
  },
  error => {
    // Do something with request error
    return Promise.reject(error)
  },
)

axiosInstance.interceptors.response.use(
  response => {
    // Do something with response data
    if (response.data.status === 401 || response.data.status === 403) {
      alert('Ban vui long dang nhap')
      localStorage.removeItem('token')
      window.location.href = '/login'
    }
    return response.data
  },
  error => {
    // Do something with response error
    return Promise.reject(error)
  },
)

export default axiosInstance
