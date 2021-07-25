import React, { Component } from "react";

export default class SeachBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    }
  }

  handleClear() {
    this.setState({
      search: ""
    })
    this.props.reset();
  }

  handleClick() {
    this.props.filterBooks(this.state.search);
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  render() {
    return <>
      <input type="text" value={this.state.search} onChange={this.handleChange} className="search-input"></input>
      <button onClick={() => this.handleClick()} className="Search">
        Search
      </button>
      <button onClick={() => this.handleClear()} className="Clear-search">
        Clear Search
      </button>
    </>
  }
}
