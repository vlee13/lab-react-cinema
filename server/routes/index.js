const express = require("express");
const router = express.Router();
const Movies = require("../models/Movies.model");

/* GET home page */
router.get("/", (req, res) => {
  console.log("called");
  res.json({ message: "index" });
});

router.get("/movies", (req, res) => {
  Movies.find().then((movies) => {
    res.json(movies);
  });
});

router.get("/movies/:id", (req, res) => {
  console.log("made it to the back");
  Movies.findById(req.params.id)
    .then((eachMovie) => {
      console.log("got the movies");
      res.json(eachMovie);
    })
    .catch((err) => {
      console.log("ERROR");
    });
});

router.post("/newmovies", (req, res) => {
  Movies.create(req.body).then((newMovie) => {
    res.json(newMovie);
  });
});

module.exports = router;
