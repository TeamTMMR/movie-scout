import React, { useState } from 'react';
import {
  Collapse,
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
    <div>
      <Navbar>
        <NavbarBrand href="/">Movie Scout</NavbarBrand>
  
          <Nav className="me-auto" navbar>
        {!logged_in && (
          <NavItem>
            <NavLink>
              <a href="/movieindex" className="nav-link">
                All Movies
              </a>
            </NavLink>
            <NavLink>
              <a href={sign_in_route} className="nav-link">
                Sign In
              </a>
            </NavLink>
          </NavItem>
        )}
        {logged_in && (
          <NavItem>
            <NavLink>
              <a href="/movieindex" className="nav-link">
                All Movies
              </a>
            </NavLink>
            <NavLink>
              <a href={sign_out_route} className="nav-link">
                Sign Out
              </a>
            </NavLink>
            <NavLink>
              <a href= "/aboutus" className="nav-link">
                About Us
              </a>
            </NavLink>
            <NavLink>
              <a href="/movienew" className="nav-link">
                Upload Movie
              </a>
            </NavLink>
          </NavItem>
        )}
          </Nav>
      </Navbar>
    </div>
  </>
             
  )
}

export default Header;