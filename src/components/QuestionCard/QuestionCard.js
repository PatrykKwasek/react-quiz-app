import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import {
  changeStatement,
  joinAnswers,
  shuffleAnswersTable,
} from '../../methods/methods';
import { GetQuestions } from '../Api/getAPI';
import Button from '../Button/Button';
import Loader from '../Loader/Library/Loader';
import UserResult from '../UserResult/UserResult';
import WelcomePage from '../WelcomePage/WelcomePage';
import QuestionCardContent from './QuestionCardContent';

export default function QuestionCard({
  questionNumber,
  category,
  difficulty,
  version,
}) {
  const [questionData, setQuestionData] = useState([]);
  let [activeIndex, setActiveIndex] = useState(0);
  const [userAnswersArrayResult, setUserAnswersArrayResult] = useState([]);
  const [userAnswer, setUserAnswer] = useState('');
  const [questionsTable, setQuestionsTable] = useState([]);
  const [buttonClicked, setButtonClicked] = useState('');
  const [chosenAnswers, setChosenAnswers] = useState([]);
  const [correct, setCorrect] = useState([]);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [hideQuestion, setHideQuestion] = useState(false);
  const [displayStatistics, setDisplayStatistics] = useState(false);
  const [displayWelcomeMessage, setDisplayWelcomeMessage] = useState(false);
  const [loading, setLoading] = useState(true);

  const loadExampleQuestion = () => {
    const loadedExampleQuestions = version;
    setQuestionData(loadedExampleQuestions);
    setQuestionsTable(
      shuffleAnswersTable(joinAnswers(loadedExampleQuestions[activeIndex]))
    );
  };

  const loadQuestions = async () => {
    const loadedQuestions = await GetQuestions(
      questionNumber,
      category,
      difficulty
    );

    setQuestionData(loadedQuestions);
    setQuestionsTable(
      shuffleAnswersTable(joinAnswers(loadedQuestions[activeIndex]))
    );
  };

  useEffect(() => {
    version ? loadExampleQuestion() : loadQuestions();
    setLoading(false);
  }, []);

  const checkAnswerCorrectness = () => {
    const checkAnswerCorrectness =
      userAnswer === questionData[activeIndex].correct_answer
        ? userAnswersArrayResult.concat(1)
        : userAnswersArrayResult.concat(0);

    setUserAnswersArrayResult(checkAnswerCorrectness);
    setUserAnswer('');
    setChosenAnswers(chosenAnswers.concat(userAnswer));
    setCorrect(correct.concat(questionData[activeIndex].correct_answer));
    setShuffledAnswers(shuffledAnswers.concat([questionsTable]));
  };

  const showStartMenu = () => {
    changeStatement(true, setHideQuestion, setDisplayWelcomeMessage);
  };

  const hideQuestionDisplayStatistics = () => {
    checkAnswerCorrectness();

    changeStatement(true, setHideQuestion, setDisplayStatistics);
  };

  const handleNextQuestion = () => {
    const getFirstObjectElement = questionData[activeIndex + 1];
    const questionsTable = shuffleAnswersTable(
      joinAnswers(getFirstObjectElement)
    );

    checkAnswerCorrectness();

    if (activeIndex === questionData.length - 1) {
      activeIndex = 0;
    } else {
      activeIndex++;
    }

    setActiveIndex(activeIndex);
    setQuestionsTable(questionsTable);
    setButtonClicked('');
  };

  const checkAnswer = (e, id) => {
    e.preventDefault();
    const clickedAnswer = e.target.innerText.slice(3);

    setUserAnswer(clickedAnswer);
    setButtonClicked(id);
  };

  const createQuestionsList = questionData => {
    const data = [];

    questionData.map(item => data.push(item));

    const numberOfQuestions = data.length;
    const correctAnswers = userAnswersArrayResult.filter(item => item === 1)
      .length;
    const quizResult =
      correctAnswers / data.length >= 0.5 ? (
        <strong>PASSED</strong>
      ) : (
        <strong>FAILED</strong>
      );

    const appropriateButton =
      userAnswer === '' ? (
        ''
      ) : data.length - 1 === activeIndex ? (
        <Button
          onClick={hideQuestionDisplayStatistics}
          className=''
          txt='Show statistics'
          condition={false}
          type='button'
        />
      ) : (
        <Button
          onClick={handleNextQuestion}
          className=''
          txt='Next question'
          condition={false}
          type='button'
        />
      );

    const content = (
      <QuestionCardContent
        activeIndex={activeIndex}
        data={data}
        questionsTable={questionsTable}
        buttonClicked={buttonClicked}
        checkAnswer={checkAnswer}
        appropriateButton={appropriateButton}
        showMenu={showStartMenu}
      />
    );

    const welcomeMessage = displayWelcomeMessage ? <WelcomePage /> : '';
    const message = loading ? <Loader /> : hideQuestion ? '' : content;
    const question = displayStatistics ? (
      <UserResult
        result={quizResult}
        numberOfQuestions={numberOfQuestions}
        correctAnswers={correctAnswers}
        chosenAnswers={chosenAnswers}
        correct={correct}
        shuffledAnswers={shuffledAnswers}
        sendInfo={questionData}
      />
    ) : (
      ''
    );

    return (
      <>
        {welcomeMessage}
        {message}
        {question}
      </>
    );
  };

  return <>{questionData.length !== 0 && createQuestionsList(questionData)}</>;
}

QuestionCard.defaultProps = {
  // version: [{}],
  questionNumber: 10,
  category: 0,
  difficulty: 'medium',
};

QuestionCard.propTypes = {
  version: PropTypes.arrayOf(PropTypes.object),
  questionNumber: PropTypes.number,
  category: PropTypes.number,
  difficulty: PropTypes.string,
};
