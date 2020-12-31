import React from "react";
import styled from "styled-components";
import { colors, pageMargin } from "../constants";
import { Card, Guide } from "../components";

const Wrap = styled.div`
  margin: 0px ${pageMargin}px;
  padding-top: 100px;
  padding-bottom: 200px;
`;
const Info = styled.div`
  margin-top: 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h1``;
const Date = styled.span`
  font-size: 20px;
  margin-top: 8px;
`;
const Description = styled.p`
  margin-top: 64px;
  text-align: justify;
`;
const ClubName = styled.label`
  background: ${colors.primary};
  color: white;
  border-radius: 1000px;
  padding: 6px 20px;
  font-family: "Noto Sans KR", sans-serif;
  display: inline-block;
  margin-top: 16px;
`;

export function PostDemo() {
  return (
    <Wrap>
      <img
        src={require("../assets/images/billie.png")}
        alt="profile"
        style={{
          width: "100%",
          display: "block",
          objectFit: "cover"
        }}
      />
      <Info>
        <Title>Three.js Practice with Billie</Title>
        <Date>20.12.31</Date>
        <ClubName>Three.js Club</ClubName>
      </Info>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at
        volutpat diam. Donec odio mi, bibendum a ex ut, lacinia porta eros.
        Fusce ornare convallis metus, ac maximus leo lobortis auctor.
        Suspendisse id enim id tellus vestibulum condimentum a eu nulla. Fusce
        viverra venenatis mauris quis facilisis. Suspendisse fringilla bibendum
        quam quis commodo. Cras rutrum, felis non euismod aliquet, purus lectus
        pellentesque tortor, volutpat venenatis dui nunc luctus neque. Sed
        gravida vel augue et egestas. Praesent laoreet libero et nisl porttitor
        efficitur.
      </Description>
    </Wrap>
  );
}
