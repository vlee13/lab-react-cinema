import React from "react";
import Home from "./components/Home";
import { Switch, Route } from "react-router-dom";
import Movies from "./components/Movies";
import MovieDetails from "./components/MovieDetails";
import NewMovie from "./components/NewMovie";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/movies" render={(props) => <Movies {...props} />} />
        <Route
          exact
          path="/movies/:id"
          render={(props) => <MovieDetails {...props} />}
        />
        <Route
          exact
          path="/newmovie"
          render={(props) => <NewMovie {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
