import React, { useState, useEffect } from 'react';

import { changeStatement } from '../../methods/methods';
import { GetCategories } from '../Api/getAPI';
import QuestionCard from '../QuestionCard/QuestionCard';
import Form from '../QuizForm/Form';
import buttonsData from './buttonsData';
import MainPageContent from './MainPageContent';
import './WelcomePage.css';

export default function WelcomePage() {
  const [displayQuestions, setDisplayQuestions] = useState(false);
  const [displayForm, setDisplayForm] = useState(false);
  const [hideWelcomeMessage, setHideWelcomeMessage] = useState(false);
  const [data, setData] = useState('');

  const [categories, setCategories] = useState([]);

  const loadCategories = async () => {
    const loadedCategories = await GetCategories();
    setCategories(loadedCategories);
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const showMessage = () => {
    changeStatement(true, setDisplayQuestions, setHideWelcomeMessage);
  };

  const showForm = () => {
    changeStatement(true, setDisplayForm, setHideWelcomeMessage);
  };

  const setQuestionData = e => {
    e.preventDefault();
    const result = e.target.innerText;

    const quiz = buttonsData.find(item => item.button === result);

    setData(quiz.data);

    showMessage();
  };

  const setContent = () => {
    const content = (
      <MainPageContent
        quizButtons={buttonsData}
        showForm={showForm}
        setQuestionData={setQuestionData}
      />
    );

    const message = hideWelcomeMessage ? '' : content;
    const quizForm = displayForm ? <Form categoriesData={categories} /> : '';

    const questions = displayQuestions ? <QuestionCard version={data} /> : '';

    return (
      <>
        {message}
        {quizForm}
        {questions}
      </>
    );
  };

  return <>{setContent()}</>;
}
