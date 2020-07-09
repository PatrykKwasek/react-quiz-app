import React from "react";
import {UploadAPI} from "../../fetchAPI";
import QuestionCard from "../QuestionCard/QuestionCard";

class FetchProcessing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: [],
            questionNumber: this.props.questionNumber,
            category: this.props.category,
            difficulty: this.props.difficulty,
        };

        // console.log('FetchProcessing - constructor');
    }

    componentDidMount() {
        // console.log('FetchProcessing - componentDidMount');
        UploadAPI().then(data => this.setState({
            questions: [data],
        }))
    }

    displayQuiz = () => {
        return (
            <div>
                <QuestionCard version={this.state.questions}/>
            </div>
        )
    };

    displayState = () => {
        return (
            this.state.questions.map((item, index) =>
                <div key={`Create list-${index}`}>
                    <p>{`Question ${index + 1} / ${this.state.questions.length}`}</p>
                    <h4>{item.question}</h4>
                </div>
            )
        )
    };

    render() {
        // console.log('FetchProcessing - render');

        return (
            <div>
                {/*{this.displayState()}*/}
                {this.state.questions !== [] && this.displayQuiz()}
                {/*{console.log(this.state.questions)}*/}
            </div>
        )
    }
}

export default FetchProcessing;