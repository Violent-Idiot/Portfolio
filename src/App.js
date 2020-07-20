import React from "react";
import Home from "./components/home/home";
import Profile from "./components/Profile/Profile";
import Tabs from "./components/Tabs/Tabs";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Home name='Résumé' />
      <Profile />
      <Tabs />
    </React.Fragment>
  );
}

export default App;
