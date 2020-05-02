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
    };

    render() {
      const { name, email, message } = this.state;

      return (
        <Fragment>
          <div className='container card card-body mt-4'>
            <h3>Add New Lead</h3>
            <form onSubmit={this.onSubmit}>
              <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input type='text' className='form-control' id='name' value={name} onChange={this.onChange} />
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input type='text' className='form-control' id='email' value={email} onChange={this.onChange} />
              </div>
              <div className='form-group'>
                <label htmlFor='message'>Message</label>
                <input type='text' className='form-control' id='message' value={message} onChange={this.onChange} />
              </div>
              <button className='btn btn-primary'>Submit</button>
            </form>
          </div>
        </Fragment>
      );
    }
  }
);
