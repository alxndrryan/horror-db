import React from "react";
import Input from "../components/Input";

function Login() {
  return (
    <div className="container login">
      <form className="form-signin">
        <i class="fas fa-ghost fa-5x"></i>
        <Input
          name={"Email address"}
          for={"inputEmail"}
          type={"email"}
          id={"inputEmail"}
          placeholder={"Email address"}
          required={""}
          autoComplete={"off"}
        />
        <Input
          name={"Password"}
          for={"inputPassword"}
          type={"password"}
          id={"inputPassword"}
          placeholder={"Password"}
          required={""}
          autoComplete={"off"}
        />

        <button
          className="btn btn-lg btn-primary btn-block custom-btn"
          type="submit"
        >
          Sign in
        </button>
      </form>

      <a
        className="btn btn-lg btn-block btn-social custom-btn"
        href="/auth/google"
        role="button"
      >
        <i className="fab fa-google"></i>
        Sign Up with Google
      </a>
    </div>
  );
}

export default Login;
