import React, { Component, Fragment } from "react";
import GifResults from "./GifResults";
import { composeRequest, getSelectData } from "../utils/giphy";
import axios from "axios";

export default class App extends Component {
  state = {
    searchString: ``,
    gifData: [],
    noResults: false,
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
    result.length ? this.setState({ gifData: [...result] }) : this.setState({ noResults: true });
  };

  clearInput = (event) => {
    event.preventDefault();
    this.setState({ searchString: ``, gifData: [], noResults: false });
  };

  render() {
    const { searchString, gifData, noResults } = this.state;
    return (
      <Fragment>
        <div className="ui middle aligned two column centered grid" style={{ margin: `4rem` }}>
          <div className="row">
            <div className="column">
              <h1 style={{ textAlign: `right` }}>Search for a gif using</h1>
            </div>
            <div className="column">
              <img
                alt=""
                style={{ width: `15rem` }}
                className="ui image"
                src="https://miro.medium.com/max/1400/1*cHv3GloBXiaWQ1Y8TVW7Ew.png"
              />
            </div>
          </div>
        </div>
        <div style={{ textAlign: `center`, paddingRight: `5.8rem`, marginBottom: `5rem` }}>
          <div className="ui large action input">
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
              onClick={this.clearInput}
            />
          </div>
        </div>
        {noResults && (
          <div style={{color: '#f4425c'}}>
            <h3>No gifs found! Please try again.</h3>
          </div>
        )}
        {gifData.length ? <GifResults {...this.state} /> : null}
      </Fragment>
    );
  }
}
