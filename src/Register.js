import React, { Component } from 'react';
import validator from 'validator';
import {AppBar, Tabs, Tab} from 'material-ui';
// My components
import Input from './form/Input';
import Radio from './form/Radio';
import Extrafields from './form/Extrafields';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {
                firstname: '',
                surname: '',
                parentfirstname: '',
                parentsurname: '',
                email: '',
                number: '',
                termsConditions: 'no',
                options: '',
            },
            errors: {
                firstname: false,
                surname: false,
                parentfirstname: false,
                parentsurname: false,
                email: false,
                number: false,
                options: false,
            },
            errorMessages: {
                firstname: 'Please enter your first name',
                surname: 'Please enter your surname',
                parentfirstname: 'Please enter your parents first name',
                parentsurname: 'Please enter your parents surname',
                email: 'Please validate your email',
                number: 'Please validate your mobile number',
                options: 'Please select an option',
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
        case 'firstname':
            this.setState({
                errors: {
                    ...this.state.errors, // this takes all thats inside of this.state.values and puts it here - below you add the new data.
                    [name]: !validator.isAlpha(this.state.values.firstname), // use [] to use a dynamic (variable) key
                },
            });
            break;
        case 'surname':
            this.setState({
                errors: {
                    ...this.state.errors, // this takes all thats inside of this.state.values and puts it here - below you add the new data.
                    [name]: !validator.isAlpha(this.state.values.surname), // use [] to use a dynamic (variable) key
                },
            });
            break;
        case 'parentfirstname':
            this.setState({
                errors: {
                    ...this.state.errors, // this takes all thats inside of this.state.values and puts it here - below you add the new data.
                    [name]: !validator.isAlpha(this.state.values.parentfirstname), // use [] to use a dynamic (variable) key
                },
            });
            break;
        case 'parentsurname':
            this.setState({
                errors: {
                    ...this.state.errors, // this takes all thats inside of this.state.values and puts it here - below you add the new data.
                    [name]: !validator.isAlpha(this.state.values.parentsurname), // use [] to use a dynamic (variable) key
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
                    [name]: validator.equals(this.state.values.options, 'Please select'), // use [] to use a dynamic (variable) key
                },
            });
            break;
        default: break;
        }
    }
    render() {
        return (
            <div className="content">
                <AppBar title="My App">
                    <Tabs>
                        <Tab label="&nbsp;Item 1&nbsp;" />
                        <Tab label="&nbsp;Item 2&nbsp;" />
                        <Tab label="&nbsp;Item 3&nbsp;" />
                        <Tab label="&nbsp;Item 4&nbsp;" />
                    </Tabs>
                </AppBar>
                <div>
                    <Input
                        name="firstname"
                        type="text"
                        label="First name"
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
                        label="hello"
                        state={this.state}
                        control={this.control}
                        validate={this.validate}
                    />
                    <Radio
                        name="termsConditions"
                        label="Terms &amp; Conditions"
                        state={this.state}
                        options={['yes', 'no']}
                        control={this.control}
                        validate={this.validate}
                    />
                    { this.state.values.termsConditions === 'yes' ?
                        <Extrafields
                            state={this.state}
                            control={this.control}
                            validate={this.validate}
                        />
                        : null
                    }

                </div>
            </div>
        );
    }
}
