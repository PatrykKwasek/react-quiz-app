import React from "react";
import PropTypes from 'prop-types';
import {CreateButton} from "../QuestionCard/CreateButton";

export const CreateButtonList = ({tab, method, className}) => {
    return (
        <div className={className[1]}>
            {tab.map((item, index) =>
            <p key={`Answers list-${index}`} className={className[2]}>
                <CreateButton
                    method={method}
                    className={className[0]}
                    txt={item.button}
                />
            </p>
            )}
        </div>
    )
};

CreateButtonList.propTypes = {
    tab: PropTypes.array,
    method: PropTypes.func,
    className: PropTypes.array,
};