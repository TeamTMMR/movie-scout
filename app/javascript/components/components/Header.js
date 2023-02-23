import React, { useState } from 'react';
import {
  Collapse,
  MBDContainer,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Col,
} from 'reactstrap';

const Header = ({sign_in_route, logged_in, current_user, new_user_route,sign_out_route}) => {
  return (
  <>
    <div className='header'>
      <Navbar>
        <NavbarBrand id='navbar-brand' href="/">Movie Scout</NavbarBrand>
        {!logged_in && (
          <Nav>
            <NavItem>
              <NavLink className='navbar-link' href="/movieindex">
                  All Movies
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='navbar-link' href={sign_in_route}>
                  Sign In
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='navbar-link' href={new_user_route}>
                  Sign Up
              </NavLink>
            </NavItem>
          </Nav>
        )}
        {logged_in && (
          <Nav>
            <NavItem>
              <NavLink className='navbar-link' href="/movieindex">
                  All Movies
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='navbar-link' href="/mymovies">
                  My Movies
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='navbar-link' href={sign_out_route}>
                  Sign Out
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='navbar-link' href= "/aboutus">
                  About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='navbar-link' href="/movienew">
                  Upload Movie
              </NavLink>
            </NavItem>
          </Nav>
        )}
      </Navbar>
    </div>
  </>
             
  )
}

export default Header;