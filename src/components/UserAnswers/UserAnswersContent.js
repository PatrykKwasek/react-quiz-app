import React from 'react';

import PropTypes from 'prop-types';

import Button from '../Button/Button';

export default function UserAnswerContent({
  questionData,
  data,
  method,
  userAnswers,
  correctAnswers,
  onClick,
}) {
  return (
    <>
      {questionData.map((item, index) => (
        <div key={`Create list-${index}`} className='user-answers'>
          <p>
            Question {index + 1} / {questionData.length}
          </p>
          <p>
            <strong>{item.question}</strong>
          </p>
          <div>{method(data[index], index, userAnswers, correctAnswers)}</div>
        </div>
      ))}
      <div className='answers-back-home-button'>
        <Button
          onClick={onClick}
          className='custom-btn'
          txt='Back to menu'
          type='button'
        />
      </div>
    </>
  );
}

UserAnswerContent.defaultProps = {
  questionData: [{}],
  data: [[]],
  method: () => {},
  userAnswers: [''],
  correctAnswers: [''],
  onClick: () => {},
};

UserAnswerContent.propTypes = {
  questionData: PropTypes.arrayOf(PropTypes.object),
  data: PropTypes.arrayOf(PropTypes.array),
  method: PropTypes.func,
  userAnswers: PropTypes.arrayOf(PropTypes.string),
  correctAnswers: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
};
