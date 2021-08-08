import React from "react";
import { HashRouter, Route } from "react-router-dom"
import About from "./routes/About"
import Home from "./routes/Home"
import Movie_Detail from "./routes/Detail"
import Navigation from "./components/Navigation";
import "./App.css"

function App() {
  return (
    <HashRouter>
      <Navigation/>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/Movie_Detail/:id"component={Movie_Detail} />
    </HashRouter>
  );
}

export default App