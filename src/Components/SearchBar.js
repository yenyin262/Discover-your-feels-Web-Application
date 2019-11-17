import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchMusic: ""
    };
  }

  onSearchInput = event => {
    this.setState({ searchMusic: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.searchMusic);
  };
  render() {
    return (
      <div className="search-bar" style={{ maxWidth: "50%", margin: "0 auto" }}>
        <form onSubmit={this.onFormSubmit}>
          <div
            className="field"
            style={{
              display: "flex",
              flexDirection: "column"
            }}
          >
            <label
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                paddingBottom: "20px"
              }}
            >
              Make your own playlists based on your mood.
            </label>
            <input
              style={{
                height: "50px",
                fontSize: "16px",
                padding: "20px"
              }}
              placeholder="Don't be afraid to type your 'feels' "
              type="text"
              value={this.state.searchMusic}
              onChange={this.onSearchInput}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
