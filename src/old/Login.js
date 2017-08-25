import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            usernameError: '',
            password: '',
        };
        this.validate = this.validate.bind(this);
    }

    handleClick(event) {
        alert('values');
    }


    validate(e) {
        const name = e.target.name;
        const value = e.target.value;
        if (value.length) {
            this.setState({
                usernameError: '',
            });
        } else {
            this.setState({
                usernameError: 'Enter a bloody name',
            });
        }
    }


    render() {
        const style = {
            margin: 15,
        };
        return (
            <div>
                <div>
                    <AppBar title="Login" />
                    <TextField
                        hintText="Enter your Username"
                        floatingLabelText="Username"
                        name="username"
                        onBlur={this.validate}
                        onChange={(event, newValue) => this.setState({ username: newValue })}
                    />
                    {this.state.usernameError.length ?
                        <p>{this.state.usernameError}</p>
                        : null
                    }
                    <br />
                    <TextField
                        type="password"
                        hintText="Enter your Password"
                        floatingLabelText="Password"
                        onBlur={this.validate}
                        onChange={(event, newValue) => this.setState({ password: newValue })}
                    />
                    <br />
                    <RaisedButton label="Submit" primary style={style} onClick={event => this.handleClick(event)} />
                </div>
            </div>
        );
    }
}

export default Login;
