import React from "react";

const SearchBar = ({
  handleChange,
  handleSubmit,
  clearInput,
  gifData,
  searchString,
  noResults,
}) => (
  <div style={{ textAlign: `center`, paddingRight: `5.8rem`, marginBottom: `5rem` }}>
    <form className="ui form">
      <div className="ui large action input">
        <input
          type="text"
          name="searchString"
          placeholder="enter text here"
          style={{ width: `300px` }}
          value={searchString}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="ui button"
          disabled={!searchString}
          onClick={handleSubmit}
          style={{ fontSize: `1.3rem` }}
        >
          Go!
        </button>
        <i
          className={
            gifData.length || noResults
              ? `large undo teal alternate link icon`
              : `large disabled undo alternate icon`
          }
          style={{
            position: `absolute`,
            top: `11px`,
            left: `400px`,
          }}
          onClick={clearInput}
        />
      </div>
    </form>
  </div>
);

export default SearchBar;
