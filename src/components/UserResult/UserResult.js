import React, {useState} from "react";
import PropTypes from 'prop-types';
import WelcomePage from "../WelcomePage/WelcomePage";
import QuestionCard from "../QuestionCard/QuestionCard";
import UserAnswers from "../UserAnswers/UserAnswers";
import {CreateButton} from "../QuestionCard/CreateButton";
import './UserResult.css';

function UserResult({sendInfo, chosenAnswers, correct, shuffledAnswers, result, correctAnswers, numberOfQuestions}) {
    const [displayWelcomeMessage, setDisplayWelcomeMessage] = useState(false);
    const [displayQuestions, setDisplayQuestions] = useState(false);
    const [displayAnswers, setDisplayAnswers] = useState(false);
    const [hideStatistics, setHideStatistics] = useState(false);

    function showMessage() {
        setDisplayWelcomeMessage(true);
        setHideStatistics(true);
    }

    function showQuestion() {
        setDisplayQuestions(true);
        setHideStatistics(true);
    }

    function showAnswers() {
        setDisplayAnswers(true);
        setHideStatistics(true);
    }

    function changeContent() {
        let content = (
            <div className={'user-result-container myBody'}>
                <h2 className={'result-heading'}>CONGRATULATIONS!</h2>
                <p className={'result-paragraph-verdict'}>You've {result} the test.</p>

                <p className={'result-user-score'}>
                    You have got <strong>{` ${correctAnswers}`}</strong> out of
                    <strong>{` ${numberOfQuestions}`}</strong> questions right.
                </p>

                <div className={'result-buttons'}>
                    <CreateButton method={showMessage} className={'custom-btn'} txt={'Back to menu'}/>
                    <CreateButton method={showQuestion} className={'custom-btn'} txt={'Restart'}/>
                    <CreateButton method={showAnswers} className={'custom-btn'} txt={'Show answers'}/>
                </div>
            </div>
        );

        let hideStats = hideStatistics ? '' : content;
        let welcomeMessage = displayWelcomeMessage ? <WelcomePage /> : '';
        let questionCard = displayQuestions ? <QuestionCard version={sendInfo}/> : '';
        let userAnswers = displayAnswers ?
            <UserAnswers
                questionDb={sendInfo}
                answers={chosenAnswers}
                correctness={correct}
                shuffleData={shuffledAnswers}/> :
            '';

        return (
            <>
                {hideStats}
                {welcomeMessage}
                {questionCard}
                {userAnswers}
            </>
        )
    }

    return (
        <>
            {changeContent()}
        </>
    )
}

export default UserResult;

UserResult.defaultProps = {
    numberOfQuestions: 4,
};

UserResult.propTypes = {
    sendInfo: PropTypes.array,
    chosenAnswers: PropTypes.array,
    correct: PropTypes.array,
    shuffledAnswers: PropTypes.array,
    result: PropTypes.object,
    correctAnswers: PropTypes.number,
    numberOfQuestions: PropTypes.number,
};