import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import styles from "./ViewPlaylistPage.module.css";

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
      <div style={{ display: "flex", flexWrap: "wrap", padding: "20px" }}>
        <div className={styles.playlistWrapper}>
          <div
            className={[styles.playlistTitleColumn, styles.columnStyles].join(
              " "
            )}
          >
            Title
          </div>
          <div
            className={[styles.playlistArtistColumn, styles.columnStyles].join(
              " "
            )}
          >
            Artist
          </div>
          <div
            className={[styles.playlistAlbumColumn, styles.columnStyles].join(
              " "
            )}
          >
            Album{" "}
          </div>
        </div>
        {this.state.songs.map(song => (
          <div className={styles.playlistWrapper} key={song.track.id}>
            <div className={styles.playlistTitleColumn}>{song.track.name}</div>
            <div className={styles.playlistArtistColumn}>
              {song.track.artists.reduce(
                (acc, artist) => ((acc = acc + artist.name + " "), acc),
                ""
              )}
            </div>

            <div className={styles.playlistAlbumColumn}>
              {song.track.album.name}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default withRouter(ViewPlaylistPage);
