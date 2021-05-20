import { API_ADDRESS } from '../globalVars'
import axios from 'axios'

const getAuthInstance = axios.create({
    baseURL: `${API_ADDRESS}`,
    timeout: 5000,
    headers: {
        'Authorization': "JWT " + localStorage.getItem('access_token'),
        'Content-Type': 'application/json',
        'accept': 'application/json',
    }
});

getAuthInstance.interceptors.response.use(
  response => response,
  error => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.response.statusText === "Unauthorized") {
      const refresh_token = localStorage.getItem('refresh_token');
      return getAuthInstance
        .post('/users/token/refresh/', {refresh: refresh_token})
        .then((response) => {
          localStorage.setItem('access_token', response.data.access);
          localStorage.setItem('refresh_token', response.data.refresh);

          getAuthInstance.defaults.headers['Authorization'] = "JWT " + response.data.access;
          originalRequest.headers['Authorization'] = "JWT " + response.data.access;

          return getAuthInstance(originalRequest);
        })
        .catch(error => {
          console.log(error);
        })
    }
    return Promise.reject(error);
  }
)

export default getAuthInstance;