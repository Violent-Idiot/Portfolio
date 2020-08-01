import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import Projects from "./Projects/Projects";
import Tech from "./Tech/Tech";
import Paper from "./Paper/Paper";

import "./Tabs.css";
const Tabs = () => {
  return (
    <Router>
      <div className='tab-section'>
        <Link to='/'>
          <i className='fas fa-tasks'></i>
          <h1 className='tab'>Projects</h1>
        </Link>
        <Link to='/tech'>
          <i className='fas fa-code'></i>
          <h1 className='tab'>Technology</h1>
        </Link>
        <Link to='/papers'>
          <i className='fas fa-certificate'></i>
          <h1 className='tab'>Certificates</h1>
        </Link>
      </div>
      <Switch>
        <Route exact path='/'>
          <Projects />
        </Route>
        <Route exact path='/tech'>
          <Tech />
        </Route>
        <Route exact path='/papers'>
          <Paper />
        </Route>
      </Switch>
    </Router>
  );
};

export default Tabs;
