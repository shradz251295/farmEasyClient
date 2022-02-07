import axios from 'axios';

export function createAccount(data) {
    return axios.post('/farmer/createAccount', {
        name: data.name,
        emailId: data.emailId,
        password: data.password,
        address: data.address
    })

}