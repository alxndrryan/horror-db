import React from "react";
import Input from "./Input";

function Login() {
  return (
    <div className="container login">
      <form className="form-signin">
        <i class="fas fa-ghost fa-5x"></i>
        <Input
          name={"Email address"}
          for={"inputEmail"}
          sr={"sr-only"}
          type={"email"}
          id={"inputEmail"}
          className={"form-control"}
          placeholder={"Email address"}
          required={""}
          autoComplete={"off"}
        />
        <Input
          name={"Password"}
          for={"inputPassword"}
          sr={"sr-only"}
          type={"password"}
          id={"inputPassword"}
          className={"form-control"}
          placeholder={"Password"}
          required={""}
          autoComplete={"off"}
        />
        <div className="checkbox mb-3"></div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Sign in
        </button>
      </form>
      <div className="card social-block google-card">
        <div className="card-body">
          <a
            className="btn btn-block btn-social btn-google"
            href="/auth/google"
            role="button"
          >
            <i className="fab fa-google"></i>
            Sign Up with Google
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
