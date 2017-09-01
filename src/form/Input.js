import React from 'react';
import { string, shape, objectOf, bool, func } from 'prop-types';
import TextField from 'material-ui/TextField';

const Input = props => (
    <div>
        <TextField
            name={props.name}
            onChange={props.control}
            onKeyUp={props.validate}
            type={props.type}
            className={props.state.errors[props.name] ? 'invalid' : ''}
            floatingLabelText={props.label ? props.label : props.name}
        />
        {props.state.errors[props.name] ? <p style={{ color: 'red' }}>{props.state.errorMessages[props.name]}</p> : null}
    </div>
);

Input.propTypes = {
    name: string.isRequired,
    type: string.isRequired,
    label: string,
    state: shape({
        values: objectOf(string),
        errors: objectOf(bool),
        errorMessages: objectOf(string),
    }).isRequired,
    control: func.isRequired,
    validate: func.isRequired,
};
Input.defaultProps = {
    label: undefined,
};

export default Input;
