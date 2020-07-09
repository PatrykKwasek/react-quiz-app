import React from "react";

export const ShowQuestions = ({questionData, data, method}) => {
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