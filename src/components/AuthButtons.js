import React from "react";
import { Link } from "react-router-dom";
export default function AuthButtons(props) {
  return (
    <div
      className={`auth-button ${props.selected ? "auth-button-selected" : ""}`}
    >
      <Link to={`/${props.target}`}>{props.target.toUpperCase()}</Link>
    </div>
  );
}
