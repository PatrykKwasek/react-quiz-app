import React, {useState} from "react";
import QuestionCard from "../QuestionCard/QuestionCard";
import Form from "../QuizForm/Form";
import buttonsData from "./buttonsData";
import {MainPageContent} from "./MainPageContent";
import Example from "../QuizForm/Example";
import {GetCategories, GetLink} from "../../fetchAPI";

const apiData = [
    {"id":9, "name":"General Knowledge"},
    {"id":10, "name":"Entertainment: Books"},
    {"id":11, "name":"Entertainment: Film"}
];

function WelcomePage() {
    const [displayQuestions, setDisplayQuestions] = useState(false);
    const [displayForm, setDisplayForm] = useState(false);
    const [hideWelcomeMessage, setHideWelcomeMessage] = useState(false);
    const [data, setData] = useState('');

    // useEffect(() => {
    //     console.log('ComponentDidMount');
    //     console.log(`displayQuestions ${displayQuestions}`)
    // }, [displayQuestions]);

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

    // async function checkResult() {
    //     return await GetCategories();
    //     // console.log('Form', result[0].results[0].question);
    //     // console.log('Form', result);
    //     // return result;
    // }

    function checkResult() {
        console.log('CheckResult');
        return GetLink();
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
        let quizForm = displayForm ? <Example tab={(checkResult())}/> : '';

        let questions = displayQuestions ?
            <QuestionCard version={data} /> :
            '';

        return (
            <div>
                {message}
                {quizForm}
                {questions}
            </div>
        )
    }

    return (
        <div>
            {hideWelcomeMessageDisplayQuestion()}
        </div>
    );
}

export default WelcomePage;