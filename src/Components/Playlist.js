import React, { Component } from "react";
import { Link } from "react-router-dom";

class Playlist extends Component {
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
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to={{
                pathname: `/ViewPlaylistPage/${playlist.id}`,
                state: { playlist }
              }}
            >
              <div style={{ padding: "20px" }}>
                {playlist.images.length && (
                  <img
                    src={playlist.images[0].url}
                    style={{ maxWidth: "250px" }}
                    alt="album-art"
                  />
                )}
              </div>

              <div style={{ fontSize: "16px" }}> {playlist.name}</div>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Playlist;
