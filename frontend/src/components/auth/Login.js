import { Link } from "react-router-dom";
import React, { Component } from "react";

export default class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  onChange = (event) => this.setState({ [event.target.id]: event.target.value });
  onSubmit = () => {};

  render() {
    const { username, password } = this.state;

    return (
      <div className='container pt-5'>
        <h3>Login</h3>
        <form className='my-4' onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <input type='text' className='form-control bg-dark text-light' id='username' value={username} onChange={this.onChange} />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input type='text' className='form-control bg-dark text-light' id='password' value={password} onChange={this.onChange} />
          </div>
          <button className='btn btn-primary px-5 mt-3'>Submit</button>
        </form>
        <p>
          New here? Create an <Link to='/register'>Account</Link>
        </p>
      </div>
    );
  }
}
