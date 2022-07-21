import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Container,
  NavLink,
  Nav,
  NavItem,
  Row,
  Col,
} from "reactstrap";
import { Redirect, NavLink as RRNavLink } from "react-router-dom";

export default class DojoShow extends Component {
  constructor(props) {
    super(props);
    console.log("SHOW props", this.props);
    this.state = {
      deleted: false,
    };
  }
  handleDelete = (id) => {
    this.props.deleteDojo(id);
    this.setState({ deleted: true });
  };

  render() {
    const { dojo } = this.props;
    const { logged_in } = this.props;
    console.log("Props", this.props);
    return (
      <Container id="show">
        <h3>Show Me the Dojo</h3>
        <div>
          {dojo && (
            <Card key={dojo.id}>
              <Row>
                <Col className="col-md-4">
                  <CardImg top src={dojo.image} alt="Card image cap" />
                </Col>
                <Col className="col-md-8">
                  <CardBody>
                    <CardTitle>Name: {dojo.name}</CardTitle>
                    <CardText>Address: {dojo.address}</CardText>
                    <CardText>City: {dojo.city}</CardText>
                    <CardText>State: {dojo.state}</CardText>
                    <CardText>
                      Website:{" "}
                      <a href={dojo.website} target="_blank">
                        {dojo.website}
                      </a>
                    </CardText>
                    <CardText>
                      Contact: <a href={`tel: ${dojo.phone}`}>{dojo.phone}</a>
                    </CardText>
                    <CardText>Instructor: {dojo.instructor}</CardText>
                    <CardText>Email: {dojo.email}</CardText>
                    {logged_in && dojo.user_id === logged_in.id && (
                      <Nav>
                        <NavItem>
                          <NavLink
                            dojo={dojo}
                            tag={RRNavLink}
                            to={`/dojoedit/${dojo.id}`}
                          >
                            <Button>Edit</Button>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink>
                            <Button onClick={() => this.handleDelete(dojo.id)}>
                              Delete
                            </Button>
                          </NavLink>
                        </NavItem>
                      </Nav>
                    )}
                    {this.state.deleted && <Redirect to="/dojoindex" />}
                  </CardBody>
                </Col>
              </Row>
            </Card>
          )}
        </div>
      </Container>
    );
  }
}
