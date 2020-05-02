import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  error: state.errorReducer,
});

class Alert extends Component {

  componentDidUpdate(prevProps) {
    console.log(error);
    const { error, alert } = this.props;
    if (error !== prevProps.error) {
      if(error.message.name) 
        alert.error(`Name: ${error.message.name.join()}`)
      if(error.message.email) 
        alert.error(`Email: ${error.message.email.join()}`)
      if(error.message.message) 
        alert.error(`Message: ${error.message.message.join()}`)
    }
  }

  render() {
    return <Fragment />;
  }
}

export default connect(mapStateToProps)(withAlert()(Alert));
