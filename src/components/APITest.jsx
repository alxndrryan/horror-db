import React, { useState, useEffect } from "react";
require("dotenv").config();

function APITest() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const hi = process.env.REACT_APP_API_KEY;
  console.log(hi);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("http://www.omdbapi.com/?t=friday+the+13th&apikey=37d70c58")
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
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul style={{ color: "red" }}>
        <li>h1</li>
        <li>{items.Title}</li>
        <li>{items.Year}</li>
      </ul>
    );
  }
}

export default APITest;
