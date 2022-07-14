import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button, Container, NavLink, Nav, NavItem
} from 'reactstrap';

export default class DojoShow extends Component {
    render() {
        const { dojo } = this.props
        const { logged_in } = this.props
        console.log("Logged", logged_in)
        console.log("Props", this.props)
        return (
            <Container id='show'>
                <h3>Show Me the Dojo</h3>
                <div>
                    {dojo &&
                        <Card key={dojo.id}>
                            <CardImg top style={{ width: '30rem' }} src={dojo.image} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Name: {dojo.name}</CardTitle>
                                <CardText>Address: {dojo.address}</CardText>
                                <CardText>City: {dojo.city}</CardText>
                                <CardText>State: {dojo.state}</CardText>
                                <CardText>Website: {dojo.website}</CardText>
                                <CardText>Contact: {dojo.phone}</CardText>
                                <CardText>Instructor: {dojo.instructor}</CardText>
                                <CardText>Email: {dojo.email}</CardText>
                                {(logged_in && dojo.user_id === logged_in.id)  && 
                                    <Nav>
                                        <NavItem>
                                            <NavLink to='/dojoedit'><Button>Edit</Button></NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink><Button>Delete</Button></NavLink>
                                        </NavItem>
                                    </Nav>

                                }
                            </CardBody>
                        </Card>
                    }
                </div>
            </Container>

        )
    }
}