import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  message: state.messageReducer 
});

class Alert extends Component {

  componentDidUpdate(prevProps) {
    const { alert, message } = this.props;
    if (message.error !== prevProps.message.error) {
      if(message.error.username) 
        alert.error(`Username: ${message.error.username.join()}`)
      if(message.error.password) 
        alert.error(`Password: ${message.error.password.join()}`)
      if(message.error.name) 
        alert.error(`Name: ${message.error.name.join()}`)
      if(message.error.email) 
        alert.error(`Email: ${message.error.email.join()}`)
      if(message.error.message) 
        alert.error(`Message: ${message.error.message.join()}`)
      if(message.error.non_field_errors)
        alert.error(message.error.non_field_errors)
    }
    if(message.success !== prevProps.message.success)
        alert.success(message.success)
  }

  render() {
    return <Fragment />;
  }
}

export default connect(mapStateToProps)(withAlert()(Alert));
