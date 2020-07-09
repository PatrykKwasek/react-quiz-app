import React from "react";
import PropTypes from 'prop-types';
import {CreateButton} from "../QuestionCard/CreateButton";
import {CreateButtonList} from "./CreateButtonList";

export const MainPageContent = ({quizButtons, showForm, setQuestionData, className}) => {
    return (
        <div className={className[0]}>
            <h1 className={className[1]}>React Quiz APP</h1>
            <p className={className[2]}>
                <CreateButton
                    method={showForm}
                    className={className[3]}
                    txt={'START'}
                />
            </p>
            <p className={className[1]}>Find out example quiz</p>
            <CreateButtonList
                tab={quizButtons}
                method={setQuestionData}
                className={[className[3], 'welcome-page-buttons-list', 'txt-inside-btn']}
            />
        </div>
    )
};

MainPageContent.propTypes = {
    quizButtons: PropTypes.array,
    showForm: PropTypes.func,
    setQuestionData: PropTypes.func,
    className: PropTypes.array,
};