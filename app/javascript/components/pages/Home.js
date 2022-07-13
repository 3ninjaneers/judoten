import React, { Component } from 'react' 
import { Button, Container, NavLink } from 'reactstrap'


export default class Home extends Component {
  render(){
    return(
      <>
      <div>
      
        <Container fluid>
        <img src="https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1353&q=80" alt="scenery"/>
           <NavLink href="/dojoindex"><Button>Find Dojo Near You</Button></NavLink>
        </Container>
      
      </div>
      <Container>
        <Container>
          About
        </Container>
        <Container id="faq">
          FAQ
        </Container>
      </Container>
      
      </>
    )
  }
}