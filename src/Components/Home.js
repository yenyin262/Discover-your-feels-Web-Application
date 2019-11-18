import React, { Component } from "react";
import SearchBar from "./SearchBar";
import { withRouter } from "react-router-dom";

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
    this.props.history.push(`/PlaylistResult/${searchMusic}`);
  };

  render() {
    return (
      <div>
        {" "}
        <SearchBar onFormSubmit={this.searchSubmit} />{" "}
      </div>
    );
  }
}

export default withRouter(Home);
