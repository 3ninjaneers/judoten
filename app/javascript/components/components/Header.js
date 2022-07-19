import React, { Component } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  UncontrolledCollapse,
} from "reactstrap";
// import { NavLink } from 'react-router-dom'

class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;
    return (
      <Navbar id="header-nav" color="dark" dark expand="sm" fixed="top" light>
        <NavbarBrand href="/">JudoTen</NavbarBrand>
        <NavbarToggler id="toggler" onClick={function noRefCheck() {}} />
        <UncontrolledCollapse defaultOpen={false} toggler="#toggler" navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink className="page-links" href="/#faq">
                {" "}
                FAQ{" "}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="page-links" href="/dojoindex">
                {" "}
                All Dojos{" "}
              </NavLink>
            </NavItem>
            {logged_in && (
              <NavItem>
                <NavLink className="page-links" href="/mydojos">
                  {" "}
                  My Dojos{" "}
                </NavLink>
              </NavItem>
            )}
            {logged_in && (
              <NavItem>
                <a href="/dojonew" className="nav-link">
                  {" "}
                  Spot a Dojo{" "}
                </a>
              </NavItem>
            )}
            {logged_in && (
              <NavItem>
                <a href={sign_out_route} className="nav-link">
                  Sign Out
                </a>
              </NavItem>
            )}
            {!logged_in && (
              <NavItem>
                <a href={"/users/sign_in"} className="nav-link">
                  {" "}
                  Sign In{" "}
                </a>
              </NavItem>
            )}
            {!logged_in && (
              <NavItem>
                <a href={"/users/sign_up"} className="nav-link">
                  {" "}
                  Create an Account{" "}
                </a>
              </NavItem>
            )}
          </Nav>
        </UncontrolledCollapse>
      </Navbar>
    );
  }
}
export default Header;
