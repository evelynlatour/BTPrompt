import React, { Component, Fragment } from "react";

export default class GifResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      something: ``,
    };
  }

  render() {
    const { searchString, gifData } = this.props;
    return (
      <Fragment>
        <h2>Results</h2>
        {gifData.map(({ title, imageBig }) => (
          <div key={imageBig}>
            <h3>{title}</h3>
            <div>
              <img alt="gif" style={{ height: `250px` }} src={imageBig} />
            </div>
          </div>
        ))}
      </Fragment>
    );
  }
}
