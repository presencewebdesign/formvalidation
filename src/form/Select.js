import React from 'react';
import { string, shape, objectOf, func, arrayOf } from 'prop-types';

const Select = props => (
    <div>
        <label htmlFor={props.name}>{props.label ? props.label : props.name}</label>
        <select name={props.name} onChange={props.control} onBlur={props.validate} className={props.state.errors[props.name] ? 'invalid' : ''}>
            <option>Please select</option>
            {props.options.map(option => (
                <option key={option} value={option}>{option}</option>
            ))}
        </select>
        {props.state.errors[props.name] ? <p style={{ color: 'red' }}>{props.state.errorMessages[props.name]}</p> : null}
    </div>
);

Select.propTypes = {
    name: string.isRequired,
    label: string.isRequired,
    options: arrayOf(string).isRequired,
    state: shape({
        values: objectOf(string),
    }).isRequired,
    control: func.isRequired,
    validate: func.isRequired,
};

export default Select;
