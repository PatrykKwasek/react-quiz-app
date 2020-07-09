import React from "react";
import PropTypes from 'prop-types';
import CreateAnswerButtons from "./CreateAnswerButtons";

export const AnswersList = ({questionsTable, buttonClicked, method}) => {
    return (
        questionsTable.map((item, index) => {
                let id = `button${index + 1}`;
                let className = (buttonClicked === id) ? "clicked-button" : "inactive-button";

                return (
                    <p key={`Answers list-${index}`} className={'answers-paragraph'}>
                        <CreateAnswerButtons
                            id={id}
                            method={method}
                            className={className}
                            item={item}
                        />
                    </p>
                )
            }
        )
    )
};

AnswersList.propTypes = {
    questionsTable: PropTypes.array,
    buttonClicked: PropTypes.string,
    method: PropTypes.func,
};