import React, { useState, useEffect } from "react";
import axios from "axios";
import Input from "../components/Input";

function Search() {
  const APIKey = process.env.REACT_APP_API_KEY;
  const [title, setTitle] = useState("");
  const [movie, setMovie] = useState(null);

  function handleChange(e) {
    setTitle(e.target.value);
    // console.log(e.target.value);
  }

  function handleClick(e) {
    console.log("clicked", { title });
    let obj = { title };
    console.log(obj.title);
    var replaced = obj.title.replace(/ /g, "+");
    console.log(replaced);
    e.preventDefault();

    fetchData(replaced);
  }

  const fetchData = async (movieTitle) => {
    const response = await axios.get(
      "http://www.omdbapi.com/?t=" + movieTitle + "&plot=full&apikey=" + APIKey
    );
    console.log(movieTitle);
    setMovie(response.data);
    console.log(response.data);
  };
  return (
    <div>
      <div className="container login">
        <form className="form-signin">
          <h5>Find A Movie</h5>
          <Input
            name={"title"}
            for={"inputTitle"}
            type={"text"}
            id={"inputTitle"}
            placeholder={"Title"}
            value={title}
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
    </div>
  );
}

export default Search;
