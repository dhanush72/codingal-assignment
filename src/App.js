import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Posts from "./page/Posts";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/posts" component={Posts} />
      </Switch>
    </Router>
  );
};

export default App;
