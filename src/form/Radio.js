import React from 'react';
import { string, shape, objectOf, func, arrayOf } from 'prop-types';

const Radio = props => (
    <div>
        <label htmlFor={props.name}>{props.label}</label>
        {props.options.map(option => (
            <div className="left" key={option}>
                <label htmlFor={props.name}>{option}</label>
                <input type="radio" checked={props.state.values[props.name] === option} name={props.name} value={option} onChange={props.control} />
            </div>
        ))}
    </div>
);

Radio.propTypes = {
    name: string.isRequired,
    label: string.isRequired,
    options: arrayOf(string).isRequired,
    state: shape({
        values: objectOf(string),
    }).isRequired,
    control: func.isRequired,
};

export default Radio;
