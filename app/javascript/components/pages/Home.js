import React, { Component } from "react";
import {
  Button,
  Container,
  NavLink,
  CardGroup,
  Card,
  CardImg,
} from "reactstrap";
import indexImg from "../../../assets/images/Index.png";
import showImg from "../../../assets/images/Show.png";
import formImg from "../../../assets/images/Form.png";

export default class Home extends Component {
  componentDidMount() {
    if (window.location.hash === "#faq") {
      document.getElementById("faq").scrollIntoView();
    }
  }
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
              JudoTen is where people can find information about where they can
              train Judo. A typical user who is not logged in is able to view
              the list of all dojos in the database and some information about
              each of them. A user who is logged has a little more power; they
              can add information about a dojo to the database. They can also
              edit info about the dojos they have created, or even delete them
              entirely.
            </p>
            <CardGroup>
              <Card>
                <CardImg
                  alt="Screenshot of All Dojos"
                  src={indexImg}
                  top
                  width="100%"
                />
              </Card>
              <Card>
                <CardImg
                  alt="Screenshot of Show page for one dojo"
                  src={showImg}
                  top
                  width="100%"
                />
              </Card>
              <Card>
                <CardImg
                  alt="Screenshot of the user input form"
                  src={formImg}
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
                <summary>
                  When adding a dojo, what's the most important info that needs
                  to be provided?
                </summary>
                The most important info about a dojo is where to find it. So its
                name, address, city, and state need to be provided so others can
                find it.
              </details>
              <details>
                <summary>
                  What if I know of a place that teaches Judo, but is not really
                  a Judo dojo?
                </summary>
                That's perfectly fine. A lot of Judo is taught as an accessory
                to more popular martial arts. Even if the dojo only teaches Judo
                for one hour every week, feel free to add it to the database so
                that others can find it.
              </details>
              <details>
                <summary>
                  How can I make sure that the info I provided went through?
                </summary>
                After you enter the info you can click on the "My Dojos" link
                (assuming you are logged in) and double check.
              </details>
              <details>
                <summary>Uh, what is Judo?</summary>
                In short, Judo is the art of throwing people. If you want a more
                in depth understanding, you can go to{" "}
                <a href="https://judoinfo.com/" target="_blank">
                  judoinfo.com
                </a>
              </details>
            </Container>
          </Container>
        </Container>
      </>
    );
  }
}
