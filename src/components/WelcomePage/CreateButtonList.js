import React from "react";

export const CreateButtonList = ({tab, method, className}) => {
    return (
        tab.map((item, index) =>
            <p key={`Answers list-${index}`}>
                <button onClick={method} className={className}>
                    {item.button}
                </button>
            </p>
        )
    )
};