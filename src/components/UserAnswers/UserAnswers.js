import React from "react";
import PropTypes from 'prop-types';
import {CheckAnswersCorrectness} from "./CheckAnswersCorrectness";
import ShowQuestions from "./ShowQuestions";
import './UserAnswers.css';

const UserAnswers = ({questionDb, answers, correctness, shuffleData}) => {
    return (
        <>
            <ShowQuestions
                questionData={questionDb}
                data={shuffleData}
                method={CheckAnswersCorrectness}
                userAnswers={answers}
                correctAnswers={correctness}
            />
        </>
    )
};

export default UserAnswers;

UserAnswers.propTypes = {
    questionDb: PropTypes.array,
    answers: PropTypes.array,
    correctness: PropTypes.array,
    shuffleData: PropTypes.array,
};