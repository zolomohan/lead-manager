import React, { Component, Fragment } from "react";
import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";
import Login from "./auth/Login";
import Register from "./auth/Register";
import PrivateRoute from "./common/PrivateRoute";

import { Provider } from "react-redux";
import store from "../store";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Alert from "./layout/Alert";

import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";

const alertOptions = {
  position: "top right",
  timeout: 5000,
  transition: "scale",
};

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Alert />
              <Header />
              <Switch>
                <PrivateRoute exact path='/' component={Dashboard} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/Register' component={Register} />
              </Switch>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}
