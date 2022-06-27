import axios from 'axios';
const API_URL = 'http://localhost:8080/';

// editProfileInfoApi
export const editProfileInfoApi = (userInfo) => {
    return axios.post(API_URL + 'app/profile',userInfo);
}
//

//getProfileInfoApi 
export const getProfileInfoApi = (id) => {
    return axios.get(API_URL + `app/profile/${id}`)
}
//