import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import gif from "../images/challenge.gif";
export default function ChallengeRules() {
  return (
    <div className="challenge-container">
      <figure className="challenge-media">
        <img src={gif} alt="challenge gif" />
      </figure>
      <div id="reward-details">
        <div id="challenge-progress">
          <div className="progress-header-container">
            <h2>$1,000 MAX REWARD</h2>
            <div className="tooltip">
              <FontAwesomeIcon icon={faCircleInfo} size="xl" />
            </div>
          </div>
          <div className="progress-bar"></div>
        </div>
        <div className="reward-instructions">
          use this creative, follow the creative inspiration, and get views to
          earn up to $1,000!
        </div>
        <div className="reward-given-out"></div>
      </div>
    </div>
  );
}
