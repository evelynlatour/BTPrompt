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
        {gifData.map(({ title, imageBig }) => (
          <div key={title} style={{margin: '3rem'}}>
            <h3 className="ui violet header">{title ? title : "No Title"}</h3>
            <div>
              <img alt="gif" style={{ height: `250px` }} src={imageBig} />
            </div>
          </div>
        ))}
      </Fragment>
    );
  }
}
