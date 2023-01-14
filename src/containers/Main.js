import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Projects from "../pages/projects/Projects";

export default class Main extends Component {
  render() {
      return (
        <div>
          <BrowserRouter basename="/">
            <Switch>
              <Route
                path="/"
                exact
                render={(props) => <Home {...props} theme={this.props.theme} />}
              />
              <Route
                path="/"
                render={(props) => <Home {...props} theme={this.props.theme} />}
              />
              <Route
                path="/"
                exact
                render={(props) => (
                  <Experience {...props} theme={this.props.theme} />
                )}
              />
              <Route
                path="/"
                render={(props) => (
                  <Education {...props} theme={this.props.theme} />
                )}
              />

           
              <Route
                path="/"
                render={(props) => (
                  <Projects {...props} theme={this.props.theme} />
                )}
              />
            </Switch>
          </BrowserRouter>
        </div>
      );
    }
}
