import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home"
import Podcast from "./components/Podcast"
import './App.css'

const App: React.FC = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/podcast" component={Podcast} />
      </Switch>
    </>
  );
};
export default App;
