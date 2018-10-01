import React, { Component } from 'react';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
// import gql from 'graphql-tag';

// component
import BookList from './components/BookList';
import AddBook from './components/AddBook';

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

// client
//   .query({
//     query: gql`
//       {
//         books {
//           name
//           genre
//           author {
//             name
//             age
//           }
//         }
//       }
//     `
//   })
//   .then(result => console.log(result));

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>My Book List..</h1>
          <BookList/>
          <AddBook/>
        </div>        
      </ApolloProvider>
    );
  }
}

export default App;
