import React from "react";
import Home from "./components/home/home";
import Profile from "./components/Profile/Profile";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Home name='Résumé' />
      <Profile />
    </React.Fragment>
  );
}

export default App;
