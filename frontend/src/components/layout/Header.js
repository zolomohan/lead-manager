import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <nav class='navbar navbar-expand-lg navbar-dark bg-primary'>
        <div className='container'>
          <a class='navbar-brand' href='#'>
            Lead Manager
          </a>
          <button
            class='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>

          <div class='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul class='navbar-nav ml-auto'>
              <li class='nav-item'>
                <Link to='/login' className='nav-link'>
                  Login
                </Link>
              </li>
              <li class='nav-item'>
                <Link to='/register' className='nav-link'>
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
