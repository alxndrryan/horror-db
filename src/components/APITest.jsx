import React, { useState, useEffect } from "react";
require("dotenv").config();

function APITest() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const APIKey = process.env.REACT_APP_API_KEY;

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch(
      "http://www.omdbapi.com/?t=friday+the+13th&plot=full&apikey=" + APIKey
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          console.log(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [APIKey]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="jumbotron">
        <h1 className="display-4">
          {items.Title} ({items.Year})
        </h1>
        <p>
          {items.Rated} | {items.Runtime}
        </p>
        {/* <p>{items["Ratings"][2]["Value"]}</p> */}
        <img src={items.Poster} alt="Movie Poster" />
        <p className="lead">{items.Plot}</p>
        <p>Director: {items.Director}</p>
        <p>Writer: {items.Writer}</p>
        <p>Stars: {items.Actors}</p>
      </div>
    );
  }
}

export default APITest;
