import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App/App";
import './styles/styles.css'
import {GetQuestions} from "./fetchAPI";

function SendProps() {
    return (
        <div>
            <Exam amount={22} category={15} difficulty={'medium'}/>
        </div>
    )
}

function Exam({amount, category, difficulty}) {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        loadQuestions();
    }, []);

    const loadQuestions = async () => {
        const loadedQuestions = await GetQuestions(amount, category, difficulty);
        setBooks(loadedQuestions);
    };

    const createAnswer = (data) => {
        let results = [];

        data.map((item) =>
            results.push(item)
        );

        return (
            <ol>
                {results.map((question, index) => (
                    <li key={index}>{question.question} | {question.correct_answer}</li>
                ))}
            </ol>
        )
    };

    return (
        <>
            {books.length !== 0 && (createAnswer(books))}
        </>
    )
}

// class Example extends React.Component {
//     state = {
//         books: [],
//     };
//
//     componentDidMount = async () => {
//         this.setState({
//             books: await GetQuestions(this.props.amount, this.props.category, this.props.difficulty),
//         })
//     };
//
//     createAnswer = (data) => {
//         let results = [];
//
//         data.map((item) =>
//             results.push(item)
//         );
//
//         return (
//             <ol>
//                 {results.map((question, index) => (
//                     <li key={index}>{question.question} | {question.correct_answer}</li>
//                 ))}
//             </ol>
//         )
//     };
//
//     render() {
//         return (
//             <>
//                 {this.state.books.length !== 0 && (this.createAnswer(this.state.books))}
//             </>
//         )
//     }
// }

ReactDOM.render(
    <App />,
    document.getElementById('root')
);