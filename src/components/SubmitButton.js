import React from "react";

export default function SubmitButton(props){
    return (
        <div className="auth-submit-button-container">
            <button className="auth-submit-button" onClick={props.onClick}>
                SUBMIT
            </button>
        </div>
    )
}