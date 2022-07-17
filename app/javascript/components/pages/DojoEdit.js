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

export default class DojoEdit extends Component {
  constructor(props) {
    super(props);
    console.log("The Props", this.props);
    this.state = {
      editDojo: {
        name: this.props.dojo ? this.props.dojo.name : "",
        address: this.props.dojo ? this.props.dojo.address : "",
        city: this.props.dojo ? this.props.dojo.city : "",
        state: this.props.dojo ? this.props.dojo.state : "",
        website: this.props.dojo ? this.props.dojo.website : "",
        phone: this.props.dojo ? this.props.dojo.phone : "",
        instructor: this.props.dojo ? this.props.dojo.instructor : "",
        email: this.props.dojo ? this.props.dojo.email : "",
        image: this.props.dojo ? this.props.dojo.image : "",
        user_id: this.props.user_id,
      },

      edited: false,
    };
    console.log("The Object", this.state.editDojo);
  }
  handleChange = (event) => {
    let { editDojo } = this.state;
    editDojo[event.target.name] = event.target.value;
    this.setState({ editDojo: editDojo });
  };

  handleSubmit = () => {
    this.props.updateDojo(this.state.editDojo, this.props.dojo.id);
    this.setState({ edited: true });
  };
  render() {
    const { edited } = this.state;
    return (
      <Container id="edit-dojo">
        <Form>
          <Row>
            <FormGroup>
              <Label for="exampleEmail">Dojo Name</Label>
              <Input
                id="exampleName"
                name="name"
                placeholder=""
                onChange={this.handleChange}
                value={this.state.editDojo.name}
              />
            </FormGroup>
          </Row>
          <FormGroup>
            <Label for="exampleAddress">Address</Label>
            <Input
              id="exampleAddress"
              name="address"
              placeholder=""
              onChange={this.handleChange}
              value={this.state.editDojo.address}
            />
          </FormGroup>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleCity">City</Label>
                <Input
                  id="exampleCity"
                  name="city"
                  placeholder=""
                  onChange={this.handleChange}
                  value={this.state.editDojo.city}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleState">State</Label>
                <Input
                  id="exampleState"
                  name="state"
                  placeholder=""
                  onChange={this.handleChange}
                  value={this.state.editDojo.state}
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
                placeholder=""
                onChange={this.handleChange}
                value={this.state.editDojo.website}
              />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup>
              <Label for="examplePhone">Phone #</Label>
              <Input
                id="examplePhone"
                name="phone"
                placeholder=""
                onChange={this.handleChange}
                value={this.state.editDojo.phone}
              />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                id="exampleEmail"
                name="email"
                placeholder=""
                onChange={this.handleChange}
                value={this.state.editDojo.email}
              />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup>
              <Label for="exampleInstructor">Instructor</Label>
              <Input
                id="exampleInstructor"
                name="instructor"
                placeholder=""
                onChange={this.handleChange}
                value={this.state.editDojo.instructor}
              />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup>
              <Label for="exampleImage">Image</Label>
              <Input
                id="exampleImage"
                name="image"
                placeholder=""
                onChange={this.handleChange}
                value={this.state.editDojo.image}
              />
            </FormGroup>
          </Row>
          <Button id="submit" onClick={this.handleSubmit}>
            Update Dojo
          </Button>
          {edited && <Redirect to="/mydojos" />}
        </Form>
      </Container>
    );
  }
}
