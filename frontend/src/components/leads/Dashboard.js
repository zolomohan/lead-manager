import React, { Component, Fragment } from 'react'
import Form from './Form';
import Lead from './Lead';

export default class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <Form />
        <Lead />
      </Fragment>
    )
  }
}
