import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import axios from "axios";

function Navbar() {
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
    <nav className="navbar navbar-expand-lg navbar-light custom-nav">
      <Link to="/">
        <a className="navbar-brand custom-brand" href="#">
          Horror DB
        </a>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Profile
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#" tabindex="-1">
              Logout
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search by title..."
            name={"title"}
            for={"inputTitle"}
            type={"text"}
            id={"inputTitle"}
            placeholder={"Search by title..."}
            value={title}
            required={""}
            autoComplete={"off"}
            onChange={handleChange}
          />
          <Link to="/login">
            <button
              className="btn btn-outline-success my-2 my-sm-0 custom-btn"
              type="submit"
              onClick={handleClick}
            >
              Search
            </button>
          </Link>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
