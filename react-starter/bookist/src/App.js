import React, { Component } from "react";
import './App.css';

import Header from "./Components/Header";
import Booklist from "./Components/Booklist";
import Shelf from "./Components/Shelf";
import SearchBar from "./Components/SearchBar";
import data from './data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shelf: new Array,
      books: data
    };
    this.filteredBooks = [];
    this.reset = this.reset.bind(this);
    this.filterBooks = this.filterBooks.bind(this);
    this.clearShelf = this.clearShelf.bind(this);
    this.addToShelf = this.addToShelf.bind(this);
  }

  reset() {
    console.log("reset called");
    this.setState({
      books: data
    })
  }

  filterBooks(input) {
    console.log("filter books called: " + input)
    this.filteredBooks = this.state.books.filter(function (index) {
      if (index.title.toLowerCase().includes(input.toLowerCase()) ||
        index.author.toLowerCase().includes(input.toLowerCase()))
        return true;
    })
    this.state.books = this.filteredBooks;
  }

  addToShelf(book) {
    this.setState(
      {
        shelf: [...this.state.shelf, book].reduce(
          (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
          [],
        )
      }, () => { console.log(this.state.shelf) });
  }

  clearShelf() {
    this.setState(
      {
        shelf: []
      }
    )
  }

  render() {
    return <html lang="en">
      <Header></Header>
      <body className="App-body">
        <div className="Nav-bar">
          <SearchBar filterBooks={this.filterBooks} reset={this.reset}></SearchBar>
        </div>
        <div className="Content-area">
          <Booklist books={this.state.books} addToShelf={this.addToShelf}></Booklist>
          <Shelf shelf={this.state.shelf} clearShelf={this.clearShelf}></Shelf>
        </div>
      </body>
    </html>
  }
}

export default App;
