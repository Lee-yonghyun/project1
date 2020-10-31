import React from "react";
import PropTypes from "prop-types";

const MoviePost = (props) => {
  return <img src={props.img} alt="movie image" />;
};

MoviePost.propTypes = {
  img: PropTypes.string.isRequired,
};

export default MoviePost;
