import React, { Component } from "react";

class ShowClickUsingClass extends Component {
  state = { clicks: 0 };

  componentDidMount() {
    document.title = `clicks : ${this.state.clicks}`;
  }

  componentDidUpdate() {
    document.title = `clicks : ${this.state.clicks}`;
  }

  style = { width: "100%", height: "100vh" };

  render() {
    return (
      <div
        style={this.style}
        onClick={() => this.setState({ clicks: this.state.clicks + 1 })}
      />
    );
  }
}

export default ShowClickUsingClass;
