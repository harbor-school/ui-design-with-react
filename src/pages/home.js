import React from "react";
import styled from "styled-components";
import { colors, pageMargin } from "../constants";
import * as Illust from "../illusts";
import { Card } from "../components";

const Wrap = styled.div`
  /* background: yellowgreen; */
  margin: 0px ${pageMargin}px;
  padding: 100px 0px;
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: 700;
  margin-left: 16px;
  color: white;
`;

const BannerRow = styled.div`
  /* background: yellowgreen; */
  display: grid;
  grid-template-columns: 3fr 6fr 3fr;
`;
const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FindClubTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin-top: 32px;
  color: white;
  display: flex;
  align-items: center;
`;
const FindClubTitleCircle = styled.div`
  width: 18px;
  height: 18px;
  background: ${colors.primary};
  margin-right: 10px;
  border-radius: 100%;
`;
const FindClubRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* background: pink; */
  column-gap: 20px;
  row-gap: 20px;
  margin-top: 20px;
`;

export function Home() {
  return (
    <Wrap>
      <BannerRow>
        <div />
        <Banner>
          <Illust.House height="90px" />
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
      <FindClubTitle>
        <FindClubTitleCircle /> Find Clubs
      </FindClubTitle>
      <FindClubRow>
        <Card title="Framer Club" img={require("../images/framer.png")} />
        <Card title="Canvas Club" img={require("../images/canvas.jpg")} />
        <Card title="WebGL Club" img={require("../images/webgl-water.jpg")} />
        <Card />
      </FindClubRow>
    </Wrap>
  );
}
