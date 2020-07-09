import React, {useState} from "react";
import {CreateInputLabel} from "./CreateInputLabel";
import {CreateNumberTypeInput} from "./CreateNumberTypeInput";
import {CreateCategorySelectTypeInput} from "./CreateCategorySelectTypeInput";
import {CreateDifficultySelectTypeInput} from "./CreateDifficultySelectTypeInput";
import {CreateButton} from "../QuestionCard/CreateButton";
import FetchProcessing from "../Api/FetchProcessing";
import {GetCategories} from "../../fetchAPI";
import WelcomePage from "../WelcomePage/WelcomePage";
import './Form.css';

function Form() {
    const [questionNumber, setQuestionNumber] = useState(10);
    const [category, setCategory] = useState(0);
    const [difficulty, setDifficulty] = useState('Any Difficulty');
    const [hideForm, setHideForm] = useState(false);
    const [welcomePage, setWelcomePage] = useState(false);
    const [questionCard, setQuestionCard] = useState(false);

    const submitObject = {
        questionNumber: 10,
        category: 5,
        difficulty: 'medium',
    };

    function handleQuestionsNumber(e) {
        setQuestionNumber(e.target.value);
    }

    function handleCategory(e) {
        setCategory(e.target.value);
    }

    function handleDifficulty(e) {
        setDifficulty(e.target.value);
    }

    function showQuestionCard(method) {
        // const result = GetQuestionsFromCategory(questionNumber, category, difficulty);
        console.log('TEST', method);

        setHideForm(true);
        setQuestionCard(true);
    }

    function showWelcomePage() {
        setHideForm(true);
        setWelcomePage(true);
    }

    async function checkResult() {
        const result = await GetCategories();
        // console.log('Form', result[0].results[0].question);
        console.log('Form', result);
        return result;
    }

    function categoryChange() {

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
                    <CreateCategorySelectTypeInput method={handleCategory} tab={checkResult} onCategoryChange={categoryChange}/>
                </p>

                <p>
                    <CreateInputLabel txt={'Difficulty: '} /><br/>
                    <CreateDifficultySelectTypeInput
                        method={handleDifficulty}
                        item={['Any difficulty', 'Easy', 'Medium', 'Hard']}
                    />
                </p>

                <p>
                    <CreateButton method={() => showQuestionCard(submitObject)} className={'form-button'} txt={'START'}/>
                    <CreateButton method={showWelcomePage} className={'form-button'} txt={'MENU'}/>
                </p>
            </form>
        );

        checkResult();

        let form = hideForm ? '' : content;
        let home = welcomePage ? <WelcomePage /> : '';

        let question = questionCard  ?
            <FetchProcessing
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
        <div>
            {formContent()}
        </div>
    )
}

export default Form;