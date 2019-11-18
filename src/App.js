import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SpotifySignIn from "./Components/SpotifySignIn";
import ViewPlaylistPage from "./Components/ViewPlaylistPage";
import "./App.css";
import PlaylistResult from "./Components/PlaylistResult";
import Home from "./Components/Home";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Route path="/" exact component={SpotifySignIn} />
          <Route path="/Home" exact component={Home} />
          <Route
            path="/PlaylistResult/:query"
            exact
            component={PlaylistResult}
          />
          <Route
            path="/ViewPlaylistPage/:id"
            exact
            component={ViewPlaylistPage}
          />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
