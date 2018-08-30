import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Will look at doing mass import using index.js
import Home from './containers/Home';
import Projects from './containers/Projects'
import AboutMe from './containers/AboutMe'
import ContactMe from './containers/ContactMe'
import NotFound from './containers/NotFound';
// 404

// Immediately returns the below
export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/projects" exact component={Projects} />
    <Route path="/about-me" exact component={AboutMe} />
    <Route path="/contact-me" exact component={ContactMe} />
    <Route component={NotFound} />
  </Switch>;
