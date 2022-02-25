import axios from 'axios';

export function createAccount(data) {
    return axios.post('/farmer/createAccount', {
        name: data.name,
        emailId: data.emailId,
        password: data.password,
        address: data.address
    })

}

export function getFarmerList() {
    return axios.get('/farmer/getFarmerList')
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