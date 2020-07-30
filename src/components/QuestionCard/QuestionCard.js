import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';
import UserResult from "../UserResult/UserResult";
import WelcomePage from "../WelcomePage/WelcomePage";
import {joinAnswers, shuffleAnswersTable} from "./methods";
import {CreateButton} from "./CreateButton";
import {AnswersList} from "./AnswersList";
import {GetQuestions} from "../../fetchAPI";
import geographyData from "../../data/category/geography/geographyData";

function QuestionCard({questionNumber, category, difficulty, version}) {
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

    useEffect(() => {
        version ? loadExampleQuestion() : loadQuestions();
    }, []);

    const loadExampleQuestion = () => {
        const loadedExampleQuestions = version;
        setQuestionData(loadedExampleQuestions);
        setQuestionsTable(shuffleAnswersTable(joinAnswers(loadedExampleQuestions[activeIndex])));
    };

    const loadQuestions = async () => {
        const loadedQuestions = await GetQuestions(questionNumber, category, difficulty);
        setQuestionData(loadedQuestions);
        setQuestionsTable(shuffleAnswersTable(joinAnswers(loadedQuestions[activeIndex])));
    };

    const checkAnswerCorrectness = () => {
        let checkAnswerCorrectness = (userAnswer === questionData[activeIndex].correct_answer) ?
            userAnswersArrayResult.concat(1):
            userAnswersArrayResult.concat(0);

        setUserAnswersArrayResult(checkAnswerCorrectness);
        setUserAnswer('');
        setChosenAnswers(chosenAnswers.concat(userAnswer));
        setCorrect(correct.concat(questionData[activeIndex].correct_answer));
        setShuffledAnswers(shuffledAnswers.concat([questionsTable]));
    };

    const showStartMenu = () => {
        setDisplayWelcomeMessage(true);
        setHideQuestion(true);
    };

    const hideQuestionDisplayStatistics = () => {
        checkAnswerCorrectness();

        setHideQuestion(true);
        setDisplayStatistics(true);
    };

    const handleNextQuestion = () => {
        let getFirstObjectElement = questionData[activeIndex + 1];
        let questionsTable = shuffleAnswersTable(joinAnswers(getFirstObjectElement));

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
        let clickedAnswer = e.target.innerText.slice(3);

        setUserAnswer(clickedAnswer);
        setButtonClicked(id);
    };

    const createQuestionsList = (questionData) => {
        let data = [];

        // console.log('questionData', questionData);
        // console.log('questionsTable1', questionsTable);
        // console.log('data before', data);

        questionData.map(item =>
            data.push(item)
        );


        // console.log('questionsTable2', questionsTable);
        // console.log('data after', data);

        // console.log('questionData', questionData);

        let numberOfQuestions = data.length;
        let correctAnswers = userAnswersArrayResult.filter((item) => (item === 1)).length;
        let quizResult = (correctAnswers / data.length) >= 0.5 ?
            <strong>PASSED</strong> :
            <strong>FAILED</strong>;

        let appropriateButton = userAnswer === '' ?
            '' :
            (data.length - 1 === activeIndex) ?
                <CreateButton
                    method={hideQuestionDisplayStatistics}
                    className={''}
                    txt={'Show statistics'}
                    condition={false}
                /> :
                <CreateButton
                    method={handleNextQuestion}
                    className={''}
                    txt={'Next question'}
                    condition={false}
                />;

        let content = (
            <div key={`Create list-${activeIndex}`} className={'question-card'}>
                <p className={'number-of-question'}>Question {activeIndex + 1} / {data.length}</p>
                <p className={'question'}>
                    <strong>{data[activeIndex].question}</strong>
                </p>

                <div className={'answers'}>
                    <AnswersList
                        questionsTable={questionsTable}
                        buttonClicked={buttonClicked}
                        method={checkAnswer}
                    />
                </div>

                <div className={'appropriate-button'}>
                    <p>{appropriateButton}</p>
                </div>

                <p className={'back-to-menu'}>
                    <CreateButton
                        method={showStartMenu}
                        className={'button-back-to-menu'}
                        txt={'BACK TO MENU'}
                    />
                </p>
            </div>
        );

        let welcomeMessage = displayWelcomeMessage ? <WelcomePage /> : '';
        let message = hideQuestion ? '' : content;
        let question = displayStatistics ?
            <UserResult
                result={quizResult}
                numberOfQuestions={numberOfQuestions}
                correctAnswers={correctAnswers}
                chosenAnswers={chosenAnswers}
                correct={correct}
                shuffledAnswers={shuffledAnswers}
                sendInfo={questionData}/> :
            '';

        return (
            <>
                {welcomeMessage}
                {message}
                {question}
            </>
        )
    };

    return (
        <>
            {questionData.length !== 0 && (createQuestionsList(questionData))}
        </>
    )
}

// class QuestionCard extends React.Component {
//     state = {
//         questionData: this.props.version,
//         questionNumber: this.props.questionNumber,
//         category: this.props.category,
//         difficulty: this.props.difficulty,
//         activeIndex: 0,
//         userAnswersArrayResult: [],
//         userAnswer: '',
//         questionsTable: [],
//         buttonClicked: '',
//         chosenAnswers: [],
//         correct: [],
//         shuffledAnswers: [],
//         hideQuestion: false,
//         displayStatistics: false,
//         displayWelcomeMessage: false,
//     };
//
//     componentDidMount() {
//         let {version} = this.props;
//         const {questionNumber, category, difficulty, questionData} = this.state;
//
//         // console.log('Version ', version);
//
//         let getFirstObjectElement = questionData[0];
//         let questionsTable = shuffleAnswersTable(joinAnswers(getFirstObjectElement));
//
//         async function loadData() {
//             const loadedData = await GetQuestions(questionNumber, category, difficulty);
//             console.log('LoadedData', loadedData);
//             return loadedData;
//         }
//
//         // console.log(loadData());
//         const chooseCorrectQuestionData = version.length < 1 ? loadData() : version;
//
//         this.setState({
//             questionsTable,
//             questionData: chooseCorrectQuestionData,
//         });
//     }
//
//     checkAnswerCorrectness = () => {
//         const {questionData, activeIndex, userAnswer, userAnswersArrayResult} = this.state;
//
//         console.log('ROW QUESTION', questionData[activeIndex]);
//         console.log('CORRECT ANSWER OF RAW QUESTION', questionData[activeIndex].correct_answer);
//         console.log('USER ANSWER OF RAW QUESTION', userAnswer);
//
//         let checkAnswerCorrectness = (userAnswer === questionData[activeIndex].correct_answer) ?
//             userAnswersArrayResult.concat(1):
//             userAnswersArrayResult.concat(0);
//
//         console.log('CheckAnswerCorrectness', checkAnswerCorrectness);
//
//         this.setState({
//             userAnswersArrayResult: checkAnswerCorrectness,
//             userAnswer: '',
//             chosenAnswers: this.state.chosenAnswers.concat(userAnswer),
//             correct: this.state.correct.concat(this.state.questionData[activeIndex].correct_answer),
//             shuffledAnswers: this.state.shuffledAnswers.concat([this.state.questionsTable]),
//         });
//     };
//
//     showStartMenu = () => {
//         this.setState({
//             displayWelcomeMessage: true,
//             hideQuestion: true,
//         });
//     };
//
//     hideQuestionDisplayStatistics = () => {
//         this.checkAnswerCorrectness();
//
//         this.setState({
//             hideQuestion: true,
//             displayStatistics: true,
//         });
//     };
//
//     handleNextQuestion = () => {
//         let {activeIndex, questionData} = this.state;
//
//         let getFirstObjectElement = questionData[activeIndex + 1];
//         let questionsTable = shuffleAnswersTable(joinAnswers(getFirstObjectElement));
//
//         this.checkAnswerCorrectness();
//
//         if (activeIndex === questionData.length - 1) {
//             activeIndex = this.state.activeIndex;
//         } else {
//             activeIndex++;
//         }
//
//         this.setState({
//             activeIndex,
//             questionsTable,
//             buttonClicked: '',
//         });
//     };
//
//     checkAnswer = (e, id) => {
//         e.preventDefault();
//         let clickedAnswer = e.target.innerText.slice(3);
//
//         this.setState({
//             userAnswer: clickedAnswer,
//             buttonClicked: id,
//         });
//     };
//
//     createQuestionsList = (questionData) => {
//         const {displayWelcomeMessage, displayStatistics, hideQuestion} = this.state;
//         let {activeIndex, userAnswer, userAnswersArrayResult} = this.state;
//
//         let data = [];
//
//         questionData.map((item) =>
//             data.push(item)
//         );
//
//         console.log('questionData', questionData);
//
//         let numberOfQuestions = data.length;
//         let correctAnswers = userAnswersArrayResult.filter((item) => (item === 1)).length;
//         console.log('CorrectAnswers', correctAnswers);
//         let quizResult = (correctAnswers / data.length) >= 0.5 ?
//             <strong>PASSED</strong> :
//             <strong>FAILED</strong>;
//
//         let appropriateButton = userAnswer === '' ?
//             '' :
//             (data.length - 1 === activeIndex) ?
//                 <CreateButton
//                     method={this.hideQuestionDisplayStatistics}
//                     className={''}
//                     txt={'Show statistics'}
//                     condition={false}
//                 /> :
//                 <CreateButton
//                     method={this.handleNextQuestion}
//                     className={''}
//                     txt={'Next question'}
//                     condition={false}
//                 />;
//
//         let content = (
//             <div key={`Create list-${activeIndex}`} className={'question-card'}>
//                 <p className={'number-of-question'}>Question {activeIndex + 1} / {data.length}</p>
//                 <p className={'question'}>
//                     <strong>{data[activeIndex].question}</strong>
//                 </p>
//
//                 <div className={'answers'}>
//                     <AnswersList
//                         questionsTable={this.state.questionsTable}
//                         buttonClicked={this.state.buttonClicked}
//                         method={this.checkAnswer}
//                     />
//                 </div>
//
//                 <div className={'appropriate-button'}>
//                     <p>{appropriateButton}</p>
//                 </div>
//
//                 <p className={'back-to-menu'}>
//                     <CreateButton
//                         method={this.showStartMenu}
//                         className={'button-back-to-menu'}
//                         txt={'BACK TO MENU'}
//                     />
//                 </p>
//             </div>
//         );
//
//         let welcomeMessage = displayWelcomeMessage ? <WelcomePage /> : '';
//         let message = hideQuestion ? '' : content;
//         let question = displayStatistics ?
//             <UserResult
//                 result={quizResult}
//                 numberOfQuestions={numberOfQuestions}
//                 correctAnswers={correctAnswers}
//                 chosenAnswers={this.state.chosenAnswers}
//                 correct={this.state.correct}
//                 shuffledAnswers={this.state.shuffledAnswers}
//                 sendInfo={this.state.questionData}/> :
//             '';
//
//         return (
//             <>
//                 {welcomeMessage}
//                 {message}
//                 {question}
//             </>
//         )
//     };
//
//     render() {
//         return (
//             <>
//                 {/*{console.log('PROPER PATCH', this.state.questionData)}*/}
//                 {this.state.questionData.length !== 0 && (this.createQuestionsList(this.state.questionData))}
//             </>
//         )
//     }
// }

export default QuestionCard;

QuestionCard.propTypes = {
    version: PropTypes.array,
};
