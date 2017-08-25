import React, { Component } from 'react';
import validator from 'validator';

import Input from './form/Input';
import Radio from './form/Radio';
import Select from './form/Select';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {
                firstname: '',
                surname: '',
                email: '',
                number: '',
                termsConditions: 'no',
                options: '',

            },
            errors: {
                firstname: false,
                surname: false,
                email: false,
                number: false,
                options: false,
            },
            errorMessages: {
                firstname: 'Please enter your first name',
                surname: 'Please enter your surname',
                email: 'Please validate your email',
                number: 'Please validate your mobile number',
                options: 'Please select a day',
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

        console.log(name);

        switch (name) {
        case 'firstname':
            this.setState({
                errors: {
                    ...this.state.errors, // this takes all thats inside of this.state.values and puts it here - below you add the new data.
                    [name]: !validator.isAlpha(this.state.values.firstname, 'en-GB'), // use [] to use a dynamic (variable) key
                },
            });
            break;
        case 'surname':
            this.setState({
                errors: {
                    ...this.state.errors, // this takes all thats inside of this.state.values and puts it here - below you add the new data.
                    [name]: !validator.isAlpha(this.state.values.surname, 'en-GB'), // use [] to use a dynamic (variable) key
                },
            });
            break;
        case 'email':
            this.setState({
                errors: {
                    ...this.state.errors, // this takes all thats inside of this.state.values and puts it here - below you add the new data.
                    [name]: !validator.isEmail(this.state.values.email), // use [] to use a dynamic (variable) key
                },
            });
            break;
        case 'number':
            this.setState({
                errors: {
                    ...this.state.errors, // this takes all thats inside of this.state.values and puts it here - below you add the new data.
                    [name]: !validator.isMobilePhone(this.state.values.number, 'en-GB'), // use [] to use a dynamic (variable) key
                },
            });
            break;
        case 'options':
            this.setState({
                errors: {
                    ...this.state.errors, // this takes all thats inside of this.state.values and puts it here - below you add the new data.
                    [name]: !validator.isAlpha(this.state.values.options, 'en-GB'), // use [] to use a dynamic (variable) key
                },
            });
            break;
        default: break;
        }
    }
    render() {
        return (
            <div className="Form">
                {<pre>
                    {JSON.stringify(this.state, null, 4)}
                </pre>}
                <Input
                    name="firstname"
                    type="text"
                    state={this.state}
                    control={this.control}
                    validate={this.validate}
                />
                <Input
                    name="surname"
                    type="text"
                    state={this.state}
                    control={this.control}
                    validate={this.validate}
                />
                <Input
                    name="email"
                    type="text"
                    state={this.state}
                    control={this.control}
                    validate={this.validate}
                />
                <Input
                    name="number"
                    type="text"
                    state={this.state}
                    control={this.control}
                    validate={this.validate}
                />
                <Radio
                    name="termsConditions"
                    label="Terms & Conditions"
                    state={this.state}
                    options={['yes', 'no']}
                    control={this.control}
                />
                <Select
                    name="options"
                    value={this.state.values.options}
                    label="Select Options"
                    options={['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6', '123']}
                    state={this.state}
                    control={this.control}
                />
            </div>
        );
    }
}
