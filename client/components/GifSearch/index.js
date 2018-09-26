import React, { Component, Fragment } from "react";
import { composeRequest, getSelectData } from "../../utils/giphy";
import axios from "axios";
import GifResults from "../GifResults";
import Header from "./Header";
import SearchBar from "./SearchBar";
import NoGifsError from "./NoGifsError";
import ShowMoreGifs from "./ShowMoreGifs";
import ScrollToTop from "./ScrollToTop";

export default class GifSearch extends Component {
  state = {
    searchString: ``,
    gifData: [],
    gifsToDisplay: [],
    noResults: false,
    amountOfGifsToDisplay: 5,
    additionalGifsToDisplay: 5,
    gifsToRequestFromApi: 20,
    additionalGifsToRequest: 20,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  /* Function fired at every new giphy API request:
  Initial search + request for more gifs beyond initial num of 'gifsToRequestFromApi' */
  handleSubmit = async (event) => {
    event.preventDefault();
    const {
      searchString,
      amountOfGifsToDisplay,
      gifsToRequestFromApi,
      additionalGifsToRequest,
    } = this.state;

    // Use helper func to construct url to hit correct giphy endpoint
    const { data: { data } } = await axios.get(composeRequest(searchString, gifsToRequestFromApi));

    // Use helper func to select only the data we are interested in from the API's response
    const result = getSelectData(data);
    console.log(result);

    /* Logic to handle initial number of gifs to display, increment the amount to request from
    API the next time a new request is triggered, and the event that no results returned 
    from search string */
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


  /* Handles displaying more gifs. Does not make new call to the API, just displays more
  from the gifData array. */
  handleShowMoreGifs = () => {
    const {
      gifData,
      gifsToDisplay,
      amountOfGifsToDisplay,
      additionalGifsToDisplay,
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

  /* Fires only when user has shown all gifs from gifData, and would like to see more.
  Makes another API request w/ new amount of gifsToRequestFromApi */
  handleAdditionalApiCall = async (event) => {
    await this.handleSubmit(event);
    this.handleShowMoreGifs();
  };

  render() {
    const {
      searchString,
      gifData,
      noResults,
      gifsToDisplay,
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
        <ScrollToTop />
      </Fragment>
    );
  }
}
