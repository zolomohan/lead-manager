import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  error: state.errorReducer,
  message: state.messageReducer 
});

class Alert extends Component {

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      if(error.message.name) 
        alert.error(`Name: ${error.message.name.join()}`)
      if(error.message.email) 
        alert.error(`Email: ${error.message.email.join()}`)
      if(error.message.message) 
        alert.error(`Message: ${error.message.message.join()}`)
    }

    if (message !== prevProps.message) {
      if(message.leadAdded)
        alert.success(message.leadAdded)
      if(message.leadDeleted)
        alert.success(message.leadDeleted)
    }
  }

  render() {
    return <Fragment />;
  }
}

export default connect(mapStateToProps)(withAlert()(Alert));
