import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home, Profile, MyClubs, Settings } from "./pages";
import { Guide, Header, Footer } from "./components";
import { colors } from "./constants";
import styled from "styled-components";

const Wrap = styled.div`
  /* font-family: "Playfair Display", serif; */
  font-family: "Albra", serif;
  background: ${colors.bacgkroundPrimary};
`;

export default function App() {
  return (
    <Wrap>
      <Router>
        <Guide />
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/my-clubs" component={MyClubs} />
        <Route exact path="/settings" component={Settings} />
        <Footer />
      </Router>
    </Wrap>
  );
}
