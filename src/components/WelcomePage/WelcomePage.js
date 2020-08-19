import React, {useState, useEffect} from "react";
import QuestionCard from "../QuestionCard/QuestionCard";
import Form from "../QuizForm/Form";
import buttonsData from "./buttonsData";
import {MainPageContent} from "./MainPageContent";
import './WelcomePage.css';
import {GetCategories} from "../Api/getAPI";

function WelcomePage() {
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
        setDisplayQuestions(true);
        setHideWelcomeMessage(true);
    }

    function showForm() {
        setDisplayForm(true);
        setHideWelcomeMessage(true);
    }

    function setQuestionData(e) {
        e.preventDefault();
        let result = e.target.innerText;

        const quiz = buttonsData.find(item => item.button === result);

        setData(quiz.data);

        showMessage();
    }

    function hideWelcomeMessageDisplayQuestion() {
        let content = (
            <MainPageContent
                quizButtons={buttonsData}
                showForm={showForm}
                setQuestionData={setQuestionData}
                className={['welcome-page-container', 'welcome-page-txt-center', 'welcome-page-paragraph', 'btn']}
            />
        );

        let message = hideWelcomeMessage ? '' : content;
        let quizForm = displayForm ? <Form categoriesData={categories}/> : '';

        let questions = displayQuestions ?
            <QuestionCard
                version={data}
            /> :
            '';

        return (
            <>
                {message}
                {quizForm}
                {questions}
            </>
        )
    }

    return (
        <>
            {hideWelcomeMessageDisplayQuestion()}
        </>
    );
}

export default WelcomePage;
