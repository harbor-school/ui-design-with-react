import React from "react";
import styled from "styled-components";
import * as Illust from "../illusts";
import { COLUMN_RATIO } from "../constants";

const ResponsiveWrap = styled.div`
  background: white;
  box-shadow: 3px 10px 20px 0px hsla(43, 100%, 13%, 0.3);
  border-radius: 12px;
  overflow: hidden;
  padding-bottom: ${COLUMN_RATIO * 100}%;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  position: absolute;
  top: 0;
`;
const InfoWrap = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  align-items: center;
`;
const Details = styled.div`
  display: flex;
  align-items: center;
`;
const Title = styled.h3`
  font-family: "Poppins", sans-serif;
  color: white;
`;
const MemberInfo = styled.span`
  display: flex;
  align-items: center;
  margin-left: 16px;
`;
const MemberNumber = styled.p`
  font-family: "Poppins", sans-serif;
  display: inline-block;
  margin-left: 4px;
  color: white;
`;

const Gradient = styled.div`
  background: linear-gradient(
    180deg,
    hsla(22, 100%, 13%, 0) 0%,
    hsla(22, 100%, 13%, 0.6) 100%
  );
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`;

export function Card({
  title = "Three.js Club",
  img = require("../images/billie.png")
}) {
  return (
    <ResponsiveWrap>
      <Img src={img} />
      <Gradient />
      <InfoWrap>
        <Info>
          <Illust.Home height="28px" />
          <Details>
            <Title>{title}</Title>
            <MemberInfo>
              <Illust.User height="14px" />
              <MemberNumber>101</MemberNumber>
            </MemberInfo>
          </Details>
        </Info>
      </InfoWrap>
    </ResponsiveWrap>
  );
}
