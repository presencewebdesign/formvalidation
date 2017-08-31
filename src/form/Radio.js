import React from 'react';
import { string, func, arrayOf } from 'prop-types';

const Radio = props => (
    <div>
        <label htmlFor={props.name}>{props.label ? props.label : props.name}</label>
        {props.options.map(option => (
            <div className="left" key={option}>
                <label htmlFor={props.name}>{option}</label>
                <input type="radio" checked={props.state.values[props.name] === option} name={props.name} value={option} onChange={props.control} onClick={props.validate} />
            </div>
        ))}
    </div>
);

Radio.propTypes = {
    name: string.isRequired,
    label: string,
    options: arrayOf(string).isRequired,
    validate: func.isRequired,
};

Radio.defaultProps = {
    label: undefined,
};

export default Radio;
