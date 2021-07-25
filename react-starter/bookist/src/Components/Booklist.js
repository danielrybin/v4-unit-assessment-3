import React, { Component } from "react";


export default class Booklist extends Component {
  constructor(props) {
    super(props);

    this.mappedBooks = this.props.books.map((book, index) => (
      <div className="Book">
        <img onClick={() => this.props.addToShelf(book)} className="Book-image" src={book.img} key={index} />
        <sub className="Book-text"> {book.title} by {book.author}</sub>
      </div>));
  };

  render() {
    return <div className="Book-list">
      {this.mappedBooks}
    </div>
  }
}
