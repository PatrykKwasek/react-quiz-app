import React from "react";

const Button = ({className, item}) => {
    return (
        <button
            className={className}
            disabled={true}
        >
            {item}
        </button>
    )
};

const ShowQuestions = ({questionData, data, method}) => {
    return (
        questionData.map((item) =>
            item.results.map((element, index) =>
                <div key={`Create list-${index}`}>
                    <p>Question {index + 1} / {item.results.length}</p>
                    <p><strong>{element.question}</strong></p>
                    <div>{method(data[index], index)}</div>
                </div>
            )
        )
    )
};

class UserAnswers extends React.Component {
    state = {
        questionData: this.props.questionDb,
        userAnswers: this.props.answers,
        correctAnswers: this.props.correctness,
        data: this.props.shuffleData,
    };

    exampleAnswers = (arr, idx) => {
        let {userAnswers, correctAnswers} = this.state;

        return (
            arr.map((item, index) => {
                let className;
                if ((userAnswers[idx] === item.slice(3) && userAnswers[idx] === correctAnswers[idx]) ||
                    correctAnswers[idx] === item.slice(3)) {
                    className = 'correct-answer'
                } else if (userAnswers[idx] === item.slice(3) && userAnswers[idx] !== correctAnswers[idx]) {
                    className = 'incorrect-answer'
                } else {
                    className = 'custom'
                }

                return (
                    <p key={`Answers list-${index}`}>
                        <Button
                            className={className}
                            item={item}/>
                    </p>
                )
            })
        );
    };

    render() {
        const {questionData, data} = this.state;

        return (
            <div>
                <ShowQuestions
                    questionData={questionData}
                    data={data}
                    method={this.exampleAnswers}/>
            </div>
        );
    }
}

export default UserAnswers;