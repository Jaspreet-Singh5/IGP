import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import axios from 'axios';
import GoogleLogin from 'react-google-login';
import { Link } from  "react-router-dom";
import PropTypes from 'prop-types';

import './LoginForm.css';

class LoginForm extends Component {
    static contextTypes = {
        router: PropTypes.object
      }
    
    
    state= {
        controls: {
            email: null,
            password: null
        }
    };

    
    redirectToTarget = () => {
        this.context.router.history.push(`/`)
    }

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
        
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCoDJsI4tcxcNolamcD3O_35vMN7tR1pt8', authData)
        .then(response => {
            console.log(response);
            this.props.history.replace('/');
        })
        .catch(err => {
            console.log(err);
        })
    }
    
    render() {

        const responseGoogle = (response) => {
            console.log(response);

            if (response.hasOwnProperty('profileObj')) {
                this.props.history.replace('/');
            }
          }
        
        return (
            <Aux>
                <div className="LoginForm">
                    <div className="Header-Login">    
                        <h1 className="Form-header">
                            Log in
                        </h1>
                    </div>

                    <form className="Form">

                        <GoogleLogin
                            clientId="889667932686-us5sukpjgfan9t1ckvi5jucfntadkn27.apps.googleusercontent.com"
                            render={renderProps => (
                            <button 
                                onClick={renderProps.onClick} 
                                disabled={renderProps.disabled}
                                id='GoogleLoginMain'
                                className="GoogleLogin"
                            >
                                <div className="GoogleLoginIcon"></div>
                                <div>Log in with Google</div>
                            </button>
                            )}
                            buttonText="Login"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />

                        <div className="LoginOption">
                            Or
                        </div>

                        <div className="Form-section">
                            
                            <div className="Form-element">
                                <label htmlFor="email" className="Form-label">Email</label>
                                
                                <div className="Form-input">
                                    <input 
                                        name="email" 
                                        type="email" 
                                        className="Form-text" 
                                        placeholder="example@mail.com"
                                        onChange={( event ) => this.inputChangedHandler( event, 'email' )} >
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
                                        onChange={( event ) => this.inputChangedHandler( event, 'password' )} >
                                    </input>
                                    <span className="FormInputIcon FormInputIcon-3"></span>
                                </div>
                            </div>

                        </div>

                        <button className="GoogleLogin LoginButton" onClick={(event) => this.loginHandler(event, this.state.controls.email, this.state.controls.password)}>
                            <div>Continue to be part of a smart change</div>
                        </button>
                    </form>

                </div>
            </Aux>
        );
    }
}

export default LoginForm;