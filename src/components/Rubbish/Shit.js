// import React from "react";
// import '../styles/styles.css'
// import UserResult from "./UserResult/UserResult";
// import WelcomeMessage from "./WelcomePage/WelcomeMessage";
//
// const joinAnswers = (obj) => {
//     let joinedAnswers = [];
//     let correctAnswer = obj.correct_answer;
//     let incorrectAnswers = obj.incorrect_answers;
//
//     joinedAnswers.push(correctAnswer);
//     for (let i = 0; i < incorrectAnswers.length; i++) {
//         joinedAnswers.push(incorrectAnswers[i]);
//     }
//
//     return joinedAnswers;
// };
//
// const shuffleAnswersTable = (tab) => {
//     let arr = tab.slice();
//     let shuffledArray = ['A. ', 'B. ', 'C. ', 'D. '];
//
//     for (let i = arr.length; i > 0; i--) {
//         let randomDigit = Math.floor(Math.random() * i);
//         let index = arr.indexOf(arr[randomDigit]);
//         if (arr[index] === undefined) {
//             if (shuffledArray.indexOf(arr[index]) !== -1) {
//                 shuffledArray[i-1] = shuffledArray[i-1] + arr[index];
//             }
//         } else {
//             shuffledArray[i-1] = shuffledArray[i-1] + arr[index];
//         }
//
//         arr.splice(index, 1);
//     }
//
//     return shuffledArray;
// };
//
// const CreateBackMenuButton = ({method, className, txt}) => {
//     return (
//         <button
//             onClick={method}
//             className={className}
//         >
//             {txt}
//         </button>
//     )
// };
//
// class QuestionCard extends React.Component {
//     state = {
//         questionData: this.props.version,
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
//
//         console.log('Version ', version);
//
//         let getFirstObjectElement = version[0].results[0];
//         let questionsTable = this.shuffleAnswersTable(this.joinAnswers(getFirstObjectElement));
//
//         this.setState({
//             questionsTable,
//             questionData: version,
//         });
//     }
//
//     // joinAnswers = (obj) => {
//     //     let joinedAnswers = [];
//     //     let correctAnswer = obj.correct_answer;
//     //     let incorrectAnswers = obj.incorrect_answers;
//     //
//     //     joinedAnswers.push(correctAnswer);
//     //     for (let i = 0; i < incorrectAnswers.length; i++) {
//     //         joinedAnswers.push(incorrectAnswers[i]);
//     //     }
//     //
//     //     return joinedAnswers;
//     // };
//     //
//     // shuffleAnswersTable = (tab) => {
//     //     let arr = tab.slice();
//     //     let shuffledArray = ['A. ', 'B. ', 'C. ', 'D. '];
//     //
//     //     for (let i = arr.length; i > 0; i--) {
//     //         let randomDigit = Math.floor(Math.random() * i);
//     //         let index = arr.indexOf(arr[randomDigit]);
//     //         if (arr[index] === undefined) {
//     //             if (shuffledArray.indexOf(arr[index]) !== -1) {
//     //                 shuffledArray[i-1] = shuffledArray[i-1] + arr[index];
//     //             }
//     //         } else {
//     //             shuffledArray[i-1] = shuffledArray[i-1] + arr[index];
//     //         }
//     //
//     //         arr.splice(index, 1);
//     //     }
//     //
//     //     return shuffledArray;
//     // };
//
//     checkAnswerCorrectness = () => {
//         const {questionData, activeIndex, userAnswer, userAnswersArrayResult} = this.state;
//
//         let checkAnswerCorrectness = (userAnswer === questionData[0].results[activeIndex].correct_answer) ?
//             userAnswersArrayResult.concat(1):
//             userAnswersArrayResult.concat(0);
//
//         this.setState({
//             userAnswersArrayResult: checkAnswerCorrectness,
//             userAnswer: '',
//             chosenAnswers: this.state.chosenAnswers.concat(userAnswer),
//             correct: this.state.correct.concat(this.state.questionData[0].results[activeIndex].correct_answer),
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
//         let getFirstObjectElement = questionData[0].results[activeIndex + 1];
//         let questionsTable = this.shuffleAnswersTable(this.joinAnswers(getFirstObjectElement));
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
//     answersList = () => {
//         const {questionsTable, buttonClicked} = this.state;
//
//         return (
//             questionsTable.map((item, index) => {
//                     let id = `button${index + 1}`;
//                     let className = (buttonClicked === id) ? "clicked-button" : "inactive-button";
//
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
//         console.log(questionData);
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
//                     <CreateBackMenuButton
//                         method={this.showStartMenu}
//                         className={'btn'}
//                         txt={'BACK TO MENU'}/>
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
//                     <p>{appropriateButton}</p>
//                 </div>
//             </div>
//         );
//
//         let welcomeMessage = displayWelcomeMessage ? <WelcomeMessage /> : '';
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
//                 {this.state.questionData.length !== 0 && this.createQuestionsList(this.state.questionData)}
//             </div>
//         )
//     }
// }
//
// export default QuestionCard;