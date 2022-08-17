import React from "react";
import ChallengeRules from "../components/ChallengeRules";
import Details from "./Details";
export default function Challenge() {
  return (
    <div className="challenges-container">
      <h1
        style={{
          textAlign: "center",
          fontSize: "30px",
          paddingTop: "30px",
        }}
      >
        Mannequin Challenge
      </h1>
      <div className="challenge-rules-container">
        <ChallengeRules />
        <div className="challenge-button-container">
          <div className="challenge-buttons"> ACCEPT CHALLENGE </div>
          <div className="challenge-buttons"> SUBMISSIONS(50) </div>
        </div>
        <Details />
      </div>
    </div>
  );
}

