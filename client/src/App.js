import React from "react";

import Home from "./components/home/home";
import Profile from "./components/Profile/Profile";
import Tabs from "./components/Tabs/Tabs";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    // TODO add scroll to profile
    <React.Fragment>
      <Home name='Résumé' />
      <Profile />
      <Tabs />
      <Footer />
    </React.Fragment>
  );
}

export default App;
