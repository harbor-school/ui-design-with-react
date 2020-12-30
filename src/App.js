import React from "react";
import "./styles.css";
import styled from "styled-components";
import { pageMargin } from "./constants";
import * as Illust from "./illusts";
import { Header, Card, Guide } from "./components";

const Title = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 700;
  margin-left: 16px;
`;

const Content = styled.div`
  /* background: yellowgreen; */
  margin: 0px ${pageMargin}px;
`;

const BannerRow = styled.div`
  /* background: yellowgreen; */
  display: grid;
  grid-template-columns: 3fr 6fr 3fr;
  margin-top: 100px;
`;
const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FindClubTitle = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 28px;
  font-weight: 700;
  margin-top: 32px;
`;
const FindClubRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* background: pink; */
  column-gap: 20px;
  row-gap: 20px;
  margin-top: 20px;
`;

export default function App() {
  return (
    <>
      <Guide />
      <Header />
      <Content>
        <BannerRow>
          <div />
          <Banner>
            <Illust.Home height="90px" />
            <Title
              style={{
                fontSize: 70,
                lineHeight: "1em",
                textAlign: "center",
                marginTop: 24
              }}
            >
              Coding
              <br />
              Club
            </Title>
          </Banner>
        </BannerRow>
        <FindClubTitle>Find Clubs</FindClubTitle>
        <FindClubRow>
          <Card title="Framer Club" img={require("./images/framer.png")} />
          <Card title="Canvas Club" img={require("./images/canvas.jpg")} />
          <Card title="WebGL Club" img={require("./images/webgl-water.jpg")} />
          <Card />
        </FindClubRow>
      </Content>
    </>
  );
}
