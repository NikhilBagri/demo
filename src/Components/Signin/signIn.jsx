import React from "react";
import "./signIn.css";

const SignIn = () => {
  return (
    <div className="sign__in">
      <div className="left__side">
        <div className="Board">Board.</div>
      </div>
      <div className="right__side">
        <div className="right__inner">
          <div className="first_sign">Sign in</div>
          <div className="sign__into_your">Sign in to your account</div>
          <button className="google">Sign in with Google</button>
          <button className="apple">Sign in with Apple</button>
          <div className="sign__in2">
            <form className="form">
              <div className="input-container">
                <label className="email">Email address </label>
                <br />
                <input type="email" name="uname" required className="email2" />
              </div>
              <div className="input-container">
                <label className="pass">Password </label>
                <br />
                <input type="password" name="pass" required className="pass2" />
              </div>
              <div className="button-container">
                <button className="button__signin" type="button">
                  Sign in
                </button>
              </div>
            </form>
            <div className="forgot">Forget Password?</div>
          </div>
          <div className="register">
            Dont have an account?
            <span className="register2"> Register here</span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
