import React, { Component, Fragment } from "react";

/* Each image's state begins as loaded: false, causing a "loading" placeholder
div to be displayed instead of img (display set to none).
On img load, state is flipped and image displayed instead. */

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
