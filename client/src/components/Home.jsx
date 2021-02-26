import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  let [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/movies").then((res) => {
      console.log(res);
      setMovies(res.data);
    });
  }, []);

  const getTheMovies = () => {
    return movies.map((eachMovie) => {
      return <li>{eachMovie.title}</li>;
    });
  };

  return (
    <div>
      <h1>Cinema Ironhack</h1>
      <Link to="/movies">
        <button onClick={getTheMovies}>Check the Movies</button>
      </Link>
      <Link to="/newmovie">
        <button>Add New Movie</button>
      </Link>
    </div>
  );
}

export default Home;
