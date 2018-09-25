import React from "react";

const ShowMoreGifs = ({
  gifsToDisplay, gifData, handleAdditionalApiCall, handleShowMoreGifs,
}) => (
  <button
    className="ui large pink button"
    id="show-more-gifs-button"
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
