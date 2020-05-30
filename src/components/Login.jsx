import React from "react";

function Login() {
  return (
    <form className="form-signin">
      <img
        className="mb-4"
        src="/docs/4.5/assets/brand/bootstrap-solid.svg"
        alt=""
        width="72"
        height="72"
      />
      <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
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
  );
}

export default Login;
