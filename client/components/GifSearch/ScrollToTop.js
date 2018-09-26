import React, { Component, Fragment } from "react";

export default class ScrollToTop extends Component {
  state = {
    showScrollButton: false,
  };

  componentDidMount() {
    window.addEventListener(`scroll`, this.handleScroll);
  }

  // handles when to show or hide the scroll to top button
  handleScroll = () => {
    const yScroll = window.scrollY;
    const heightToAppear = 350;

    yScroll > heightToAppear
      ? this.setState({ showScrollButton: true })
      : this.setState({ showScrollButton: false });
  };

  render() {
    return (
      <Fragment>
        {this.state.showScrollButton && (
          <i
            className="big circular inverted teal angle up link icon"
            id="scroll-to-top-button"
            onClick={() => window.scrollTo(0, 0)}
          />
        )}
      </Fragment>
    );
  }
}
