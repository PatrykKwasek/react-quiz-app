import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App/App";
import './styles/styles.css'
import {UploadAPI} from "./fetchAPI";

export const GetQuestions = (questionNumber, category, difficulty) => {
    const questions = [];
    // const host = `https://opentdb.com/api.php?amount=10&category=23&difficulty=hard&type=multiple`;
    const host = `https://opentdb.com/api.php?amount=${questionNumber}&category=${category}&difficulty=${difficulty}&type=multiple`;

    return UploadAPI(host).then(data => {
        console.log('HOST', data.results);
        questions.push(data.results);

        return questions[0];
    });
};

class SendProps extends React.Component {
    render() {
        return (
            <div>
                <Example amount={22} category={15} difficulty={'medium'}/>
            </div>
        )
    }
}

class Example extends React.Component {
    state = {
        books: [],
    };

    componentDidMount = async () => {
        this.setState({
            books: await GetQuestions(this.props.amount, this.props.category, this.props.difficulty),
        })
    };

    createAnswer = (data) => {
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

    render() {
        return (
            <>
                {this.state.books.length !== 0 && (this.createAnswer(this.state.books))}
            </>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);