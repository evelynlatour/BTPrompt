import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import GetData from './GetData';

// apollo client setup
const client = new ApolloClient({
  // pass in endpoint that will handle all the graphQL queries
  uri: `http://`,
});


export default class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      // ApolloProvider takes data from the server and "injects" it into the Component
      <ApolloProvider client={client}>
        <div>
          <h1>Hello Test</h1>
          {/* <GetData /> */}
        </div>
      </ApolloProvider>
    );
  }
}
