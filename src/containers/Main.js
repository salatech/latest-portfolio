import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Projects from "../pages/projects/Projects";

export default function Main(props) {
  const theme = props.theme;

  return (
    <div>
      <BrowserRouter basename="/">
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => <Home {...props} theme={theme} />}
          />
          <Route
            path="/experience"
            render={(props) => <Experience {...props} theme={theme} />}
          />
          <Route
            path="/education"
            render={(props) => <Education {...props} theme={theme} />}
          />
          <Route
            path="/projects"
            render={(props) => <Projects {...props} theme={theme} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
