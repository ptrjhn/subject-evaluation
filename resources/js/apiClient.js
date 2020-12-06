import axios from 'axios';
import store from '../js/store';
import router from '../js/router';

let baseURL = 'http://localhost:8000/api'

let apiClient = axios.create({
  baseURL,
  Accept: 'application/json',

});

const token = localStorage.getItem('token');

if (token) {
  apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

apiClient.interceptors.response.use((response) => {
  return response
}, (error) => {
  if (error.response && error.response.status === 401) {
    localStorage.removeItem('token', null);

    store.state.auth.isLoggedIn = false;
    store.state.auth.token = null;

    
    router.push('/login');
    return Promise.reject(error)
  } else {
    return Promise.reject(error);
  }
});

export default apiClient
