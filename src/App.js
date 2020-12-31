import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home } from "./pages";
import { Header, Footer } from "./components";

export default function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Home} />
      <Footer />
    </Router>
  );
}
