import React from "react";
import StarRating from "./StarRating";
import { BrowserRouter as Router, Switch, Route, Link, } from 'react-router-dom';
import { moviesData } from "../data";

const MovieCard = ({ film }) => {
  return (
    <div className="movie-card">
      <StarRating rate={film.rating} />
      <img src={film.image} alt={film.name} />
      <h3> {film.name} </h3>
      <p> {film.date} </p>
      <Router>
      <button className="btn btn-primary">
        <Link to={`/TrailerPage/${film.name}`}>Descreption</Link>
      </button>
      <Switch>
        <Route path="/moviesdata" component={moviesData} />
      </Switch>
    </Router>
    
    </div>
  );
};



export default MovieCard;
