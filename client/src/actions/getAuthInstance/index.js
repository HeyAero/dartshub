import API_ADDRESS from '../'

const getAuthInstance = axios.create({
    baseURL: `${API_ADDRESS}/api/`,
    timeout: 5000,
    headers: {
        'Authorization': "JWT " + localStorage.getItem('access_token'),
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
});

export default getAuthInstance;