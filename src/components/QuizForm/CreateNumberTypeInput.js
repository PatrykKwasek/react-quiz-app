import React from "react";

export const CreateNumberTypeInput = ({type, method, defaultValue}) => {
    return (
        <input type={type} onChange={method} defaultValue={defaultValue}/>
    )
};