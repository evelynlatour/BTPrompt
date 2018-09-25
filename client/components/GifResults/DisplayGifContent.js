import React from "react";
import GifImage from './GifImage'

const DisplayGifContent = ({ gif: { imageBig, url, title } }) => (
  <div>
    <h3 className="ui blue header">
      <a href={url} target="_blank">
        {title || `No Title`}
      </a>
    </h3>
    <div>
      {/* <img alt="gif" src={imageBig} /> */}
      <GifImage imageBig={imageBig} />
    </div>
  </div>
);

export default DisplayGifContent;
