import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { changeStatement } from '../../methods/methods';
import QuestionCard from '../QuestionCard/QuestionCard';
import UserAnswers from '../UserAnswers/UserAnswers';
import WelcomePage from '../WelcomePage/WelcomePage';
import './UserResult.css';
import UserResultContent from './UserResultContent';

export default function UserResult({
  sendInfo,
  chosenAnswers,
  correct,
  shuffledAnswers,
  result,
  correctAnswers,
  numberOfQuestions,
}) {
  const [displayWelcomeMessage, setDisplayWelcomeMessage] = useState(false);
  const [displayQuestions, setDisplayQuestions] = useState(false);
  const [displayAnswers, setDisplayAnswers] = useState(false);
  const [hideStatistics, setHideStatistics] = useState(false);

  function showMessage() {
    changeStatement(true, setDisplayWelcomeMessage, setHideStatistics);
  }

  function showQuestion() {
    changeStatement(true, setDisplayQuestions, setHideStatistics);
  }

  function showAnswers() {
    changeStatement(true, setDisplayAnswers, setHideStatistics);
  }

  function setContent() {
    const content = (
      <UserResultContent
        result={result}
        correctAnswers={correctAnswers}
        numberOfQuestions={numberOfQuestions}
        showMessage={showMessage}
        showQuestion={showQuestion}
        showAnswers={showAnswers}
      />
    );

    const hideStats = hideStatistics ? '' : content;
    const welcomeMessage = displayWelcomeMessage ? <WelcomePage /> : '';
    const questionCard = displayQuestions ? (
      <QuestionCard version={sendInfo} />
    ) : (
      ''
    );
    const userAnswers = displayAnswers ? (
      <UserAnswers
        questionDb={sendInfo}
        answers={chosenAnswers}
        correctness={correct}
        shuffleData={shuffledAnswers}
      />
    ) : (
      ''
    );

    return (
      <>
        {hideStats}
        {welcomeMessage}
        {questionCard}
        {userAnswers}
      </>
    );
  }

  return <>{setContent()}</>;
}

UserResult.defaultProps = {
  sendInfo: [{}],
  chosenAnswers: [''],
  correct: [''],
  shuffledAnswers: [[]],
  // result: {},
  correctAnswers: 0,
  numberOfQuestions: 4,
};

UserResult.propTypes = {
  sendInfo: PropTypes.arrayOf(PropTypes.object),
  chosenAnswers: PropTypes.arrayOf(PropTypes.string),
  correct: PropTypes.arrayOf(PropTypes.string),
  shuffledAnswers: PropTypes.arrayOf(PropTypes.array),
  // result: PropTypes.objectOf(
  //   PropTypes.oneOfType([PropTypes.string, PropTypes.symbol])
  // ),
  correctAnswers: PropTypes.number,
  numberOfQuestions: PropTypes.number,
};
