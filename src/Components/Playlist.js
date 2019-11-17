import React, { Component } from "react";
import { Link } from "react-router-dom";

class Playlist extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { playlists } = this.props;
    return (
      <div
        style={{
          display: "flex",
          maxWidth: "100vw",
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >
        {playlists.map(playlist => (
          <div key={playlist.id} style={{ flex: "1 1 25%" }}>
            <div style={{ padding: "20px" }}>
              <Link to={`/ViewPlaylistPage/${playlist.id}`}>
                <img
                  src={playlist.images[0].url}
                  style={{ maxWidth: "250px" }}
                />
              </Link>
            </div>

            <div style={{ fontSize: "12" }}> {playlist.name}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Playlist;
