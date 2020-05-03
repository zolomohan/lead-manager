import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Register extends Component {
  state = {
    email: "",
    username: "",
    password: "",
    confirmpassword: "",
  };

  onChange = (event) => this.setState({ [event.target.id]: event.target.value });
  onSubmit = () => {};

  render() {
    const { username, email, password, confirmpassword } = this.state;

    return (
      <div className='container pt-5'>
        <h3>New Account</h3>
        <form className='my-4' onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <input type='text' className='form-control bg-dark text-light' id='username' value={username} onChange={this.onChange} />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type='text' className='form-control bg-dark text-light' id='email' value={email} onChange={this.onChange} />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input type='text' className='form-control bg-dark text-light' id='password' value={password} onChange={this.onChange} />
          </div>
          <div className='form-group'>
            <label htmlFor='confirmpassword'>Confirm Password</label>
            <input type='text' className='form-control bg-dark text-light' id='confirmpassword' value={confirmpassword} onChange={this.onChange} />
          </div>
          <button className='btn btn-primary px-5 mt-3'>Submit</button>
        </form>
        <p>
          Already have an account? <Link to='/login'>Login</Link>
        </p>
      </div>
    );
  }
}
