import React, { useEffect, useState } from "react";
import axios from "axios";

function MovieDetails(props) {
  let [deets, setDeets] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5000/movies/${props.match.params.id}`)
      .then((res) => {
        console.log(res);
        setDeets(res.data);
      });
  }, []);

  return (
    <div>
      <h1>{deets.title}</h1>
      <img src={deets.image} alt="moviepic" />
      <h3>Showtimes:</h3>
      <ul>
        {deets.showtimes?.map((eachtime) => {
          return <li>{eachtime}</li>;
        })}
      </ul>
    </div>
  );
}

export default MovieDetails;
