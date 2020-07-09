import {CreateStartButton} from "./CreateStartButton";
import {CreateButtonList} from "./CreateButtonList";
import React from "react";

export const MainPageContent = ({quizButtons, showForm, setQuestionData, className}) => {
    return (
        <div>
            <h1>Welcome to ReactJS Quiz App</h1>
            <p>All questions are from "Open Trivia Database"</p>
            <p>
                <CreateStartButton
                    method={showForm}
                    className={className}
                />
            </p>
            <p>Below you can choose example quiz</p>
            <CreateButtonList
                tab={quizButtons}
                method={setQuestionData}
                className={className}
            />
        </div>
    )
};