import React, { Component } from "react";
import { Container, Nav, NavItem, NavLink, Col, Row } from "reactstrap";
import logo from "../../../assets/images/3ninjaneers.png";
import githubLogo from "../../../assets/images/github.png";

export default class Footer extends Component {
  render() {
    return (
      <Container id="footer-component" className="bg-dark" fluid>
        <Row>
          <Col id="footer-sitemap" sm="3">
            <Nav vertical>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/users/sign_in">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/users/sign_up">Sign Up</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/dojoindex">Dojos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/aboutus">About Us</NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col sm="9">
            <Row>
              <img id="footer-logo" src={logo} />
            </Row>
            <Row>
              <a
                href="https://www.github.com/3ninjaneers/judoten"
                target="_blank"
              >
                <img
                  className="social-img-footer"
                  src={githubLogo}
                  alt="github logo"
                />
              </a>
            </Row>
            <Row>
              <p id="footer-container"> 2022 &copy; Damien---Lance---Denise</p>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
