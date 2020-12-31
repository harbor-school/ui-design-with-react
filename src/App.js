import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home, Profile, MyClubs, Settings } from "./pages";
import { Guide, Header, Footer } from "./components";
import { colors } from "./constants";
import styled from "styled-components";
import "./styles.css";
import { PostDemo } from "./pages/post-demo";

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
        <Route exact path="/user/ruucm" component={Profile} />
        <Route exact path="/my-clubs" component={MyClubs} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/gallery/billie-with-youtube" component={PostDemo} />
        <Footer />
      </Router>
    </Wrap>
  );
}
