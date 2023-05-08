import "./sign.css";
const SignIn = () => {
  return (
    <div className="sign-in">
      <div className="right-side" />
      <div className="left-side" />
      <b className="board">Board.</b>
      <div className="login-form">
        <div className="card">
          <div className="card1" />
        </div>
        <div className="input-field">
          <div className="input-field1" />
        </div>
        <div className="input" />
        <div className="div">••••••••</div>
        <div className="login-form-child" />
        <div className="button-sign-in">
          <div className="button-primary">
            <div className="button-primary1" />
          </div>
          <b className="sign-in1">Sign In</b>
        </div>
        <div className="email-address">Email address</div>
        <div className="johndoegmailcom">johndoe@gmail.com</div>
        <div className="password">Password</div>
        <div className="forgot-password">Forgot password?</div>
        <div className="dont-have-an-container">
          <span>{`Don’t have an account? `}</span>
          <span className="register-here">Register here</span>
        </div>
      </div>
      <div className="google-sign-in">
        <div className="white">
          <div className="button" />
        </div>
        <div className="sign-in-with">Sign in with Google</div>
        <img className="google-icon-1" alt="" src="/googleicon-1.svg" />
      </div>
      <div className="apple-sign-in">
        <div className="white">
          <div className="button" />
        </div>
        <div className="sign-in-with1">Sign in with Apple</div>
        <img className="apple-1-icon" alt="" src="/apple-1.svg" />
      </div>
      <b className="sign-in2">Sign In</b>
      <div className="sign-in-to">Sign in to your account</div>
    </div>
  );
};

export default SignIn;
