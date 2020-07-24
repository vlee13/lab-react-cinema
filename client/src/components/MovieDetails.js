import React, { Component } from "react";
import axios from "axios";

class MovieDetails extends Component {
  state = {
    movie: [],
  };
  async componentDidMount() {
    console.log("did you make it here?");
    let res = await axios.get(
      `http://localhost:5000/movies/${this.props.match.params.id}`
    );
    console.log("HELLO", res.data);
    this.setState({
      movie: res.data,
    });
  }

  render() {
    return <div>{this.state.movie.title}</div>;
  }
}

export default MovieDetails;
