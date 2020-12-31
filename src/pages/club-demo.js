import React from "react";
import styled from "styled-components";
import { colors, pageMargin } from "../constants";
import { Card, Guide, TimelineCard } from "../components";
import * as Illust from "../assets/illusts";

const Wrap = styled.div`
  margin: 0px ${pageMargin}px;
  padding-top: 100px;
  padding-bottom: 200px;
`;
const ClubName = styled.h1`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
`;
const Title = styled.span`
  font-size: 32px;
  font-weight: 800;
  margin-left: 16px;
  color: white;
`;
const Row = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  column-gap: 48px;
  /* margin-top: 32px; */
`;
const Column = styled.div`
  position: relative;
`;
const Sticky = styled.div`
  position: sticky;
  top: 32px;
`;
const ColumnTitle = styled.h2`
  margin-top: 64px;
  margin-bottom: 28px;
`;
const MemberGrid = styled.div`
  /* display: grid; */
  /* grid-template-columns: repeat(3, 1fr); */
  display: flex;
  flex-wrap: wrap;
  margin: -10px;
`;
const MemberImg = styled.img`
  padding: 10px;
  width: 44px;
  height: 44px;
  border-radius: 100%;
  object-fit: cover;
`;

export function ClubDemo() {
  return (
    <Wrap>
      <ClubName>
        <Illust.House height="28px" />
        <Title>Three.js Club</Title>
      </ClubName>
      <Row>
        <Column>
          <ColumnTitle>Timeline</ColumnTitle>
          <TimelineCard />
          <TimelineCard />
          <TimelineCard />
        </Column>
        <Column>
          <Sticky>
            <ColumnTitle>MemberList</ColumnTitle>
            <MemberGrid>
              <MemberImg
                src={require("../assets/images/portraits/portrait-1.jpeg")}
                alt="profile"
              />
              <MemberImg
                src={require("../assets/images/portraits/portrait-2.jpeg")}
                alt="profile"
              />
              <MemberImg
                src={require("../assets/images/portraits/portrait-3.jpeg")}
                alt="profile"
              />
              <MemberImg
                src={require("../assets/images/portraits/portrait-4.jpeg")}
                alt="profile"
              />
              <MemberImg
                src={require("../assets/images/portraits/portrait-5.jpeg")}
                alt="profile"
              />
              <MemberImg
                src={require("../assets/images/portraits/portrait-6.jpeg")}
                alt="profile"
              />
              <MemberImg
                src={require("../assets/images/portraits/portrait-7.jpeg")}
                alt="profile"
              />
            </MemberGrid>
            <ColumnTitle>Rules</ColumnTitle>
            <p>
              One submission per week.
              <br />
              Penalty - 5$ per failure
            </p>
          </Sticky>
        </Column>
      </Row>
    </Wrap>
  );
}
