import React, { Component } from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default class DojoIndex extends Component {
  render() {
    const { dojos } = this.props
    console.log("props.dojos:", dojos)
    return (
      <Container id='index'>
        <h3>dojo Index</h3>
        <div>
          {dojos && dojos.map((dojo)=> {
            return ( 
            <Card key={dojo.id}>
              <CardImg top style={{ width: '30rem' }} src={dojo.image} alt="Card image cap" />
              <CardBody>
                <CardTitle>Name: {dojo.name}</CardTitle>
                <CardSubtitle>City: {dojo.city}</CardSubtitle>
                <CardText>State: {dojo.state}</CardText>
                <NavLink to={`/dojoshow/${dojo.id}`}>
                <Button>Find Out More!</Button>
                </NavLink>
              </CardBody>
            </Card>
            )
          })
          }
        </div>
      </Container>
      
    )
  }
}