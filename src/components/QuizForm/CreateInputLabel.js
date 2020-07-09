import React from "react";
import PropTypes from 'prop-types';

export const CreateInputLabel = ({txt}) => {
    return (
        <label className={'form-label'}>{txt}</label>
    )
};

CreateInputLabel.propTypes = {
    txt: PropTypes.string,
};