import React, { Component, Fragment } from "react";
import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";

import { Provider } from "react-redux";
import store from "../store";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Alert from "./layout/Alert";

const alertOptions = {
  position: 'top right',
  timeout: 5000,
  transition: 'scale'
}

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Fragment>
            <Alert />
            <Header />
            <Dashboard />
          </Fragment>
        </AlertProvider>
      </Provider>
    );
  }
}
