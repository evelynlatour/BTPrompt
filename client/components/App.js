import React, { Component, Fragment } from "react";
import GifResults from "./GifResults";
import { composeRequest, getSelectData } from "../utils/giphy";
import axios from "axios";

export default class App extends Component {
  state = {
    searchString: ``,
    gifData: [],
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`searched for term:`, this.state.searchString);
    const { searchString } = this.state;
    // get data from giphy search api
    const {
      data: { data },
    } = await axios.get(composeRequest(searchString));
    const result = getSelectData(data);
    console.log(result);
    this.setState({ gifData: [...result] });
  };

  clearInput = (event) => {
    event.preventDefault();
    this.setState({ searchString: ``, gifData: [] });
  };

  render() {
    const { searchString, gifData } = this.state;
    return (
      <Fragment>
        <h1>search for a gif</h1>
        <div>
          <div className="ui action input">
            <input
              type="text"
              name="searchString"
              placeholder="enter text here"
              style={{ width: `300px` }}
              value={searchString}
              onChange={this.handleChange}
            />
            <button
              type="submit"
              className="ui button"
              disabled={!searchString}
              onClick={this.handleSubmit}
            >
              Go!
            </button>
            <button
              type="clear"
              style={{ marginLeft: `1rem` }}
              className="ui button"
              disabled={!gifData.length}
              onClick={this.clearInput}
            >
              Clear
            </button>
          </div>
        </div>
        {gifData.length ? <GifResults {...this.state} /> : null}
      </Fragment>
    );
  }
}
