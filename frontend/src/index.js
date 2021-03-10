import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import AboutPage from "src/pages/about";
import ErrorPage from "src/pages/error";
import HomePage from "src/pages/home";
import SettingsPage from "src/pages/settings";
import NavBar from "src/components/navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "src/styles/styles.css";

ReactDOM.render(
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route path="/home" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/settings" component={SettingsPage} />
      <Route path="*" component={ErrorPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
