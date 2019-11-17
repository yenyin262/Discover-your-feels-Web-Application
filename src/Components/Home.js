import React, { Component } from "react";
import SearchBar from "./SearchBar";
import axios from "axios";
// import * as $ from "jquery";
import Playlist from "./Playlist";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playlist: [],
      showPlaylist: undefined
    };
  }

  getPlaylist = playlist => {
    if (playlist) {
      this.setState({ playlist });
    }
  };

  searchSubmit = searchMusic => {
    axios("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: "Bearer " + this.props.token
      },

      params: {
        q: searchMusic,
        type: "playlist"
      }
    })
      .then(response => {
        console.log(response.data.playlists.items, "hellos");
        this.getPlaylist(response.data.playlists.items);
      })
      .catch(error => {
        if (error.response.status === 401) {
          localStorage.removeItem("spd_token");
          window.location.reload();
        }
      });
  };

  render() {
    return (
      <div>
        <SearchBar onFormSubmit={this.searchSubmit} />
        <Playlist
          playlists={this.state.playlist}
          //   onClick={playlist => this.setState({ showPlaylist: playlist })}
        />
      </div>
    );
  }
}

export default Home;
