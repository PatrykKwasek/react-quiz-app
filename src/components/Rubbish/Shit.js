// import React from "react";
// import '../styles/styles.css'
// import QuizStats from "./QuizStats";
// import WelcomeMessage from "./WelcomeMessage";
//
// export default class QuestionCard extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             questionData: this.props.version,
//             activeIndex: 0,
//             hideQuestion: false,
//             displayStatistics: false,
//             userAnswersArrayResult: [],
//             userAnswer: '',
//             displayWelcomeMessage: false,
//             buttonActivity: true,
//             buttonIdsArray: ["button1", "button2", "button3", "button4"],
//             chooseQuestion: [],
//             buttonClicked: '',
//         };
//     }
//
//     componentDidMount() {
//         let {questionData} = this.state;
//
//         let example = questionData[0].results[0];
//         let shuffledQuestion = this.shuffleAnswersTable(this.joinAnswers(example));
//
//         this.setState({
//             chooseQuestion: shuffledQuestion,
//         });
//
//         console.log('componentDidMount');
//     }
//
//     joinAnswers = (obj) => {
//         let joinedAnswers = [];
//         let correctAnswer = obj.correct_answer;
//         let incorrectAnswers = obj.incorrect_answers;
//
//         joinedAnswers.push(correctAnswer);
//         for (let i = 0; i < incorrectAnswers.length; i++) {
//             joinedAnswers.push(incorrectAnswers[i]);
//         }
//
//         return joinedAnswers;
//     };
//
//     shuffleAnswersTable = (tab) => {
//         let arr = tab.slice();
//         let shuffledArray = ['A. ', 'B. ', 'C. ', 'D. '];
//
//         for (let i = arr.length; i > 0; i--) {
//             let randomDigit = Math.floor(Math.random() * i);
//             let index = arr.indexOf(arr[randomDigit]);
//             if (arr[index] === undefined) {
//                 if (shuffledArray.indexOf(arr[index]) !== -1) {
//                     shuffledArray[i-1] = shuffledArray[i-1] + arr[index];
//                 }
//             } else {
//                 shuffledArray[i-1] = shuffledArray[i-1] + arr[index];
//             }
//
//             arr.splice(index, 1);
//         }
//
//         return shuffledArray;
//     };
//
//     checkAnswerCorrectness = () => {
//         let questionsData = this.state.questionData;
//         const {activeIndex, userAnswer, userAnswersArrayResult} = this.state;
//
//         let checkAnswerCorrectness = (userAnswer === questionsData[0].results[activeIndex].correct_answer) ?
//             userAnswersArrayResult.concat(1):
//             userAnswersArrayResult.concat(0);
//
//         this.setState({
//             userAnswersArrayResult: checkAnswerCorrectness,
//             userAnswer: '',
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
//         let example = questionData[0].results[activeIndex + 1];
//         let shuffledQuestion = this.shuffleAnswersTable(this.joinAnswers(example));
//         console.log(`Question - ${activeIndex + 1} : ${shuffledQuestion}`);
//
//         this.checkAnswerCorrectness();
//
//         if (activeIndex === questionData[0].results.length - 1) {
//             activeIndex = this.state.activeIndex;
//         } else {
//             activeIndex++;
//         }
//
//         this.setState({
//             activeIndex,
//             chooseQuestion: shuffledQuestion,
//             buttonActivity: true,
//             buttonClicked: '',
//         });
//     };
//
//     //NEW COMPONENT
//     checkAnswer = (e, id) => {
//         e.preventDefault();
//         let clickedAnswer = e.target.innerText.slice(3);
//
//         this.setState({
//             userAnswer: clickedAnswer,
//             buttonActivity: false,
//             buttonClicked: id,
//         });
//     };
//
//     //NEW COMPONENT WITHIN createQuestionsList
//     answersList = () => {
//         let tableOfAnswers = this.state.chooseQuestion;
//         const {buttonActivity, buttonClicked} = this.state;
//
//         return (
//             tableOfAnswers.map((item, index) => {
//                     let id = `button${index + 1}`;
//                     let className = buttonClicked === id ? "clicked-button" : buttonActivity ? "active-button" : "inactive-button"; //IF - ELSE
//                     return (
//                         <p key={`Answers list-${index}`}>
//                             <button
//                                 id={id}
//                                 onClick={(e) => this.checkAnswer(e,id)}
//                                 className={className}
//                             >
//                                 {item}
//                             </button>
//                         </p>
//                     )
//                 }
//             )
//         )
//     };
//
//     createQuestionsList = (questionData) => {
//         const {displayWelcomeMessage, displayStatistics, hideQuestion} = this.state;
//         let {activeIndex, userAnswer, userAnswersArrayResult} = this.state;
//
//         let data = [];
//
//         questionData.map((item) =>
//             item.results.map((element) =>
//                 data.push(element)
//             )
//         );
//
//         let numberOfQuestions = data.length;
//         let correctAnswers = userAnswersArrayResult.filter((item) => (item === 1)).length;
//         let quizResult = (correctAnswers / data.length) >= 0.5 ?
//             <strong>PASSED</strong> :
//             <strong>FAILED</strong>;
//
//         let appropriateButton = userAnswer === '' ?
//             '' :
//             (data.length - 1 === activeIndex) ?
//                 <button onClick={this.hideQuestionDisplayStatistics}>Show statistics</button> :
//                 <button onClick={this.handleNextQuestion}>Next question</button>;
//
//         let content = (
//             <div key={`Create list-${activeIndex}`}>
//                 <p>
//                     <button onClick={this.showStartMenu} className={'btn'}>BACK TO MENU</button>
//                 </p>
//                 <p>Question {activeIndex + 1} / {data.length}</p>
//                 <p>
//                     <strong>{data[activeIndex].question}</strong>
//                 </p>
//
//                 <div className={'answers'}>
//                     {this.answersList()}
//                 </div>
//
//                 <div>
//                     {/*<p>{`Correct answer:  ${data[activeIndex].correct_answer}`}</p>*/}
//                     {/*<p>{`User answer:  `}<strong>{userAnswer}</strong></p>*/}
//                 </div>
//
//                 <div>
//                     <p>{appropriateButton}</p>
//                 </div>
//             </div>
//         );
//
//         let welcomeMessage = displayWelcomeMessage ? <WelcomeMessage /> : '';
//         let message = hideQuestion ? '' : content;
//         let question = displayStatistics ?
//             <QuizStats
//                 result={quizResult}
//                 numberOfQuestions={numberOfQuestions}
//                 correctAnswers={correctAnswers}
//                 sendInfo={this.state.questionData}/> :
//             '';
//
//         return (
//             <div>
//                 {welcomeMessage}
//                 {message}
//                 {question}
//             </div>
//         )
//     };
//
//     render() {
//         return (
//             <div>
//                 {this.createQuestionsList(this.state.questionData)}
//             </div>
//         )
//     }
// }