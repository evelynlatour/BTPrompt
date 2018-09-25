import React, { Component, Fragment } from "react";
import CopyGifUrl from "./CopyGifUrl";
import DisplayGifContent from "./DisplayGifContent";

export default class GifResults extends Component {
  handleCopy = (embedUrl) => {
    const copyText = document.getElementById(embedUrl);
    copyText.select();
    document.execCommand(`copy`);
  };

  render() {
    const { gifsToDisplay } = this.props;
    return (
      <Fragment>
        {gifsToDisplay.map(gif => (
          <div key={gif.embedUrl} className="gif">
            <DisplayGifContent gif={gif}/>
            <CopyGifUrl embedUrl={gif.embedUrl} handleCopy={this.handleCopy} />
          </div>
        ))}
      </Fragment>
    );
  }
}
