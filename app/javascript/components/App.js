import React, { Component } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import DojoIndex from "./pages/DojoIndex";
import DojoShow from "./pages/DojoShow";
import DojoNew from "./pages/DojoNew";
import DojoEdit from "./pages/DojoEdit";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dojos: [],
    };
  }
  componentDidMount() {
    this.readDojos();
  }
  readDojos = () => {
    fetch("/dojos")
      .then((response) => response.json())
      .then((payload) => this.setState({ dojos: payload }))
      .catch((errors) => console.log(errors));
  };
  createDojo = (newDojo) => {
    fetch("/dojos", {
      body: JSON.stringify(newDojo),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then((payload) => this.readDojos())
      .catch((errors) => console.log("Creation Error:", errors));
  };
  updateDojo = (editDojo, id) => {
    fetch(`/dojos/${id}`, {
      method: "PATCH",
      body: JSON.stringify(editDojo),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((payload) => this.readDojos())
      .catch((errors) => console.log("update errors:", errors));
  };

  deleteDojo = (id) => {
    fetch(`/dojos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((payload) => this.readDojos())
      .catch((errors) => console.log("delete errors:", errors));
  };

  render() {
    const { current_user } = this.props;
    return (
      <>
        <Router>
          <Header {...this.props} />
          <Switch>
            <Route exact path="/" component={Home} />

            <Route
              path="/dojoindex"
              render={(props) => <DojoIndex dojos={this.state.dojos} />}
            />

            <Route
              path="/mydojos"
              render={(props) => {
                let myDojos = this.state.dojos.filter(
                  (dojo) => dojo.user_id === current_user.id
                );
                return <DojoIndex dojos={myDojos} />;
              }}
            />

            <Route
              path="/dojoshow/:id"
              render={(props) => {
                let id = props.match.params.id;
                let dojo = this.state.dojos.find((dojo) => dojo.id === +id);
                return (
                  <DojoShow
                    dojo={dojo}
                    logged_in={current_user}
                    deleteDojo={this.deleteDojo}
                  />
                );
              }}
            />
            <Route
              path="/dojoedit/:id"
              render={(props) => {
                let id = props.match.params.id;
                let dojo = this.state.dojos.find((dojo) => dojo.id === +id);
                return (
                  <DojoEdit
                    dojo={dojo}
                    logged_in={current_user}
                    updateDojo={this.updateDojo}
                  />
                );
              }}
            />
            <Route
              path="/dojonew"
              render={(props) => (
                <DojoNew
                  createDojo={this.createDojo}
                  user_id={current_user.id}
                />
              )}
            />
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
