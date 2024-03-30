import React from "react";
import "./MovieListing.scss";
import { getAllMovies, getAllShows } from "../../features/Movies/MovieSlice";
import { useSelector } from "react-redux";
import Moviecard from "../Moviecard/Moviecard";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let renderMovies,
    renderShows = "";
  renderMovies =
    movies.Response === "true" ? (
      movies.Search.map((movie, index) => (
        <Moviecard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.error}</h3>
      </div>
    );
    
  renderShows =
    shows.Response === "true" ? (
      shows.Search.map((show, index) => <Moviecard key={index} data={show} />)
    ) : (
      <div className="shows-error">
        <h3>{shows.error}</h3>
      </div>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div>{renderMovies}</div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div>{renderShows}</div>
      </div>
    </div>
  );
};

export default MovieListing;
