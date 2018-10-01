import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import { getBookQuery } from "../queries/queries";

class BookDetails extends Component {
  displayBookDetails = () => {
    const { book } = this.props.data;
    if(book) {
      return (
        <div id="book-details">
          <h2>{ book.name }</h2>
          <h4>{ book.genre }</h4>
          <h3>{ book.author.name }</h3>
          <p>{ book.author.age }</p>
          <p>Other books by author</p>
          <ul>{ 
            book.author.books.map(item => <li key={ item.id }>{ item.name }</li> )
          }
          </ul>
        </div>
      )
    } else {
      return (<div>No Details for this book</div> )
    }
  }
  render() {
    return (
      <div>
      { this.displayBookDetails() }
      </div>
    );
  }
}

export default graphql(getBookQuery, {
  options: (props) => {
    return {
      variables: { id: props.bookId }
    }
  }
})(BookDetails);
