import React from "react";
import styled from "styled-components";
import * as Illust from "./illusts";

const Wrap = styled.div`
  background: white;
  box-shadow: 3px 10px 20px 0px hsla(130, 100%, 10%, 0.3);
  border-radius: 12px;
  overflow: hidden;
`;
const Img = styled.img`
  width: 100%;
  display: block;
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  align-items: center;
  /* background: green; */
`;
const Details = styled.div`
  /* background: pink; */
  display: flex;
  align-items: center;
`;
const Title = styled.h3`
  font-family: "Poppins", sans-serif;
`;
const MemberInfo = styled.span`
  display: flex;
  align-items: center;
  margin-left: 16px;
`;
const MemberNumber = styled.p`
  font-family: "Poppins", sans-serif;
  /* background: red; */
  display: inline-block;
  margin-left: 4px;
`;

export function Card() {
  return (
    <Wrap>
      <Img src={require("./images/react-three-fiber.gif")} />
      <Info>
        <Illust.Home />
        <Details>
          <Title>Three.js Club</Title>
          <MemberInfo>
            <Illust.User height="14px" />
            <MemberNumber>102</MemberNumber>
          </MemberInfo>
        </Details>
      </Info>
    </Wrap>
  );
}
