import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import axios from 'axios';
import { Link } from  "react-router-dom";
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ReportIcon from '@material-ui/icons/Report';

import './HealthForm.css';

const StyledRating = withStyles({
    iconFilled: {
      color: '#ff6d75',
    },
    iconHover: {
      color: '#ff3d47',
    },
  })(Rating);
  
  const customIcons = {
    1: {
      icon: <SentimentVeryDissatisfiedIcon />,
      label: 'Very Dissatisfied',
    },
    2: {
      icon: <SentimentDissatisfiedIcon />,
      label: 'Dissatisfied',
    },
    3: {
      icon: <SentimentSatisfiedIcon />,
      label: 'Neutral',
    },
    4: {
      icon: <SentimentSatisfiedAltIcon />,
      label: 'Satisfied',
    },
    5: {
      icon: <SentimentVerySatisfiedIcon />,
      label: 'Very Satisfied',
    },
  };
  
  function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
  }
  
  IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
  };
  

class HealthForm extends Component {


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

    onSubmitForm = (e) => {
        e.preventDefault();

        
        const authData = {
            email: "abc",
            password: 'password',
            returnSecureToken: true
        }

        axios.post('http://localhost:5000/healthData', authData)
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        })
    }
    
    render() {

        return (
            <Aux classes='HealthFormContainer'>
                <div className="HealthForm">
                    <div className="Header-Login-HealthForm">    
                        <h1 className="Form-header">
                            Health Services
                        </h1>
                    </div>

                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <TextField
                                    fullWidth
                                    id="standard-error-helper-text"
                                    label="Name"
                                    defaultValue=""
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <TextField
                                    fullWidth
                                    multiline
                                    id="standard-error-helper-text"
                                    label="Health issue"
                                    defaultValue=""
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <TextField
                                    id="standard-number"
                                    label="Heart beat rate"
                                    type="number"
                                    fullWidth
                                />
                            </div>
                            
                            <div className="form-group col-md-6">
                                <TextField
                                    id="standard-number"
                                    label="Body temperature"
                                    type="number"
                                    fullWidth
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <Box component="fieldset" mb={3} borderColor="transparent">
                                <Typography component="legend">Service Availability</Typography>
                                <Rating
                                    name="customized-icons"
                                    defaultValue={2}
                                    getLabelText={value => customIcons[value].label}
                                    IconContainerComponent={IconContainer}
                                />
                            </Box>
                        </div>

                        <Button
                            variant="contained"
                            color="primary"
                            endIcon={<ReportIcon>Report</ReportIcon>}
                        >
                            Send
                        </Button>
                    </form>

                </div>
            </Aux>
        );
    }
}

export default HealthForm;