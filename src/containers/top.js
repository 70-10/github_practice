import React from "react";
import Container from "react-micro-container";
import Top from "../components/Top";

export default class TopContainer extends Container {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Top dispatch={this.dispatch} {...this.state} />
    );
  }
}
