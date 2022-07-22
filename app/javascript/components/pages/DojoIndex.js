import React, { Component } from "react";
import {
  CardGroup,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
} from "reactstrap";
import { NavLink } from "react-router-dom";

const formatBackgroundStyle = (url) => {
  return `background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${url})`;
};

export default class DojoIndex extends Component {
  render() {
    const { dojos } = this.props;
    console.log("props.dojos:", dojos);

    return (
      <Container id="index">
        <h3>Dojos</h3>
        <CardGroup>
          {dojos &&
            dojos.map((dojo) => {
              return (
                <Card
                  className="dojos"
                  style={{ backgroundImage: `url(${dojo.image})` }}
                  key={dojo.id}
                  onClick={() => (location.href = `/dojoshow/${dojo.id}`)}
                >
                  <CardBody>
                    <CardTitle className="danger">{dojo.name}</CardTitle>
                    <CardSubtitle>
                      {dojo.city}, {dojo.state}
                    </CardSubtitle>
                  </CardBody>
                </Card>
              );
            })}
        </CardGroup>
      </Container>
    );
  }
}
