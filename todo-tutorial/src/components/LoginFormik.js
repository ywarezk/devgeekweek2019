import React, {createRef} from 'react';
import { Formik, Form, Field } from 'formik'; // helps me to deal with forms

// <div class="form-group">... </div>
// <label for="">
// <label htmlFor="">
export default class LoginFormik extends React.Component {
    handleLogin = (values) => {
        // alert(
        //     `when form is submitted: 
        //         ${this.emailInput.current.value}
        //         ${this.passwordInput.current.value}
        //     ` 
        // );

        // alert(
        //     `when form is submitted: 
        //         ${values.email}
        //         ${values.password}
        //     ` 
        // );

        this.props.history.push(`/dashboard/${values.email}/${values.password}`);
    }

    render() {
        return (
            <Formik
                initialValues={ {
                    email: 'yariv@nerdeez.com',
                    password: '12345'
                } }
                onSubmit={ this.handleLogin }
            >
                {
                    () => (
                        <Form>
                            <div className="form-group">
                                <label>Email</label>
                                <Field name="email" type="email" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <Field name="password" type="password" />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </Form>
                    )
                }
                
            </Formik>

            
        )
    }
}