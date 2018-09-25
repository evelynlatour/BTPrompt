import React from "react";

const SearchBar = ({
  handleChange,
  handleSubmit,
  clearInput,
  gifData,
  searchString,
  noResults,
}) => (
  <div id="search-wrapper">
    <form className="ui form">
      <div className="ui large action input">
        <input
          type="text"
          name="searchString"
          placeholder="enter text here"
          id="search-input"
          value={searchString}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="ui large button"
          disabled={!searchString}
          onClick={handleSubmit}
        >
          Go!
        </button>
        <i
          className={
            gifData.length || noResults
              ? `large undo teal alternate link icon`
              : `large disabled undo alternate icon`
          }
          id="clear-search-button"
          onClick={clearInput}
        />
      </div>
    </form>
  </div>
);

export default SearchBar;
