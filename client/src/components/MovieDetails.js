import React, { useState } from "react";
import axios from "axios";

function MovieDetails(props) {
  let [deets, setDeets] = useState({});

  axios
    .get(`http://localhost:5000/movies/${props.match.params.id}`)
    .then((res) => {
      console.log(res);
      setDeets(res.data);
    });

  return <div>{deets.title}</div>;
}

export default MovieDetails;
