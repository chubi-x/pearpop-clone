import React from "react";
import { Link } from "react-router-dom";
import AuthButtons from "../components/AuthButtons";
import SubmitButton from "../components/SubmitButton";
export default function Register() {
  return (
    <>
      <div className="auth-container">
        <div className="auth-button-container">
          <AuthButtons target="register" selected={true} />
          <AuthButtons target="login" selected={false} />
        </div>
        <div className="form-container">
          <h2> create your account </h2> <p> get paid to make tiktok videos </p>
          <form>
            <input type="text" placeholder="first name" required />
            <br />
            <input type="text" placeholder="last name" required />
            <br />
            <input type="email" placeholder="email" required />
            <br />
            <input type="password" placeholder="password" required />
            <div className="form-paragraph">
              <p>
                by signing up to pearpop you agree to the
                <Link to="/"> terms of use </Link>
                and
                <Link to="/"> privacy policy </Link>
              </p>
            </div>
            <SubmitButton />
          </form>
          <div className="form-paragraph">
            <p>
              Already have an account ? <Link to="/login"> login </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

