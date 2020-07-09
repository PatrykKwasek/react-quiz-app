import React from "react";
import PropTypes from 'prop-types';

export const CreateButton = ({method, className, txt, condition}) => {
    return (
        <button
            onClick={method}
            className={className}
            disabled={condition}
        >
            {txt}
        </button>
    )
};

CreateButton.propTypes = {
    method: PropTypes.func,
    className: PropTypes.string,
    txt: PropTypes.string,
    condition: PropTypes.bool,
};