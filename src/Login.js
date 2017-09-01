import React, { Component } from 'react';
import validator from 'validator';

import Input from './form/Input';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {
                username: '',
                password: '',
            },
            errors: {
                username: false,
                password: false,
            },
            errorMessages: {
                username: 'Please enter your username',
                password: 'Please enter your password',
            },
        };
        this.validate = this.validate.bind(this);
        this.control = this.control.bind(this);
    }
    control(e) {
        const value = e.target.value;
        const name = e.target.name;

        this.setState({
            values: {
                ...this.state.values, // this takes all thats inside of this.state.values and puts it here - below you add the new data.
                [name]: value, // use [] to use a dynamic (variable) key
            },
        });
    }
    validate(e) {
        // const value = e.target.value;
        const name = e.target.name;
        switch (name) {
        case 'username':
            this.setState({
                errors: {
                    ...this.state.errors, // this takes all thats inside of this.state.values and puts it here - below you add the new data.
                    [name]: !validator.isAlpha(this.state.values.username), // use [] to use a dynamic (variable) key
                },
            });
            break;
        case 'password':
            this.setState({
                errors: {
                    ...this.state.errors, // this takes all thats inside of this.state.values and puts it here - below you add the new data.
                    [name]: !validator.isAlpha(this.state.values.password), // use [] to use a dynamic (variable) key
                },
            });
            break;
        default: break;
        }
    }
    render() {
        return (
            <div className="Form">
                {/* {<pre>
                    {JSON.stringify(this.state, null, 4)}
                </pre>} */}
                <Input
                    name="username"
                    type="text"
                    state={this.state}
                    control={this.control}
                    validate={this.validate}
                />
                <Input
                    name="password"
                    type="password"
                    state={this.state}
                    control={this.control}
                    validate={this.validate}
                />
            </div>
        );
    }
}
