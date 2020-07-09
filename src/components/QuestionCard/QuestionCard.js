import React from "react";
import PropTypes from 'prop-types';
import UserResult from "../UserResult/UserResult";
import WelcomePage from "../WelcomePage/WelcomePage";
import {joinAnswers, shuffleAnswersTable} from "./methods";
import {CreateButton} from "./CreateButton";
import {AnswersList} from "./AnswersList";

class QuestionCard extends React.Component {
    state = {
        questionData: this.props.version,
        activeIndex: 0,
        userAnswersArrayResult: [],
        userAnswer: '',
        questionsTable: [],
        buttonClicked: '',
        chosenAnswers: [],
        correct: [],
        shuffledAnswers: [],
        hideQuestion: false,
        displayStatistics: false,
        displayWelcomeMessage: false,
    };

    componentDidMount() {
        let {version} = this.props;

        // console.log('Version ', version);

        let getFirstObjectElement = version[0].results[0];
        let questionsTable = shuffleAnswersTable(joinAnswers(getFirstObjectElement));

        this.setState({
            questionsTable,
            questionData: version,
        });
    }

    checkAnswerCorrectness = () => {
        const {questionData, activeIndex, userAnswer, userAnswersArrayResult} = this.state;

        let checkAnswerCorrectness = (userAnswer === questionData[0].results[activeIndex].correct_answer) ?
            userAnswersArrayResult.concat(1):
            userAnswersArrayResult.concat(0);

        this.setState({
            userAnswersArrayResult: checkAnswerCorrectness,
            userAnswer: '',
            chosenAnswers: this.state.chosenAnswers.concat(userAnswer),
            correct: this.state.correct.concat(this.state.questionData[0].results[activeIndex].correct_answer),
            shuffledAnswers: this.state.shuffledAnswers.concat([this.state.questionsTable]),
        });
    };

    showStartMenu = () => {
        this.setState({
            displayWelcomeMessage: true,
            hideQuestion: true,
        });
    };

    hideQuestionDisplayStatistics = () => {
        this.checkAnswerCorrectness();

        this.setState({
            hideQuestion: true,
            displayStatistics: true,
        });
    };

    handleNextQuestion = () => {
        let {activeIndex, questionData} = this.state;

        let getFirstObjectElement = questionData[0].results[activeIndex + 1];
        let questionsTable = shuffleAnswersTable(joinAnswers(getFirstObjectElement));

        this.checkAnswerCorrectness();

        if (activeIndex === questionData[0].results.length - 1) {
            activeIndex = this.state.activeIndex;
        } else {
            activeIndex++;
        }

        this.setState({
            activeIndex,
            questionsTable,
            buttonClicked: '',
        });
    };

    checkAnswer = (e, id) => {
        e.preventDefault();
        let clickedAnswer = e.target.innerText.slice(3);

        this.setState({
            userAnswer: clickedAnswer,
            buttonClicked: id,
        });
    };

    createQuestionsList = (questionData) => {
        const {displayWelcomeMessage, displayStatistics, hideQuestion} = this.state;
        let {activeIndex, userAnswer, userAnswersArrayResult} = this.state;

        let data = [];

        questionData.map((item) =>
            item.results.map((element) =>
                data.push(element)
            )
        );

        console.log(questionData);

        let numberOfQuestions = data.length;
        let correctAnswers = userAnswersArrayResult.filter((item) => (item === 1)).length;
        let quizResult = (correctAnswers / data.length) >= 0.5 ?
            <strong>PASSED</strong> :
            <strong>FAILED</strong>;

        let appropriateButton = userAnswer === '' ?
            '' :
            (data.length - 1 === activeIndex) ?
                <CreateButton
                    method={this.hideQuestionDisplayStatistics}
                    className={''}
                    txt={'Show statistics'}
                    condition={false}
                /> :
                <CreateButton
                    method={this.handleNextQuestion}
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
                        questionsTable={this.state.questionsTable}
                        buttonClicked={this.state.buttonClicked}
                        method={this.checkAnswer}
                    />
                </div>

                <div className={'appropriate-button'}>
                    <p>{appropriateButton}</p>
                </div>

                <p className={'back-to-menu'}>
                    <CreateButton
                        method={this.showStartMenu}
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
                chosenAnswers={this.state.chosenAnswers}
                correct={this.state.correct}
                shuffledAnswers={this.state.shuffledAnswers}
                sendInfo={this.state.questionData}/> :
            '';

        return (
            <div>
                {welcomeMessage}
                {message}
                {question}
            </div>
        )
    };

    render() {
        return (
            <div>
                {this.state.questionData.length !== 0 && this.createQuestionsList(this.state.questionData)}
            </div>
        )
    }
}

export default QuestionCard;

QuestionCard.propTypes = {
    version: PropTypes.array,
};



/////////////////////////////////
// function Example({version}) {
//     const [questionData, setQuestionData] = useState(version);
//     const [activeIndex, setActiveIndex] = useState(0);
//     const [userAnswersArrayResult, setUserAnswersArrayResult] = useState([]);
//     const [userAnswer, setUserAnswer] = useState('');
//     const [questionsTable, setQuestionsTable] = useState([]);
//     const [buttonClicked, setButtonClicked] = useState('');
//     const [chosenAnswers, setChosenAnswers] = useState([]);
//     const [correct, setCorrect] = useState([]);
//     const [shuffledAnswers, setShuffledAnswers] = useState([]);
//     const [hideQuestion, setHideQuestion] = useState(false);
//     const [displayStatistics, setDisplayStatistics] = useState(false);
//     const [displayWelcomeMessage, setDisplayWelcomeMessage] = useState(false);
//
//     useEffect(() => {
//         console.log('Version ', version);
//
//         let getFirstObjectElement = version[0].results[0];
//         let questionsTable = shuffleAnswersTable(joinAnswers(getFirstObjectElement));
//
//         setQuestionsTable(questionsTable);
//         setQuestionData(version);
//
//         // this.setState({
//         //     questionsTable,
//         //     questionData: version,
//         // });
//     });
//
// }