import React, { Component } from "react";
import { Container, Nav, NavItem, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/3ninjaneers.png";

export default class Footer extends Component {
  render() {
    return (
      <Container id="footer-component" className="bg-dark border" dark fluid>
        <Row>
          <Col id="footer-nav" className="" sm="3">
            <Nav vertical>
              <NavItem>
                <Link to="/">Home</Link>
              </NavItem>
              <NavItem>
                <Link to="/users/sign_in">Login</Link>
              </NavItem>
              <NavItem>
                <Link to="/users/sign_up">Sign Up</Link>
              </NavItem>
              <NavItem>
                <Link to="/dojoindex">Dojos</Link>
              </NavItem>
              <NavItem>
                <Link to="/aboutus">About Us</Link>
              </NavItem>
            </Nav>
          </Col>
          <Col sm="9">
            <Row id="footer-logo">
              <img src={logo} />
            </Row>
            <Row>
              <Nav>
                <NavItem>
                  <Link to="https://github.com/3ninjaneers/judoten">
                    GitHub
                  </Link>
                </NavItem>
              </Nav>
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
