import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { changeStatement } from '../../methods/methods';
import QuestionCard from '../QuestionCard/QuestionCard';
import WelcomePage from '../WelcomePage/WelcomePage';
import './Form.css';
import FormContent from './FormContent';

export default function Form({ categoriesData }) {
  const [questionNumber, setQuestionNumber] = useState(10);
  const [category, setCategory] = useState(0);
  const [difficulty, setDifficulty] = useState('');
  const [hideForm, setHideForm] = useState(false);
  const [welcomePage, setWelcomePage] = useState(false);
  const [questionCard, setQuestionCard] = useState(false);

  const handleQuestionsNumber = e => {
    setQuestionNumber(e.target.value);
  };

  const handleCategory = e => {
    setCategory(e.target.value);
  };

  const handleDifficulty = e => {
    setDifficulty(e.target.value);
  };

  const showQuestionCard = () => {
    changeStatement(true, setHideForm, setQuestionCard);
  };

  const showWelcomePage = () => {
    changeStatement(true, setHideForm, setWelcomePage);
  };

  const formContent = () => {
    const content = (
      <FormContent
        handleQuestionsNumber={handleQuestionsNumber}
        handleCategory={handleCategory}
        categoriesData={categoriesData}
        getDifficulties={handleDifficulty}
        showQuestionCard={showQuestionCard}
        showWelcomePage={showWelcomePage}
      />
    );

    const form = hideForm ? '' : content;
    const home = welcomePage ? <WelcomePage /> : '';

    const question = questionCard ? (
      <QuestionCard
        questionNumber={questionNumber}
        category={category}
        difficulty={difficulty}
      />
    ) : (
      ''
    );

    return (
      <div className='form-container'>
        {form}
        {home}
        {question}
      </div>
    );
  };

  return <>{formContent()}</>;
}

Form.defaultProps = {
  categoriesData: [{}],
};

Form.propTypes = {
  categoriesData: PropTypes.arrayOf(PropTypes.object),
};
