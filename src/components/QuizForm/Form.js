import React, {useState} from "react";
import {CreateInputLabel} from "./CreateInputLabel";
import {CreateNumberTypeInput} from "./CreateNumberTypeInput";
import {CreateCategorySelectTypeInput} from "./CreateCategorySelectTypeInput";
import {CreateDifficultySelectTypeInput} from "./CreateDifficultySelectTypeInput";
import {CreateButton} from "../QuestionCard/CreateButton";
import WelcomePage from "../WelcomePage/WelcomePage";
import QuestionCard from "../QuestionCard/QuestionCard";
import './Form.css';

function Form({categoriesData}) {
    const [questionNumber, setQuestionNumber] = useState(10);
    const [category, setCategory] = useState(0);
    const [difficulty, setDifficulty] = useState('');
    const [hideForm, setHideForm] = useState(false);
    const [welcomePage, setWelcomePage] = useState(false);
    const [questionCard, setQuestionCard] = useState(false);

    function handleQuestionsNumber(e) {
        setQuestionNumber(e.target.value);
    }

    function handleCategory(e) {
        setCategory(e.target.value);
    }

    function handleDifficulty(e) {
        setDifficulty(e.target.value);
    }

    function showQuestionCard() {
        setHideForm(true);
        setQuestionCard(true);
    }

    function showWelcomePage() {
        setHideForm(true);
        setWelcomePage(true);
    }

    function formContent() {
        let content = (
            <form className={'form'}>
                <p>
                    <CreateInputLabel txt={'Number of Questions: '} /><br/>
                    <CreateNumberTypeInput
                        type={'number'}
                        method={handleQuestionsNumber}
                        defaultValue={10}
                    />
                </p>

                <p>
                    <CreateInputLabel txt={'Category: '} /><br/>
                    <CreateCategorySelectTypeInput method={handleCategory} tab={categoriesData}/>
                </p>

                <p>
                    <CreateInputLabel txt={'Difficulty: '} /><br/>
                    <CreateDifficultySelectTypeInput
                        method={handleDifficulty}
                        item={['Any difficulty', 'Easy', 'Medium', 'Hard']}
                    />
                </p>

                <p>
                    <CreateButton method={showQuestionCard} className={'form-button'} txt={'START'}/>
                    <CreateButton method={showWelcomePage} className={'form-button'} txt={'MENU'}/>
                </p>
            </form>
        );

        let form = hideForm ? '' : content;
        let home = welcomePage ? <WelcomePage /> : '';

        let question = questionCard  ?
            <QuestionCard
                questionNumber={questionNumber}
                category={category}
                difficulty={difficulty}
            /> :
            '';

        return (
            <div className={'form-container'}>
                {form}
                {home}
                {question}
            </div>
        )
    }

    return (
        <>
            {formContent()}
        </>
    )
}

export default Form;
