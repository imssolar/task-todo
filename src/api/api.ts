import axios from 'axios'

const baseURL = `${process.env.REACT_APP_BACKEND_PROD_URL}/api`

const api = axios.create({
	baseURL,
})

export default api
