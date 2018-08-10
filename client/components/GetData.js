import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getGQL = gql`
  {
    stuff {
      stuff1
      stuff2
    }
  }
`;


class GetData extends Component {
  render() {
    return (
      <div>
        <h1>Get some data...</h1>
      </div>
    );
  }
}

export default graphql(GetData)(getGQL); // it's in the PROPS!
