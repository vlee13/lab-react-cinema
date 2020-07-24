import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Movies extends Component {
  state = {
    movies: [],
  };
  async componentDidMount() {
    let res = await axios.get("http://localhost:5000/movies");
    this.setState({
      movies: res.data,
    });
  }

  displayMovies = () => {
    return this.state.movies.map((eachMovie) => {
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

  render() {
    return <div>{this.displayMovies()}</div>;
  }
}

export default Movies;
