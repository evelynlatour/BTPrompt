import React from "react";

const ShowMoreGifs = ({
  gifsToDisplay, gifData, handleAdditionalApiCall, handleShowMoreGifs,
}) => (
  <button
    className="ui teal button"
    style={{ marginBottom: `4rem` }}
    onClick={
      gifData.length === gifsToDisplay.length
        ? () => handleAdditionalApiCall(event)
        : handleShowMoreGifs
    }
  >
    More Gifs Please
  </button>
);

export default ShowMoreGifs;
