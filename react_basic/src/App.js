import React from "react";
import Home from "../src/pages/Home";
import Contact from "../src/pages/Contact";
import About from "../src/pages/About";
import Nav from "./Components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Nav />
      <Route exact path="/" component={Home} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Contact" component={Contact} />
    </Router>
  );
};

export default App;
