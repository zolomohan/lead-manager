import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import React, { Component } from "react";
import { loginUser } from "../../actions/auth.action";

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
});

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  onChange = (event) => this.setState({ [event.target.id]: event.target.value });
  onSubmit = (event) => {
    event.preventDefault();
    this.props.loginUser(this.state.username, this.state.password);
  };

  render() {
    if (this.props.isAuthenticated) return <Redirect to='/' />;
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

export default connect(mapStateToProps, { loginUser })(Login);
