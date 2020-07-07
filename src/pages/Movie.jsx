import React from "react";
import MovieCall from "../components/MovieCall";
import APITest from "../components/APITest";
import DevMovie from "../components/DevMovie";

function Movie() {
  return (
    <div className="container-fluid">
      <DevMovie />
      <MovieCall />
      <APITest />
    </div>
  );
}

export default Movie;
