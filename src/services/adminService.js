import axios from 'axios';

export function login(data) {
    return axios.post('/admin/login', data)
        .then(response => {
            console.log(response)
            let res = response.data
            return res;
        })
        .catch(error => {
            console.log(error.response)
            let res = error.response.data
            return res;
        });
}

export function getAdminList() {
    return axios.get('/admin/getAdminList')
        .then(response => {
            console.log(response)
            let res = response.data
            return res;
        })
        .catch(error => {
            console.log(error.response)
            let res = error.response.data
            return res;
        });

}

export function addState(data) {
    return axios.post('/admin/addState', data)
        .then(response => {
            console.log(response)
            let res = response.data
            return res;
        })
        .catch(error => {
            console.log(error.response)
            let res = error.response.data
            return res;
        });
}