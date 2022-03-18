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

export function deleteState(data) {
    return axios.post('/admin/deleteState', data)
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


export function getStateDetails(data) {
    return axios.get('/admin/getState')
        .then((response) => {
            return response.data
        })
        .catch((err) => {
            return err.response.data
        })
}

export function editProfile(data) {
    console.log(data);
    return axios.post('/admin/editProfile', data)
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

export function changePassword(data) {
    return axios.post('/admin/changePassword', data)
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

export function addFarmerKit(data) {
    console.log(data)
    return axios.post('/admin/addFarmerKit', data)
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