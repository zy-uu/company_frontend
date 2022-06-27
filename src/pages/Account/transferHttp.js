import axios from 'axios';
const API_URL = 'http://localhost:8080/';

export const transferApi = (accountInfo) => {
    return axios.post(API_URL + 'app/account', accountInfo)
}
