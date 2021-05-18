import { API_ADDRESS } from '../globalVars'
import axios from 'axios'

const getAuthInstance = axios.create({
    baseURL: `${API_ADDRESS}`,
    timeout: 5000,
    headers: {
        'Authorization': "JWT " + localStorage.getItem('access_token'),
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
});

export default getAuthInstance;