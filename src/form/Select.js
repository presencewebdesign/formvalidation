import React from 'react';
import { string, shape, objectOf, func, arrayOf } from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const Select = (props) => {
    const items = props.options.map(option => (
        <MenuItem key={option} primaryText={option} value={option} />
    ));

    return (
        <div>
            <SelectField
                name={props.name}
                onChange={props.control}
                onBlur={props.validate}
                className={props.state.errors[props.name] ? 'invalid' : ''}
                label={props.label ? props.label : props.name}
            >
                <MenuItem primaryText="Please select" />
                {items}
            </SelectField>
            {props.state.errors[props.name] ? <p style={{ color: 'red' }}>{props.state.errorMessages[props.name]}</p> : null}
        </div>
    );
};

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
