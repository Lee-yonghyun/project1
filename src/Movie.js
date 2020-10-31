import React from "react";

const Movie = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <img src={props.poster} />
      <h1>{props.date}</h1>
    </div>
  );
};

export default Movie;
