import React from "react";

export const CreateDifficultySelectTypeInput = ({method}) => {
    return (
        <select onChange={method}>
            <option value="any_difficulty">Any Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
        </select>
    )
};