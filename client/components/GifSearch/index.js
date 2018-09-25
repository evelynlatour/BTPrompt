import React, { Component, Fragment } from "react";
import { composeRequest, getSelectData } from "../../utils/giphy";
import axios from "axios";
import GifResults from "../GifResults";
import Header from "./Header";
import SearchBar from "./SearchBar";
import NoGifsError from "./NoGifsError";
import ShowMoreGifs from "./ShowMoreGifs";

export default class GifSearch extends Component {
  state = {
    searchString: ``,
    gifData: [],
    gifsToDisplay: [],
    noResults: false,
    amountOfGifsToDisplay: 10,
    additionalGifsToDisplay: 10,
    gifsToRequestFromApi: 20,
    additionalGifsToRequest: 20,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const {
      searchString,
      amountOfGifsToDisplay,
      gifsToRequestFromApi,
      additionalGifsToRequest,
    } = this.state;

    const {
      data: { data },
    } = await axios.get(composeRequest(searchString, gifsToRequestFromApi));
    const result = getSelectData(data);
    console.log(result);

    result.length
      ? this.setState(prevState => ({
        gifData: [...result],
        gifsToDisplay: [...result].slice(0, amountOfGifsToDisplay),
        gifsToRequestFromApi: prevState.gifsToRequestFromApi + additionalGifsToRequest,
      }))
      : this.setState({ noResults: true });
  };

  clearInput = () => {
    this.setState({ searchString: ``, gifData: [], noResults: false });
  };

  handleShowMoreGifs = () => {
    const {
      gifData, gifsToDisplay, amountOfGifsToDisplay, additionalGifsToDisplay,
    } = this.state;

    const newAmountOfGifsToDisplay = amountOfGifsToDisplay + additionalGifsToDisplay;

    this.setState({
      gifsToDisplay: [
        ...gifsToDisplay,
        ...gifData.slice(amountOfGifsToDisplay, newAmountOfGifsToDisplay),
      ],
      amountOfGifsToDisplay: newAmountOfGifsToDisplay,
    });
  };

  handleAdditionalApiCall = async (event) => {
    await this.handleSubmit(event);
    this.handleShowMoreGifs();
  };

  render() {
    const {
      searchString, gifData, noResults, gifsToDisplay,
    } = this.state;

    return (
      <Fragment>
        <Header />
        <SearchBar
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          clearInput={this.clearInput}
          gifData={gifData}
          searchString={searchString}
          noResults={noResults}
        />
        {noResults && <NoGifsError />}
        {gifData.length ? (
          <Fragment>
            <GifResults gifsToDisplay={gifsToDisplay} />
            <ShowMoreGifs
              gifsToDisplay={gifsToDisplay}
              gifData={gifData}
              handleShowMoreGifs={this.handleShowMoreGifs}
              handleAdditionalApiCall={this.handleAdditionalApiCall}
            />
          </Fragment>
        ) : null}
      </Fragment>
    );
  }
}
