import React, { Component } from "react";
import { Row, Col, Container, Nav, NavItem, NavLink } from "reactstrap";
import githubLogo from "../../../assets/images/github.png";
// import linkedinLogo from "../../../assets/images/linkedin.png";
// import emailLogo from "../../../assets/images/email.png";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
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
          <Card>
            <CardBody>
              <CardTitle>Name</CardTitle>
              <CardSubtitle>Title/Secondary Title</CardSubtitle>
              <Row>
                <Col className="col-3">
                  <CardImg
                    center
                    style={{ width: "15rem" }}
                    src="https://picsum.photos/200/200"
                    alt="default"
                  />
                </Col>
                <Col className="col-9">
                  <CardText className="profile-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Provident expedita maiores et similique, fugit reprehenderit
                    dolorum quisquam placeat corporis dicta ad eaque, incidunt
                    explicabo aut labore? Natus a in quaerat!
                  </CardText>
                </Col>
              </Row>
              <NavLink>
                <img src={githubLogo} alt="github logo" />
              </NavLink>
            </CardBody>
          </Card>
        </Container>
      </Container>
    );
  }
}
