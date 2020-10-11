import React from 'react';

import PropTypes from 'prop-types';

import CheckAnswersCorrectness from './CheckAnswersCorrectness';
import ShowQuestions from './ShowQuestions';
import './UserAnswers.css';

export default function UserAnswers({
  questionDb,
  answers,
  correctness,
  shuffleData,
}) {
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
  );
}

UserAnswers.defaultProps = {
  questionDb: [{}],
  answers: [''],
  correctness: [''],
  shuffleData: [[]],
};

UserAnswers.propTypes = {
  questionDb: PropTypes.arrayOf(PropTypes.object),
  answers: PropTypes.arrayOf(PropTypes.string),
  correctness: PropTypes.arrayOf(PropTypes.string),
  shuffleData: PropTypes.arrayOf(PropTypes.array),
};
