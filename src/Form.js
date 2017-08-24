import React, { Component } from 'react';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {
                firstName: '',
                surname: '',
            },
            errors: {
                firstName: false,
                surname: false,
            },
            errorMessages: {
                firstName: 'Please enter your first name',
                surname: 'Please enter your surname',
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

        console.log(this.state);
    }

    /*
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
     */
    validate(e) {
        const value = e.target.value;
        const name = e.target.name;

        switch (name) {
        case 'firstName':
            this.setState({
                errors: {
                    ...this.state.errors, // this takes all thats inside of this.state.values and puts it here - below you add the new data.
                    [name]: value.length === 0, // use [] to use a dynamic (variable) key
                },
            });
            break;
        case 'surname':
            this.setState({
                errors: {
                    ...this.state.errors, // this takes all thats inside of this.state.values and puts it here - below you add the new data.
                    [name]: value.length === 0, // use [] to use a dynamic (variable) key
                },
            });
            break;
        default: break;
        }
    }
    render() {
        return (
            <div className="Form">
                <pre>
                    {JSON.stringify(this.state, null, 4)}
                </pre>
                <input
                    name="firstName"
                    value={this.state.values.firstName}
                    onChange={this.control}
                    onBlur={this.validate}
                />
                {this.state.errors.firstName ? <p style={{ color: 'red' }}>{this.state.errorMessages.firstName}</p> : null}
                <input
                    name="surname"
                    value={this.state.values.surname}
                    onChange={this.control}
                    onBlur={this.validate}
                />
                {this.state.errors.surname ? <p style={{ color: 'red' }}>{this.state.errorMessages.surname}</p> : null}
            </div>
        );
    }
}
