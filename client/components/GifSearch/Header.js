import React from "react";

const Header = () => (
  <div className="ui middle aligned grid">
    <div className="two column row">
      <div className="right aligned column">
        <h1>Search for a gif using</h1>
      </div>
      <div className="left aligned column">
        <img
          alt=""
          id="header-image"
          src="https://miro.medium.com/max/1400/1*cHv3GloBXiaWQ1Y8TVW7Ew.png"
        />
      </div>
    </div>
  </div>
);

export default Header;