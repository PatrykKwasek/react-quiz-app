import React from "react";
import PropTypes from 'prop-types';

export const CreateDifficultySelectTypeInput = ({method, item}) => {
    return (
        <select onChange={method} className={'form-select'}>
            <option value="any_difficulty">{item[0]}</option>
            <option value="easy">{item[1]}</option>
            <option value="medium">{item[2]}</option>
            <option value="hard">{item[3]}</option>
        </select>
    )
};

CreateDifficultySelectTypeInput.propTypes = {
    method: PropTypes.func,
    item: PropTypes.array,
};