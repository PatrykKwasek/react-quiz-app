import React from 'react';

import PropTypes from 'prop-types';

import Button from '../Button/Button';

export default function UserResultContent({
  result,
  correctAnswers,
  numberOfQuestions,
  showMessage,
  showQuestion,
  showAnswers,
}) {
  return (
    <div className='user-result-container myBody'>
      <h2 className='result-heading'>CONGRATULATIONS!</h2>
      <p className='result-paragraph-verdict'>You've {result} the test.</p>

      <p className='result-user-score'>
        You have got <strong>{` ${correctAnswers}`}</strong> out of
        <strong>{` ${numberOfQuestions}`}</strong> questions right.
      </p>

      <div className='result-buttons'>
        <Button
          onClick={showMessage}
          className='custom-btn'
          txt='Back to menu'
          type='button'
        />
        <Button
          onClick={showQuestion}
          className='custom-btn'
          txt='Restart'
          type='button'
        />
        <Button
          onClick={showAnswers}
          className='custom-btn'
          txt='Show answers'
          type='button'
        />
      </div>
    </div>
  );
}

UserResultContent.defaultProps = {
  // result: '',
  correctAnswers: 0,
  numberOfQuestions: 0,
  showMessage: () => {},
  showQuestion: () => {},
  showAnswers: () => {},
};

UserResultContent.propTypes = {
  // result: PropTypes.string,
  correctAnswers: PropTypes.number,
  numberOfQuestions: PropTypes.number,
  showMessage: PropTypes.func,
  showQuestion: PropTypes.func,
  showAnswers: PropTypes.func,
};
