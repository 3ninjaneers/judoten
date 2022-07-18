import React, { Component } from "react";
import { Container, Nav, NavItem, NavLink } from "reactstrap";
import githubLogo from "../../../assets/images/github.png";
import linkedinLogo from "../../../assets/images/linkedin.png";
import emailLogo from "../../../assets/images/email.png";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
} from "reactstrap";
export default class AboutUs extends Component {
  render() {
    return (
      <Container id="about-container">
        <Container>
          <h2>About 3 Ninjaneers</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
            inventore tempore neque cumque eveniet cupiditate sequi quasi
            maiores in dolorem voluptatum! Pariatur blanditiis dolore similique
            eum accusamus obcaecati est vel!
          </p>
        </Container>
        <Container id="profiles">
          <Container className="profile">
            <Container className="profile-header">
              <h3>Name</h3>
              <h4>Title/Second Title</h4>
            </Container>
            <Container className="profile-image-area col-2">
              <img src="https://picsum.photos/200/200" alt="default" />
            </Container>
            <Container className="profile-content col-5">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Provident expedita maiores et similique, fugit reprehenderit
                dolorum quisquam placeat corporis dicta ad eaque, incidunt
                explicabo aut labore? Natus a in quaerat!
              </p>
              <Container className="profile-socials">
                <Nav>
                  <NavItem>
                    <NavLink>
                      <img src={githubLogo} alt="github logo" />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>
                      <img src={linkedinLogo} alt="Linkedin logo" />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>
                      <img src={emailLogo} alt="Email logo" />
                    </NavLink>
                  </NavItem>
                </Nav>
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    );
  }
}
