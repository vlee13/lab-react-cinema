import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Home extends Component {
  async callMyBackend() {
    // this is an example call to our backend
    let responseFromBackend = await axios.get("http://localhost:5000/movies");
    console.log(responseFromBackend);
  }

  render() {
    return (
      <div>
        <h1>Cinema Ironhack</h1>
        <Link to="/movies">
          <button onClick={this.callMyBackend}>Check the Movies</button>
        </Link>
        <Link to="/newmovie">
          <button>Add New Movie</button>
        </Link>
      </div>
    );
  }
}
