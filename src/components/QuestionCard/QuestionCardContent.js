import React from 'react';

import PropTypes from 'prop-types';

import Button from '../Button/Button';
import AnswersList from './AnswersList';

export default function QuestionCardContent({
  activeIndex,
  data,
  questionsTable,
  buttonClicked,
  checkAnswer,
  appropriateButton,
  showStartMenu,
}) {
  return (
    <div key={`Create list-${activeIndex}`} className='question-card'>
      <p className='number-of-question'>
        Question {activeIndex + 1} / {data.length}
      </p>
      <p className='question'>
        <strong>{data[activeIndex].question}</strong>
      </p>

      <div className='answers'>
        <AnswersList
          questionsTable={questionsTable}
          buttonClicked={buttonClicked}
          method={checkAnswer}
        />
      </div>

      <div className='appropriate-button'>
        <p>{appropriateButton}</p>
      </div>

      <p className='back-to-menu'>
        <Button
          onClick={showStartMenu}
          className='button-back-to-menu'
          txt='BACK TO MENU'
          type='button'
        />
      </p>
    </div>
  );
}

QuestionCardContent.defaultProps = {
  // activeIndex: 0,
  data: [{}],
  questionsTable: [''],
  buttonClicked: '',
  checkAnswer: () => {},
  // appropriateButton: '',
  showStartMenu: () => {},
};

QuestionCardContent.propTypes = {
  activeIndex: PropTypes.number,
  data: PropTypes.arrayOf(PropTypes.object),
  questionsTable: PropTypes.arrayOf(PropTypes.string),
  buttonClicked: PropTypes.string,
  checkAnswer: PropTypes.func,
  // appropriateButton: PropTypes.objectOf(PropTypes.symbol),
  showStartMenu: PropTypes.func,
};
