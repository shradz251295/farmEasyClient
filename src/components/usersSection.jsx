import React, { Component } from 'react';
import farmer from '../assets/farmer.svg';
import customer from '../assets/users.svg';
import supplier from '../assets/supplier.svg';
import admin from '../assets/admin.svg';
import { Button, Card } from '@material-ui/core';
import Login from '../pages/farmer/Login';

class UserSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedUser: "",
            showLoginForm: false
        }
    }
    handleUserTypeSelection = (value) => {
        this.setState({  selectedUser: value, showLoginForm: true, })
        if(value==="Customer"){
            window.location.href="/customer-login"
        }else if(value==="Admin"){
            window.location.href="/admin-login"
        }else{
            window.location.href="/farmer-login"
        }
    }

    render() {
        return (
            <div className="user-type">
                <Card className="user-type-option" onClick={() => this.handleUserTypeSelection('Farmer')}>
                    <h6 className="user-title">Farmer</h6>
                    <img src={farmer} />
                    <p>Online market where you can sell fruits, vegetables, agri produce, etc..</p>
                    <span className="user-type-option-login-span">Login/Register as Farmer</span>
                    <Button className="login-btn">Click here</Button>
                </Card>
                <Card className="user-type-option" onClick={() => this.handleUserTypeSelection('Admin')}>
                    <h4 className="user-title">Admin</h4>
                    <img src={admin} />
                    <p>Administer the categories for the products and all website information's.</p>
                    <span className="user-type-option-login-span">Login/Register as Admin</span>
                    <Button className="login-btn">Click here</Button>
                </Card>
                  <Card className="user-type-option" onClick={() => this.handleUserTypeSelection('Customer')}>
                    <h4 className="user-title">Customer</h4>
                    <img src={customer} />
                    <p>Are you willing to purchase products from farmer's?</p>
                    <span className="user-type-option-login-span">Login/Register as Customer</span>
                    <Button className="login-btn">Click here</Button>
                </Card>
                <Card className="user-type-option" onClick={() => this.handleUserTypeSelection('Supplier')}>
                    <h4 className="user-title">Crop Prediction</h4>
                    <img src={supplier} />
                    <p>Prediction for crops,weather etc.</p>
                    {/* <span className="user-type-option-login-span">Login/Register as Supplier</span> */}
                    <Button className="login-btn">Click here</Button>
                </Card>
              

                {/* <Login 
                showLoginForm={this.state.showLoginForm}
                userType={this.state.selectedUser}
                /> */}
            </div>
        )
    }
}

export default UserSection;