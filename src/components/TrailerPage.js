import React from "react"
import { Link } from "react-router-dom"


function TrailerPage ({movies, watch}) {
   let movie= movies.find((el) => el.name === match.params.name);
   return(
    <div>
        <div>
            {" "}
            <h1 style={{ color: "white"}}> {movie.desc} </h1>{" "}
        </div>
        <button className="btn btn-primary">
            {" "}
            <Link to="/">return home</Link>{" "}
        </button>
    </div>
   ); 
}