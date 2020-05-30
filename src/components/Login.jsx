import React from "react";

function Login() {
  return (
    <div className="container login">
      <form className="form-signin">
        <i class="fas fa-ghost fa-5x"></i>
        <label for="inputEmail" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          required=""
          autofocus=""
          autoComplete="off"
        />
        <label for="inputPassword" className="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required=""
          autoComplete="off"
        />
        <div className="checkbox mb-3"></div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Sign in
        </button>
      </form>
      <div className="card social-block">
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
