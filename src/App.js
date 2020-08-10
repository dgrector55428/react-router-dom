import React from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "./Auth";
import b2cauth from "react-azure-adb2c";

// View imports
import Team from "./Views/Team/Team";
import Projects from "./Views/Projects/Projects";
import Reports from "./Views/Reports/Reports";
import Splash from "./Views/Splash/Splash";
import Reports2 from "./Views/Reports/Reports2";

// Component import
import Nav from "./components/Navbar/Navbar";

// dotenv
require("dotenv").config();

export default function App() {
  // const auth = new Auth();
  // if (auth.isLoggedIn()) {
  return (
    <div>
      <Nav location={window.location.pathname} />
      <Switch>
        <Route exact={true} path="/" component={Splash} />
        <Route path="/team" component={Team} />
        <Route path="/reports" component={Reports} />
        <Route path="/reports2" component={Reports2} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </div>
  );
  // }
}
