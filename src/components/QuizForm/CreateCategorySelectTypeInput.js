import React from "react";
import PropTypes from 'prop-types';

export const CreateCategorySelectTypeInput = ({method, tab}) => {
        return (
            <select onChange={method} className={'form-select'}>
                    <option value={0}>Any Category</option>
                    {tab.map((item, index) =>
                        <option key={`Create option-${index}`} value={item.id}>{item.name}</option>
                    )}
            </select>
        )
};

CreateCategorySelectTypeInput.propTypes = {
        method: PropTypes.func,
};
