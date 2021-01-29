import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Descriptions from "./main/pages/descriptions";
import Details from "./main/pages/details";
import { Provider } from 'react-redux';
import config from './main/store/config';

const store = config();


ReactDOM.render(
  <Provider store={store}>
    <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/descriptions" exact component={Descriptions} />
      <Route path="/details" exact component={Details} />
    </Switch>
  </Router>
  </Provider>
  ,
  document.getElementById("root")
);
