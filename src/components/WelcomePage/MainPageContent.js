import React from 'react';

import PropTypes from 'prop-types';

import Button from '../Button/Button';
import CreateButtonList from './CreateButtonList';

export default function MainPageContent({
  quizButtons,
  showForm,
  setQuestionData,
}) {
  return (
    <div className='welcome-page-container'>
      <h1 className='welcome-page-txt-center'>React Quiz APP</h1>
      <p className='welcome-page-paragraph'>
        <Button onClick={showForm} className='btn' txt='START' type='button' />
      </p>
      <p className='welcome-page-txt-center'>Find out example quiz</p>
      <CreateButtonList tab={quizButtons} onClick={setQuestionData} />
    </div>
  );
}

MainPageContent.propTypes = {
  quizButtons: PropTypes.array,
  showForm: PropTypes.func,
  setQuestionData: PropTypes.func,
};
