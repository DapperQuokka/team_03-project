import React, { Component } from 'react'
import GoogleBtn from './GoogleBtn';
import axios from 'axios';
import './style/LogIn.css';


export class LogIn extends Component {

    state = {
        id: '',
        accessToken: '',
        isLogined: false    
    }

    sendAccountData = () => {
        this.props.checkLogin(this.state);
    }

    setLoggedIn = (data) => {
        this.setState({
            id: data.id,
            accessToken: data.accessToken,
            isLogined: true
        });
        this.sendAccountData();
    }

    setLoggedOut = (data) => {
        this.setState({
            id: '',
            accessToken: '',
            isLogined: false
        });
        this.sendAccountData();
    }

    render() {
        if (!this.state.isLogined) {
            return (
                <div className="session">
                    <form className="log-in">
                        <h3>Welcome Back!</h3>
                        <p>We're glad to see you again! <br/><br/>
                        Please sign-in using one of the sign-in options below</p>
                        <h4>Sign-In Options</h4>
                        <GoogleBtn login={this.setLoggedIn.bind(this)} logout={this.setLoggedOut.bind(this)} className="google-btn"/>
                    </form>
                    <div className="right">
                    </div>
                </div>
            );
        } else {
            return (
                <div className="session">
                    <form className="log-in">
                        <h3>See You Soon!</h3>
                        <p>Thanks for visiting! <br/><br/>
                        Please log out using the sign in option you used before</p>
                        <h4>Sign-In Options</h4>
                        <GoogleBtn login={this.setLoggedIn.bind(this)} logout={this.setLoggedOut.bind(this)} className="google-btn"/>
                    </form>
                    <div className="right">
                    </div>
                </div>
            )
        }
    }
}

export default LogIn


/*
import React, { Component } from 'react';
import axios from 'axios';
import './style/AccountCreation.css';

export class LogIn extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            id: '',
            fullName: '',
            email: '',
            address: '',
            postalCode: '',
            password: '',
            restaurantID: '',
            passwordMatch: 'hidden',
            passwordMatchOwner: 'hidden'
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmitOwner = this.handleSubmitOwner.bind(this);
    }

    //Handles when fields in the input are changed
    handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value,
            passwordMatch: 'hidden',
            passwordMatchOwner: 'hidden'
        })
    }

    handleSubmit(event) {
        const self = this;
        event.preventDefault();
        axios.post('/customers/login', {
            email: this.state.email,
            password: this.state.password
        })
        .then(res => {
            self.setState({
                id: res.data.customer._id,
                fullName: res.data.customer.firstName + ' ' + res.data.customer.lastName,
                email: res.data.customer.email,
                address: res.data.customer.address,
                postalCode: res.data.customer.postalCode,
                passwordMatch: 'hidden'
            })
        })
        .catch(err => {
            self.setState({
                passwordMatch: 'visible'
            })
        })
    }

    //Handle when the "submit" button on the form is pressed
    handleSubmitOwner(event) {
        const self = this;
        event.preventDefault();
        axios.post('/owners/login', {
            email: this.state.email,
            password: this.state.password
        })
        .then(res => {
            self.setState({
                id: res.data.owner._id,
                restaurantID: res.data.owner.restaurantID,
                fullName: res.data.owner.firstName + ' ' + res.data.owner.lastName,
                email: res.data.owner.email,
                address: '',
                postalCode: '',
                passwordMatchOwner: 'hidden'
            })
        })
        .catch(err => {
            self.setState({
                passwordMatchOwner: 'visible'
            })
        })
    }

    render() {
        return (
            <div className="formContainerStyle">
                <form onSubmit={this.handleSubmit} className="formStyle">
                    <div className="containerStyle">
                        <h2 className="title">Login</h2>
                        <input
                            type="email"
                            name="email"
                            required={true}
                            className="inputStyle"
                            placeholder="Email"
                            onChange={this.handleChange}
                        />
                        <input
                            type="password"
                            name="password"
                            className="inputStyle"
                            required={true}
                            placeholder="Password"
                            onChange={this.handleChange}
                        />
                        <input
                            className="inputStyle"
                            type="submit"
                            value="Log In"
                        />
                        <p style={{color: 'red', visibility: `${this.state.passwordMatch}`}}>Email and password combination invalid</p>
                    </div>
                </form>
                <form onSubmit={this.handleSubmitOwner} className="formStyle">
                    <div className="containerStyle">
                        <h1 className="title">Restaurant Login</h1>
                        <input
                            type="email"
                            name="email"
                            required={true}
                            placeholder="Email"
                            className="inputStyle"
                            onChange={this.handleChange}
                        />
                        <input
                            type="password"
                            name="password"
                            required={true}
                            placeholder="Password"
                            className="inputStyle"
                            onChange={this.handleChange}
                        />
                        <input
                            className="inputStyle"
                            type="submit"
                            value="Log In"
                        />
                        <p style={{color: 'red', visibility: `${this.state.passwordMatchOwner}`}}>Email and password combination invalid</p>
                    </div>
                </form>
            </div>
        )
    }

} export default LogIn;

*/