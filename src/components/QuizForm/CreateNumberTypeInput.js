import React from "react";
import PropTypes from 'prop-types';

export const CreateNumberTypeInput = ({type, method, defaultValue}) => {
    return (
        <input type={type} onChange={method} defaultValue={defaultValue} className={'form-input'}/>
    )
};

CreateNumberTypeInput.propTypes = {
    type: PropTypes.string,
    method: PropTypes.func,
    defaultValue: PropTypes.number,
};