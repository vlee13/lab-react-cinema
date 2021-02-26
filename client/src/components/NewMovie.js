import React, { useState } from "react";
import axios from "axios";

function NewMovie() {
  let [newMovie, setNewMovie] = useState({});

  const handleChange = (e) => {
    setNewMovie({
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/newmovies", newMovie).then((res) => {
      alert(res.data);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="title"
          type="text"
          placeholder="Movie Title"
        />
        <input
          onChange={handleChange}
          name="director"
          type="text"
          placeholder="Movie Director"
        />
        <button>Add movie</button>
      </form>
    </div>
  );
}

export default NewMovie;
