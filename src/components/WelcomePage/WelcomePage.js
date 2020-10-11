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

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    const loadedCategories = await GetCategories();
    setCategories(loadedCategories);
  };

  function showMessage() {
    changeStatement(true, setDisplayQuestions, setHideWelcomeMessage);
  }

  function showForm() {
    changeStatement(true, setDisplayForm, setHideWelcomeMessage);
  }

  function setQuestionData(e) {
    e.preventDefault();
    let result = e.target.innerText;

    const quiz = buttonsData.find(item => item.button === result);

    setData(quiz.data);

    showMessage();
  }

  function setContent() {
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
  }

  return <>{setContent()}</>;
}
