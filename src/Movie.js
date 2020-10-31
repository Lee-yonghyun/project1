import React from "react";
import MoviePost from "./MoviePost";
import PropTypes from "prop-types";

const Movie = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <MoviePost img={props.poster} />
      <h1>{props.date}</h1>
    </div>
  );
};

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
};

export default Movie;
