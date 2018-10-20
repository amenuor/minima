// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from './container/App/Loadable';

const appComponent = document.getElementById('app');

if (appComponent) {
  ReactDOM.render(
    <Router>
      <Route exact path="/" component={App} />
    </Router>, 
    appComponent
  );
}
