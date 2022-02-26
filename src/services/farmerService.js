import axios from 'axios';

export function createAccount(data) {
    return axios.post('/farmer/createAccount', {
        name: data.name,
        emailId: data.username,
        password: data.password,
        address: data.address,
        country: data.country,
        state: data.state,
        city: data.city,
        pincode: data.pincode,
        mobile_number: data.mobileNo1,
        alternative_mobile_number: data.mobileNo2,
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