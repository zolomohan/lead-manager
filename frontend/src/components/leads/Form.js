import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { addLead } from "../../actions/leads.action";

export default connect(null, { addLead })(
  class Form extends Component {
    state = {
      name: "",
      email: "",
      message: "",
    };

    onChange = (event) => this.setState({ [event.target.id]: event.target.value });
    onSubmit = (event) => {
      event.preventDefault();
      const { name, email, message } = this.state;
      this.props.addLead({ name, email, message });
      this.setState({
        name: "",
        email: "",
        message: "",
      });
    };

    render() {
      const { name, email, message } = this.state;

      return (
        <Fragment>
          <div className='container pt-5'>
            <h3>New Lead</h3>
            <form onSubmit={this.onSubmit}>
              <div className='form-group mt-4'>
                <label htmlFor='name'>Name</label>
                <input type='text' className='form-control bg-dark text-light' id='name' value={name} onChange={this.onChange} />
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input type='text' className='form-control bg-dark text-light' id='email' value={email} onChange={this.onChange} />
              </div>
              <div className='form-group'>
                <label htmlFor='message'>Message</label>
                <input type='text' className='form-control bg-dark text-light' id='message' value={message} onChange={this.onChange} />
              </div>
              <button className='btn btn-primary px-5 mt-3'>Submit</button>
            </form>
          </div>
        </Fragment>
      );
    }
  }
);
