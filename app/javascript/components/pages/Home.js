import React, { Component } from "react";
import {
  Button,
  Container,
  NavLink,
  CardGroup,
  Card,
  CardImg,
} from "reactstrap";

export default class Home extends Component {
  render() {
    return (
      <>
        <Container id="hero-container" fluid>
          <Container className="hero-text">
            <NavLink href="/dojoindex">
              <Button color="danger" size="lg">
                Find Dojo Near You
              </Button>
            </NavLink>
          </Container>
        </Container>
        <Container>
          <Container id="home-about">
            <h2>How JudoTen Works</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
              mauris commodo quis imperdiet massa tincidunt nunc pulvinar
              sapien. Tellus pellentesque eu tincidunt tortor aliquam nulla
              facilisi cras. Fusce id velit ut tortor pretium. Etiam erat velit
              scelerisque in. Amet porttitor eget dolor morbi non arcu risus
              quis varius. Orci porta non pulvinar neque laoreet suspendisse
              interdum consectetur. Ac tortor dignissim convallis aenean et. Cum
              sociis natoque penatibus et. Nam at lectus urna duis convallis.
            </p>
            <CardGroup>
              <Card>
                <CardImg
                  alt="Card image cap"
                  src="https://picsum.photos/318/180"
                  top
                  width="100%"
                />
              </Card>
              <Card>
                <CardImg
                  alt="Card image cap"
                  src="https://picsum.photos/318/180"
                  top
                  width="100%"
                />
              </Card>
              <Card>
                <CardImg
                  alt="Card image cap"
                  src="https://picsum.photos/318/180"
                  top
                  width="100%"
                />
              </Card>
            </CardGroup>
          </Container>
          <Container id="faq">
            <h2>FAQ</h2>
            <Container id="questions">
              <details>
                <summary>First Question Here</summary>
                blahblahblahblahblahblahblahblah
              </details>
              <details>
                <summary>Second Question Here</summary>
                blahblahblahblahblahblahblahblah
              </details>
              <details>
                <summary>Third Question Here</summary>
                blahblahblahblahblahblahblahblah
              </details>
              <details>
                <summary>Fourth Question Here</summary>
                blahblahblahblahblahblahblahblah
              </details>
            </Container>
          </Container>
        </Container>
      </>
    );
  }
}
