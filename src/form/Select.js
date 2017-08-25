import React from 'react';
// Be sure to include styles at some point, probably during your bootstrapping
import 'react-select/dist/react-select.css';
import { string, shape, objectOf, func, arrayOf } from 'prop-types';

const Select = props => (
    <div>
        <div>
            <label htmlFor={props.name}>{props.label}</label>
            <select name={props.name} value={props.state.values.options} onChange={props.control} className={props.state.errors[props.name] ? 'invalid' : ''}>
                <option>Please select</option>
                {props.options.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
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
};

export default Select;
