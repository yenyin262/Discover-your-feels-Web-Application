import React, { Component } from "react";
import { authEndpoint, clientId, redirectUri, scopes } from "../config";
import hash from "../hash";
import logo from "../musicnote.svg";
import Home from "./Home";
class SpotifySignIn extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
      item: {
        album: {
          images: [{ url: "" }]
        },
        name: "",
        artists: [{ name: "" }],
        duration_ms: 0
      },
      is_playing: "Paused",
      progress_ms: 0
    };
  }
  componentDidMount() {
    // Set token
    let _token = hash.access_token;
    const localToken = localStorage.getItem("spd_token");
    if (localToken) {
      _token = localToken;
    }
    if (_token && !localToken) {
      localStorage.setItem("spd_token", _token);
    }
    if (_token) {
      // Set token
      this.setState({
        token: _token
      });
    }
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {!this.state.token && (
              <div style={{ padding: "20px", fontSize: "20px" }}>
                Login in with spotify to find your favorite playlists
              </div>
            ) && (
              <a
                className="btn btn--loginApp-link"
                href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                  "%20"
                )}&response_type=token&show_dialog=true`}
              >
                Login to Spotify
              </a>
            )}{" "}
          {this.state.token && (
            <Home token={this.state.token} playlists={this.state.playlist} />
          )}
        </header>
      </div>
    );
  }
}

export default SpotifySignIn;
