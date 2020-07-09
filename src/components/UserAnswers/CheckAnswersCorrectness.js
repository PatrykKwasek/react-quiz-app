import React from "react";
import {CreateButton} from "../QuestionCard/CreateButton";

export const CheckAnswersCorrectness = (arr, idx, userAnswers, correctAnswers) => {
    return (
        arr.map((item, index) => {
            let className;
            if ((userAnswers[idx] === item.slice(3) && userAnswers[idx] === correctAnswers[idx]) ||
                correctAnswers[idx] === item.slice(3)) {
                className = 'correct-answer'
            } else if (userAnswers[idx] === item.slice(3) && userAnswers[idx] !== correctAnswers[idx]) {
                className = 'incorrect-answer'
            } else {
                className = 'custom'
            }

            return (
                <p key={`Answers list-${index}`}>
                    <CreateButton
                        method={() => {}}
                        className={className}
                        condition={true}
                        txt={item}
                    />
                </p>
            )
        })
    );
};