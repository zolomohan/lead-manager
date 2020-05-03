import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/auth.action";

const mapStateToProps = (state) => ({
  auth: state.authReducer,
});

class Header extends Component {
  render() {
    const { user, isAuthenticated } = this.props.auth;
    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
        <div className='container'>
          <a className='navbar-brand' href='#'>
            Lead Manager
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ml-auto'>
              {isAuthenticated ? (
                <Fragment>
                  <span className='navbar-text mr-3'>{`Welcome, ${user.username}`}</span>
                  <li className='nav-item'>
                    <button className='btn btn-link nav-link' onClick={this.props.logoutUser}>
                      Logout
                    </button>
                  </li>
                </Fragment>
              ) : (
                <Fragment>
                  <li className='nav-item'>
                    <Link to='/login' className='nav-link'>
                      Login
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/register' className='nav-link'>
                      Register
                    </Link>
                  </li>
                </Fragment>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default connect(mapStateToProps, { logoutUser })(Header);
