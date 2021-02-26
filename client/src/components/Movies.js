import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Movies() {
  let [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/movies").then((res) => {
      console.log(res);
      setMovies(res.data);
    });
  }, []);

  const displayMovies = () => {
    return movies.map((eachMovie) => {
      return (
        <li>
          <img src={eachMovie.image} alt="movieImg" />
          <br />
          {eachMovie.title}
          <br />
          <Link to={`/movies/${eachMovie._id}`}>See More</Link>
        </li>
      );
    });
  };

  return <div>{displayMovies()}</div>;
}

export default Movies;
