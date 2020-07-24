import React, {useState} from "react";
import PropTypes from 'prop-types';
import {CreateButton} from "../QuestionCard/CreateButton";
import WelcomePage from "../WelcomePage/WelcomePage";

function ShowQuestions ({questionData, data, method, userAnswers, correctAnswers}) {
    const [hideStatistics, setHideStatistics] = useState(false);

    function showMessage() {
        setHideStatistics(true);
    }

    function showAnswers() {
        let content =  (
            <>
                {questionData.map((item) =>
                    item.results.map((element, index) =>
                        <div key={`Create list-${index}`} className={'user-answers'}>
                            <p>
                                Question {index + 1} / {item.results.length}
                            </p>
                            <p>
                                <strong>
                                    {element.question}
                                </strong>
                            </p>
                            <div>
                                {method(data[index], index, userAnswers, correctAnswers)}
                            </div>
                        </div>
                    )
                )}
                <div className={'answers-back-home-button'}>
                    <CreateButton method={showMessage} className={'custom-btn'} txt={'Back to menu'}/>
                </div>
            </>


        );

        let hideStats = hideStatistics ? <WelcomePage /> : content;

        return (
            <>
                {hideStats}
            </>
        )
    }

    return (
        <>
            {showAnswers()}
        </>
    )
}

export default ShowQuestions;

ShowQuestions.propTypes = {
    questionData: PropTypes.array,
    data: PropTypes.array,
    method: PropTypes.func,
    userAnswers: PropTypes.array,
    correctAnswers: PropTypes.array,
};