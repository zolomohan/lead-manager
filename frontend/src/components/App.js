import React, { Component, Fragment } from "react";
import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Dashboard />
      </Fragment>
    );
  }
}
