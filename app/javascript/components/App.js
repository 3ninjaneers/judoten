import React, { Component } from 'react'
import Header from './components/Header'
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'
import Footer from './components/Footer'
import Home from './pages/Home'

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
          <Route exact path="/" component={Home} />
          </Switch>
          <Footer/>
        </Router>
      </>
    )
  }
}

export default App
