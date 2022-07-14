import React, { Component } from 'react'
import Header from './components/Header'
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'
import Footer from './components/Footer'
import Home from './pages/Home'
import DojoIndex from './pages/DojoIndex'
import DojoShow from './pages/DojoShow'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dojos: []
    }
  }
  componentDidMount(){
    this.readDojos()
  }
  readDojos = () => {
    fetch("/dojos")
    .then(response => response.json())
    .then(payload => this.setState({dojos: payload}))
    .catch(errors => console.log(errors))
  }

  render() {
    const { current_user } = this. props
    return(
      <>
        <Router>
          <Header {...this.props}/>
          <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/dojoindex" render={props => <DojoIndex dojos={this.state.dojos}/> }/>

          <Route path="/dojoshow/:id" 
            render= {(props)=>{
            let id = props.match.params.id
            let dojo = this.state.dojos.find((dojoObject)=> dojoObject.id === parseInt(id, 10))
            return <DojoShow dojo={dojo} logged_in={current_user} />
            }} />

          </Switch>
          <Footer/>
        </Router>
      </>
    )
  }
}

export default App
