import React from "react";
import { Switch } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Order from "./components/Order";

const App = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Home exact path="/" />
        <Order path="/order" />
      </Switch>
    </div>
  );
};
export default App;
