import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class ViewPlaylistPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: []
    };
  }
  componentDidMount() {
    const localToken = localStorage.getItem("spd_token");
    if (localToken) {
      axios(
        `https://api.spotify.com/v1/playlists/${this.props.match.params.id}/tracks`,
        {
          headers: {
            Authorization: "Bearer " + localToken
          }
        }
      )
        .then(response => {
          console.log(response.data, "he2");
          this.setState({ songs: response.data.items });
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
  render() {
    return (
      <div>
        {this.state.songs.map(song => (
          <div key={song.track.id}>
            <div>{song.track.name}</div>
            <div>
              {song.track.artists.reduce(
                (acc, artist) => ((acc = acc + artist.name + " "), acc),
                ""
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default withRouter(ViewPlaylistPage);
