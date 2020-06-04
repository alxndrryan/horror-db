import React from "react";
import Input from "./Input";

function MovieCall() {
  return (
    <div className="container login">
      <form className="form-signin">
        <h5>Find A Movie</h5>
        <Input
          name={"Title"}
          for={"inputTitle"}
          type={"text"}
          id={"inputTitle"}
          placeholder={"Title"}
          required={""}
          autoComplete={"off"}
        />
        <button
          className="btn btn-lg btn-primary btn-block custom-btn"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default MovieCall;
