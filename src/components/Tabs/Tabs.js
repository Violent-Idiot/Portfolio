import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import Projects from "./Projects/Projects";
import Tech from "./Tech/Tech";

import "./Tabs.css";
const Tabs = () => {
  return (
    <Router>
      <div className='tab-section'>
        <Link to='/'>
          <h1 className='tab'>Projects</h1>
        </Link>
        <Link to='/tech'>
          <h1 className='tab'>Technology</h1>
        </Link>
        <h1 className='tab'>Certificates</h1>
      </div>
      <Switch>
        <Route exact path='/'>
          <Projects />
        </Route>
        <Route exact path='/tech'>
          <Tech />
        </Route>
        <Route exact path='/papers'></Route>
      </Switch>
    </Router>
  );
};

export default Tabs;
