import React from "react";

const DisplayGifContent = ({ gif: { imageBig, url, title } }) => (
  <div>
    <h3 className="ui blue header">
      <a href={url} target="_blank">
        {title || `No Title`}
      </a>
    </h3>
    <div>
      <img alt="gif" style={{ height: `280px` }} src={imageBig} />
    </div>
  </div>
);

export default DisplayGifContent;
