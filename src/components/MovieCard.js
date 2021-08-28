import React from "react";

const MovieCard = ({ posterUrl, title, type }) => (
  <div className="movie-card">
    <img
      src={posterUrl}
      alt={`${title} poster`}
      className="movie-card__poster"
    />

    <h2 className="movie-card__title">{title}</h2>

    <span className="movie-card__type">{type}</span>
    <h1>H</h1>
  </div>
);

export default MovieCard;
