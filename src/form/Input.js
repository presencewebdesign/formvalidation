import React from 'react';
import { string, shape, objectOf, bool, func } from 'prop-types';

const Input = props => (
    <div>
        <div>
            <label htmlFor={props.name}>{props.name}</label>
        </div>
        <input
            name={props.name}
            value={props.state.values[props.name]}
            onChange={props.control}
            onKeyUp={props.validate}
            type={props.type}
            className={props.state.errors[props.name] ? 'invalid' : ''}
        />
        {props.state.errors[props.name] ? <p style={{ color: 'red' }}>{props.state.errorMessages[props.name]}</p> : null}
    </div>
);
Input.propTypes = {
    name: string.isRequired,
    type: string.isRequired,
    state: shape({
        values: objectOf(string),
        errors: objectOf(bool),
        errorMessages: objectOf(string),
    }).isRequired,
    control: func.isRequired,
    validate: func.isRequired,
};

export default Input;