import React from "react";
import Playlist from "./Playlist";
import axios from "axios";
import { withRouter } from "react-router-dom";
import SearchBar from "./SearchBar";

class PlaylistResult extends React.Component {
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

  loadPage() {
    const localToken = localStorage.getItem("spd_token");
    if (localToken) {
      axios("https://api.spotify.com/v1/search", {
        headers: {
          Authorization: "Bearer " + localToken
        },

        params: {
          q: this.props.match.params.query,
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
    } else {
      return this.props.history.push("/");
    }
  }
  componentDidUpdate(prevProps) {
    console.log(prevProps.match.params.query, this.props.match.params.query);
    if (prevProps.match.params.query !== this.props.match.params.query) {
      this.loadPage();
    }
  }

  componentDidMount() {
    this.loadPage();
  }
  render() {
    return (
      <div>
        <SearchBar />

        <Playlist playlists={this.state.playlist} />
      </div>
    );
  }
}

export default withRouter(PlaylistResult);
