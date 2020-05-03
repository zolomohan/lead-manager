import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/auth.action';
import { returnError } from '../../actions/messages.action';

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
});

class Register extends Component {
  state = {
    email: '',
    username: '',
    password: '',
    confirmpassword: '',
  };

  onChange = (event) => this.setState({ [event.target.id]: event.target.value });
  onSubmit = (event) => {
    event.preventDefault();
    const { username, email, password, confirmpassword } = this.state;

    if(password != confirmpassword){
      this.props.returnError({passwordsNotMatch: "Passwords Do Not Match"});
      this.setState({password: '', confirmpassword: ''})
    }
    else
      this.props.registerUser(username, password, email);
  };

  render() {
    if (this.props.isAuthenticated) return <Redirect to='/' />;

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
            <input type='password' className='form-control bg-dark text-light' id='password' value={password} onChange={this.onChange} />
          </div>
          <div className='form-group'>
            <label htmlFor='confirmpassword'>Confirm Password</label>
            <input type='password' className='form-control bg-dark text-light' id='confirmpassword' value={confirmpassword} onChange={this.onChange} />
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

export default connect(mapStateToProps, { registerUser, returnError })(Register);
