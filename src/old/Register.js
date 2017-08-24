import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
        };
    }
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar title="Register" />
                        <TextField onChange={this.handleChange} hintText="Enter your First Name" floatingLabelText="First Name" onChange ={(event, newValue) => this.setState({ first_name: newValue })}/>
                        <TextField hintText="Enter your Last Name" floatingLabelText="Last Name" onChange= {(event, newValue) => this.setState({ last_name: newValue })}/>
                        <TextField hintText="Enter your Email" type="email" floatingLabelText="Email" onChange ={(event, newValue) => this.setState({ email: newValue })} />
                        <TextField type= "password" hintText="Enter your Password" floatingLabelText="Password" onChange= {(event, newValue) => this.setState({ password: newValue })} />
                        <RaisedButton label="Submit" primary style={style} onClick={event => this.handleClick(event)} />
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

const style = {
    margin: 15,
};

export default Register;
