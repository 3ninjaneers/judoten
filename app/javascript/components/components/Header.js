import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    console.log("logged_in:", logged_in)
    console.log("current_user:", current_user)
    return (
      <header id='header-container'>
        <h1><a id='home-link' href="/">JudoTen</a></h1>
        <Nav className='links'>
          <NavItem>
            <NavLink className='page-links' to='/#faq'> FAQ </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='page-links' to='/dojoindex'> All Dojos </NavLink>
          </NavItem>
          {logged_in &&
            <NavItem>
              <a href="/dojonew" className="nav-link"> Spot a Dojo </a>
            </NavItem>
          }
          {logged_in &&
            <NavItem>
              <a href={sign_out_route} className="nav-link">Sign Out</a>
            </NavItem>
          }
          {!logged_in &&
            <NavItem>
              <a href={sign_in_route} className="nav-link"> Sign In </a>
            </NavItem>
          }
          {!logged_in &&
            <NavItem>
              <a href={new_user_route} className="nav-link"> Create an Account </a>
            </NavItem>
          }
          {logged_in &&
            <NavItem>
             <NavLink className='page-links' to='/mydojos'> My Dojos </NavLink>
            </NavItem>
          }
        </Nav>
      </header>
    )
  }
}
export default Header