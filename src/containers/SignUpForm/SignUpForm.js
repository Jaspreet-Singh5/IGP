import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import axios from 'axios';

import './SignUpForm.css';

class SignUpForm extends Component {
    
    state= {
        controls: {
            email: null,
            password: null
        }
    };

    inputChangedHandler = ( event, controlName ) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: event.target.value
        }
        this.setState( { controls: updatedControls } );
    }

    loginHandler = (event, email, password) => {

        event.preventDefault();

        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }

        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCoDJsI4tcxcNolamcD3O_35vMN7tR1pt8', authData)
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        })
    }
    
    render() {

        return (
            <Aux>
                <div className="SignUpForm">
                    <div className="Header-SignUp">    
                        <h1 className="Form-header">
                            Sign up
                        </h1>
                    </div>

                    <form className="Form">

                        <div className="Form-section">
                            
                            <div className="Form-element">
                                <label htmlFor="email" className="Form-label">Email</label>
                                
                                <div className="Form-input">
                                    <input 
                                        name="email" 
                                        type="email" 
                                        className="Form-text" 
                                        placeholder="example@mail.com"
                                        onKeyPress={( event ) => this.inputChangedHandler( event, 'email' )} >
                                    </input>
                                    <span className="FormInputIcon FormInputIcon-2"></span>
                                </div>
                            </div>

                            <div className="Form-element">
                                <label htmlFor="password" className="Form-label">Password</label>
                                
                                <div className="Form-input">
                                    <input 
                                        name="password" 
                                        type="password" 
                                        className="Form-text" 
                                        placeholder="12345678"
                                        onKeyPress={( event ) => this.inputChangedHandler( event, 'password' )} >
                                    </input>
                                    <span className="FormInputIcon FormInputIcon-3"></span>
                                </div>
                            </div>

                        </div>

                        
                        <button className="GoogleSignUp SignUpButton" onClick={(event) => this.loginHandler(event, this.state.controls.email, this.state.controls.password)}>
                            <div>Join a smart community</div>
                        </button>
                    </form>

                </div>
            </Aux>
        );
    }
}

export default SignUpForm;