import React, { Component, Fragment } from "react";

export default class GifImage extends Component {
  state = {
    loaded: false,
  };

  render() {
    const { imageBig } = this.props;
    return (
      <Fragment>
        {this.state.loaded ? null : (
          <div id="gif-placeholder">
            <i className="huge grey spinner loading icon" />
          </div>
        )}
        <img
          alt="gif"
          src={imageBig}
          style={this.state.loaded ? null : { display: `none` }}
          onLoad={() => this.setState({ loaded: true })}
        />
      </Fragment>
    );
  }
}
