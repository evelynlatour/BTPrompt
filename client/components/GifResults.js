import React, { Component, Fragment } from "react";

export default class GifResults extends Component {
  handleCopy = (embedUrl) => {
    const copyText = document.getElementById(embedUrl);
    copyText.select();
    document.execCommand(`copy`);
  };

  render() {
    const { searchString, gifData } = this.props;
    return (
      <Fragment>
        {gifData.map(({
          title, imageBig, url, imageSmall, embedUrl,
        }) => (
          <div key={embedUrl} style={{ marginBottom: `4.5rem` }}>
            <h3 className="ui blue header"> <a href={url} target="_blank">{title || `No Title`}</a></h3>
            <div>
              <img alt="gif" style={{ height: `280px` }} src={imageBig} />
            </div>

            <div className="ui small action input" style={{ marginTop: `.8rem` }}>
              <input
                id={embedUrl}
                type="text"
                value={embedUrl}
                style={{ width: `20rem` }}
                readOnly
              />
              <button
                className="ui blue right labeled small icon button"
                onClick={() => this.handleCopy(embedUrl)}
              >
                <i className="copy icon" />
                Copy Embed URL
              </button>
            </div>
          </div>
        ))}
      </Fragment>
    );
  }
}
