import React, { Component } from "react";
import { Row, Col, Container, Nav, NavItem, NavLink } from "reactstrap";
import githubLogo from "../../../assets/images/github.png";
import linkedinLogo from "../../../assets/images/linkedin.png";
import emailLogo from "../../../assets/images/email.png";
import lancePic from "../../../assets/images/lance.jpg";
import denisePic from "../../../assets/images/denise.jpeg";
import damienPic from "../../../assets/images/damien.jpeg";
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
            The 3 Ninjaneers consists of Lance, Denise and Damien, all U.S.
            Military Veterans with roots in the San Diego area. Individually we
            have all had issues trying to find the right gym/dojo, which was
            exasperated through 2020 and COVID. As a team we realized gyms
            didn't always advertise their Judo programs, and we wanted a
            one-stop-shop for Judoka(Judo enthusiasts) to find the Dojo that fit
            their requirements!
          </p>
          <p>
            Below you can find information about our team and their roles within
            3 Ninjaneers - JudoTen.
          </p>
        </Container>
        <Container id="profiles">
          <Card className="profile">
            <CardBody>
              <Row>
                <Col className="col-md-4">
                  <CardImg
                    src={lancePic}
                    alt="Lance Davis Drivergator Extrodinaire"
                  />
                </Col>
                <Col className="col-md-8">
                  <CardTitle>Lance Davis</CardTitle>
                  <CardSubtitle>Project/Product Manager</CardSubtitle>
                  <Row>
                    <CardText className="profile-text">
                      Hey. I'm Lance. A veteran, writer, Judoka, and a
                      philosophy enthusiast. When I am not writing code, I am
                      doing Judo, reading, writing actual words, pontificating,
                      or gaming. The app in which you find this particular
                      mini-autobiography is a merging of my passion for Judo and
                      my penchant for problem solving. But I would not have been
                      able make an app this good without my teammates--my fellow
                      Ninjaneers.
                    </CardText>
                  </Row>
                  <Row id="socials">
                    <a
                      href="https://www.github.com/lancewrites"
                      target="_blank"
                    >
                      <img
                        className="social-img"
                        src={githubLogo}
                        alt="github logo"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/lance-c-davis/"
                      target="_blank"
                    >
                      <img
                        className="social-img"
                        src={linkedinLogo}
                        alt="linkedin logo"
                      />
                    </a>
                    <a href="mailto:3ninjaneers@gmail.com">
                      <img
                        className="social-img"
                        src={emailLogo}
                        alt="email logo"
                      />
                    </a>
                  </Row>
                </Col>
              </Row>
            </CardBody>
          </Card>
          <Card className="profile">
            <CardBody>
              <Row>
                <Col className="col-md-8">
                  <CardTitle>Denise Carlson</CardTitle>
                  <CardSubtitle>Tech Lead</CardSubtitle>
                  <Row>
                    <CardText id="middle-card" className="profile-text">
                      When I’m not coding, I’m hanging out on discord with other
                      women coders. During Covid lock-down I had trouble finding
                      a martial arts school that taught adults. This experience
                      led into Judoten where our app will hopefully fill that
                      gap to match judo schools with people looking to learn
                      judo. Programming compliments my natural problem-solving
                      ability. I enjoy being able to create applications that
                      will enrich and enhance people’s lives. Currently, I teach
                      coding to kids grade 3rd through 5th which utilizes games
                      and projects to teach the fundamentals of programming and
                      how computers work. I also volunteer for a non-profit,
                      Foster a friend, we are developing a website to match
                      foster animals with their forever homes.
                    </CardText>
                  </Row>
                  <Row id="socials">
                    <a
                      href="https://www.github.com/Denise-Carlson"
                      target="_blank"
                    >
                      <img
                        className="social-img"
                        src={githubLogo}
                        alt="github logo"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/carlsondenise/"
                      target="_blank"
                    >
                      <img
                        className="social-img"
                        src={linkedinLogo}
                        alt="linkedin logo"
                      />
                    </a>
                    <a href="mailto:3ninjaneers@gmail.com">
                      <img
                        className="social-img"
                        src={emailLogo}
                        alt="email logo"
                      />
                    </a>
                  </Row>
                </Col>
                <Col className="col-md-4">
                  <CardImg
                    src={denisePic}
                    alt="Denise Carlson Techigator Extrodinaire"
                  />
                </Col>
              </Row>
            </CardBody>
          </Card>
          <Card className="profile">
            <CardBody>
              <Row>
                <Col className="col-md-4">
                  <CardImg
                    src={damienPic}
                    alt="Damien Richcreek Designigator Extrodinaire"
                  />
                </Col>
                <Col className="col-md-8">
                  <CardTitle>Damien Richcreek</CardTitle>
                  <CardSubtitle>Design Lead</CardSubtitle>
                  <Row>
                    <CardText className="profile-text">
                      My role within the 3 Ninjaneers was to ensure the design
                      was on the mark and kicked butt! I'm a Full Stack Software
                      Engineer, a Marine Corps Veteran, a husband, a father, and
                      a tech gadget enthusiast. I have always been a fan of the
                      martial arts from taking Judo as a child, boxing classes
                      as a teenager, and training in Marine Corps Martial Arts.
                      My drive to assist in creating JudoTen is to help everyone
                      of all ages and levels of fitness to find the right Dojo
                      for them.
                    </CardText>
                  </Row>
                  <Row id="socials">
                    <a href="https://www.github.com/tactika" target="_blank">
                      <img
                        className="social-img"
                        src={githubLogo}
                        alt="github logo"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/drichcreek"
                      target="_blank"
                    >
                      <img
                        className="social-img"
                        src={linkedinLogo}
                        alt="linkedin logo"
                      />
                    </a>
                    <a href="mailto:damien@richcreek.dev">
                      <img
                        className="social-img"
                        src={emailLogo}
                        alt="email logo"
                      />
                    </a>
                  </Row>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Container>
      </Container>
    );
  }
}
