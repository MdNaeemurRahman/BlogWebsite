import React from 'react';
import { Link } from 'react-router-dom';

import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from 'mdbreact';

const DropdownPage = () => {
  return (
    <MDBDropdown>
      <MDBDropdownToggle color='dark'>
        Menu
        <i className='fas fa-bars'></i>
      </MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBDropdownItem>
          <Link className='nav-link' to='/'>
            Home
          </Link>
        </MDBDropdownItem>
        <MDBDropdownItem divider />
        <MDBDropdownItem>
          <Link className='nav-link' to='/about'>
            About
          </Link>
        </MDBDropdownItem>
        <MDBDropdownItem divider />
        <MDBDropdownItem>
          <Link className='nav-link' to='/contact'>
            Contact
          </Link>
        </MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  );
};

const Navigation = () => {
  return (
    <nav
      className='navbar navbar-expand-lg navbar-light fixed-top'
      id='mainNav'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>
          Himu
        </Link>

        <div
          className='navbar-toggler navbar-toggler-right'
          type='button'
          data-toggle='collapse'
          data-target='#navbarResponsive'
          aria-controls='navbarResponsive'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <DropdownPage />
          {/* Menu */}
          {/* <i className='fas fa-bars'></i> */}
        </div>
        <div className='collapse navbar-collapse' id='navbarResponsive'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/about'>
                About
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link' to='/contact'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
