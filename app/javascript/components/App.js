import React, { Component } from 'react'
import Header from './components/Header'
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dojos: []
    }
  }

  render() {
    const { current_user } = this. props
    return(
      <>
        <Router>
          <Header {...this.props}/>
          <Switch>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
