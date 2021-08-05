import React, { Component } from "react";

export default class Shelf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shelf: this.props.shelf
    }

    this.mappedTitles = []
  };

  updateShelf() {
    this.mappedTitles = this.props.shelf.map((book) => (
      <div className="Shelf-entry">
        <p className="Book-text">{book.title}</p>
      </div>));
    return this.mappedTitles;
  }

  componentDidUpdate() {
    this.state.shelf = this.props.shelf
    this.render();
  }

  render() {
    return <div className="Book-shelf">
      <div className="Divider"></div>
      <div className="Shelf-column">
        <div className="Shelf-top">
          <h2 className="Shelf-header"> Your Shelf</h2>
          <button onClick={() => this.props.clearShelf()} className="Clear-shelf">clear shelf</button>
        </div>
        <div className="Shelf-list">{this.updateShelf()}</div>
      </div>
    </div>
  }
}
