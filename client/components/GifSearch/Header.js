import React from "react";

const Header = () => (
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
);

export default Header;
