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

export function editProfile(data) {
    console.log(data);

    return axios.post('/farmer/editProfile', {
        name: data.name,
        emailId: data.username,
        address: data.address,
        country: data.country,
        state: data.state,
        city: data.city,
        pincode: data.pincode,
        mobile_number: data.mobileNo1,
        alternative_mobile_number: data.mobileNo2,
    })

}

export function changePassword(data) {
    return axios.post('/farmer/changePassword', data)
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


export function login(data) {
    return axios.post('/farmer/login', data)
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

export function addProductDetails(data) {
    console.log(data)
    return axios.post('/farmer/sellProduct', data)
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


export function getProductList() {
    return axios.get('/farmer/getProductList')
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

export async function displayRazorPay(amount,options) {
    axios.post('http://localhost:3001/placeOrder', { amount: amount })
    .then(res => {
        options.order_id = res.data.id;
        options.amount = res.data.amount;
        console.log(options)
        var rzp1 = new window.Razorpay(options);
        rzp1.open();
    })
    .catch(e => console.log(e))
}