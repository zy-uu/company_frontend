import axios from 'axios';
const API_URL = 'http://localhost:8080/';

export const loginApi = (user) => {
    return axios.post(API_URL + 'signin', user)
};

export const registerApi = (user) => {
    return axios.post(API_URL + 'signup', user)
};