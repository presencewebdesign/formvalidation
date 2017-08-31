import React from 'react';
import { string, shape, objectOf, bool, func } from 'prop-types';

import Input from './Input';

const Extrafields = props => (
    <div>
        <Input
            name="parentfirstname"
            type="text"
            label="Parents First Name"
            state={props.state}
            control={props.control}
            validate={props.validate}
        />
        <Input
            name="parentsurname"
            type="text"
            label="Parents Surname"
            state={props.state}
            control={props.control}
            validate={props.validate}
        />
    </div>
);

Extrafields.propTypes = {
    state: shape({
        values: objectOf(string),
        errors: objectOf(bool),
        errorMessages: objectOf(string),
    }).isRequired,
    control: func.isRequired,
    validate: func.isRequired,
};

export default Extrafields;
