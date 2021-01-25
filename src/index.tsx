import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Keyresults from "./main/pages/keyresults";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/key-results" exact component={Keyresults} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
