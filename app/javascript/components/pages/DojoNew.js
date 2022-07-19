import React, { Component } from "react";
import {
  Form,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
  Container,
} from "reactstrap";
import { Redirect } from "react-router-dom";

export default class DojoNew extends Component {
  constructor(props) {
    super(props);
    const { user_id } = this.props;
    this.state = {
      newDojo: {
        name: "",
        address: "",
        city: "",
        state: "",
        website: "",
        phone: "",
        instructor: "",
        email: "",
        image: "",
        user_id: user_id,
      },
      created: false,
    };
  }
  handleChange = (event) => {
    let { newDojo } = this.state;
    newDojo[event.target.name] = event.target.value;
    this.setState({ newDojo: newDojo });
  };

  handleSubmit = () => {
    this.props.createDojo(this.state.newDojo);
    this.setState({ created: true });
  };
  render() {
    return (
      <Container id="new-dojo">
        <Form>
          <Row>
            <FormGroup>
              <Label for="exampleEmail">Dojo Name</Label>
              <Input
                id="exampleName"
                name="name"
                placeholder="Dojo McFisticuffs"
                onChange={this.handleChange}
                value={this.state.newDojo.name}
              />
            </FormGroup>
          </Row>
          <FormGroup>
            <Label for="exampleAddress">Address</Label>
            <Input
              id="exampleAddress"
              name="address"
              placeholder="1234 Main St"
              onChange={this.handleChange}
              value={this.state.newDojo.address}
            />
          </FormGroup>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleCity">City</Label>
                <Input
                  id="exampleCity"
                  name="city"
                  placeholder="San Diego"
                  onChange={this.handleChange}
                  value={this.state.newDojo.city}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleState">State</Label>
                <Input
                  id="exampleState"
                  name="state"
                  placeholder="CA"
                  onChange={this.handleChange}
                  value={this.state.newDojo.state}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <FormGroup>
              <Label for="exampleWebsite">Website</Label>
              <Input
                id="exampleWebsite"
                name="website"
                placeholder="https://www.judoten.com"
                onChange={this.handleChange}
                value={this.state.newDojo.website}
              />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup>
              <Label for="examplePhone">Phone #</Label>
              <Input
                id="examplePhone"
                name="phone"
                placeholder="123-456-7890"
                onChange={this.handleChange}
                value={this.state.newDojo.phone}
              />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="judo@know.me"
                onChange={this.handleChange}
                value={this.state.newDojo.email}
              />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup>
              <Label for="exampleInstructor">Instructor</Label>
              <Input
                id="exampleInstructor"
                name="instructor"
                placeholder="Sensei McThrowperson"
                onChange={this.handleChange}
                value={this.state.newDojo.instructor}
              />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup>
              <Label for="exampleImage">Image</Label>
              <Input
                id="exampleImage"
                name="image"
                placeholder="http://www.coolpick.com/new-pic.jpg"
                onChange={this.handleChange}
                value={this.state.newDojo.image}
              />
            </FormGroup>
          </Row>

          <Button id="submit" onClick={this.handleSubmit}>
            Spot Dojo
          </Button>
          {this.state.created && <Redirect to="/mydojos" />}
        </Form>
      </Container>
    );
  }
}
