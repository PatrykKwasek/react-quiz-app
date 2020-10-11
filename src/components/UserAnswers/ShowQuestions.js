import React, { useState } from 'react';

import PropTypes from 'prop-types';

import WelcomePage from '../WelcomePage/WelcomePage';
import UserAnswerContent from './UserAnswersContent';

export default function ShowQuestions({
  questionData,
  data,
  method,
  userAnswers,
  correctAnswers,
}) {
  const [hideStatistics, setHideStatistics] = useState(false);

  function showMessage() {
    setHideStatistics(true);
  }

  function showAnswers() {
    const content = (
      <UserAnswerContent
        questionData={questionData}
        data={data}
        method={method}
        userAnswers={userAnswers}
        correctAnswers={correctAnswers}
        onClick={showMessage}
      />
    );

    const hideStats = hideStatistics ? <WelcomePage /> : content;

    return <>{hideStats}</>;
  }

  return <>{showAnswers()}</>;
}

ShowQuestions.defaultProps = {
  questionData: [{}],
  data: [[]],
  method: () => {},
  userAnswers: [''],
  correctAnswers: [''],
};

ShowQuestions.propTypes = {
  questionData: PropTypes.arrayOf(PropTypes.object),
  data: PropTypes.arrayOf(PropTypes.array),
  method: PropTypes.func,
  userAnswers: PropTypes.arrayOf(PropTypes.string),
  correctAnswers: PropTypes.arrayOf(PropTypes.string),
};
