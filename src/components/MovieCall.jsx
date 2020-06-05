import React, { useState } from "react";
import Input from "./Input";

function MovieCall() {
  const [title, setTitle] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    console.log(name, value);
  }

  function handleClick(e) {
    console.log("clicked");
    e.preventDefault();
  }

  return (
    <div className="container login">
      <form className="form-signin">
        <h5>Find A Movie</h5>
        <Input
          name={"title"}
          for={"inputTitle"}
          type={"text"}
          id={"inputTitle"}
          placeholder={"Title"}
          required={""}
          autoComplete={"off"}
          onChange={handleChange}
        />
        <button
          className="btn btn-lg btn-primary btn-block custom-btn"
          type="submit"
          onClick={handleClick}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default MovieCall;
