import React, {createRef} from 'react';
import { Formik } from 'formik'; // helps me to deal with forms

// <div class="form-group">... </div>
// <label for="">
// <label htmlFor="">
export default class Login extends React.Component {
    state = {
        email: '',
        password: ''
    }

    constructor(props) {
        super(props);
        this.emailInput = createRef();
        this.passwordInput = createRef();
    }

    handleLogin = (event) => {
        event.preventDefault();
        // alert(
        //     `when form is submitted: 
        //         ${this.emailInput.current.value}
        //         ${this.passwordInput.current.value}
        //     ` 
        // );

        alert(
            `when form is submitted: 
                ${this.state.email}
                ${this.state.password}
            ` 
        );
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    /**
     * @param wahtToUpdate {string} email | password
     */
    // handleChange = (event, whatToUpdate) => {
    //     this.setState({
    //         [whatToUpdate]: event.target.value
    //     })
    // }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleLogin} noValidate>
                <div className="form-group">
                    <label>Email</label>
                    <input  
                        value={this.state.email}
                        onChange={this.handleChange}
                        name="email"
                        minlength="5"                        
                        type="email" 
                        className="form-control" required />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input 
                        value={this.state.password}
                        ref={this.passwordInput}
                        onChange={this.handleChange}
                        name="password"
                        type="password" className="form-control" />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        )
    }
}