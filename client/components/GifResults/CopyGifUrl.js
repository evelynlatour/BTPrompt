import React from "react";

const CopyGifUrl = ({ handleCopy, embedUrl }) => (
  <div className="ui small action input" style={{ marginTop: `.8rem` }}>
    <input id={embedUrl} type="text" value={embedUrl} style={{ width: `20rem` }} readOnly />
    <button
      className="ui blue right labeled small icon button"
      onClick={() => handleCopy(embedUrl)}
    >
      <i className="copy icon" />
      Copy Embed URL
    </button>
  </div>
);

export default CopyGifUrl;
