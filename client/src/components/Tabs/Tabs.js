import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Projects from "./Projects/Projects";
import Tech from "./Tech/Tech";
import Paper from "./Paper/Paper";

import "./Tabs.css";
const Tabs = () => {
  const [first, setfirst] = useState(true);
  const [focus, setfocus] = useState(false);
  const [yo, setyo] = useState(false);
  // useEffect(() => {
  //   setfirst(true);
  //   setfocus(false);
  //   setyo(false);
  //   if (first) {
  //     return <Redirect to='/' />;
  //   }
  // }, []);
  // const home = () => {
  //   return <Redirect to='/' />;
  // };

  // useEffect(() => {
  //   setfirst(true);
  //   // setfocus(false);
  //   return home();
  //   // setyo(false);
  //   // if (first) {
  //   // }
  // }, []);
  return (
    <Router>
      <div className='tab-section'>
        <Link
          to='/'
          onClick={() => {
            setfirst(true);
            setfocus(false);
            setyo(false);
          }}
        >
          <i className={first ? "fas fa-tasks active" : "fas fa-tasks"}></i>
          <h1 className={first ? "tab active" : "tab"}>Projects</h1>
        </Link>
        <Link
          to='/tech'
          onClick={() => {
            setfirst(false);
            setfocus(true);
            setyo(false);
          }}
        >
          <i className={focus ? "fas fa-code active" : "fas fa-code"}></i>
          {/* <h1 className='tab'>Technology</h1> */}
          <h1 className={focus ? "tab active" : "tab"}>Technology</h1>
        </Link>
        <Link
          to='/papers'
          onClick={() => {
            setfirst(false);
            setfocus(false);
            setyo(true);
          }}
        >
          <i
            className={yo ? "fas fa-certificate active" : "fas fa-certificate"}
          ></i>
          <h1 className={yo ? "tab active" : "tab"}>Certificates</h1>
        </Link>
      </div>
      <Switch>
        {/* TODO FIX THIS Redirect WHEN RELOADING */}
        {/* {first && <Redirect exact to='/' />} */}
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
