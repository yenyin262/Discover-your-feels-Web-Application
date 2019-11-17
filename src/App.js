import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SpotifySignIn from "./Components/SpotifySignIn";
import ViewPlaylistPage from "./Components/ViewPlaylistPage";
import "./App.css";
import PlaylistResult from "./Components/PlaylistResult";
import SearchBar from "./Components/SearchBar";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <SearchBar />
          <Route path="/" exact component={SpotifySignIn} />
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
