import React from "react";
import styled from "styled-components";
import * as Illust from "../assets/illusts";
import { colors, COLUMN_RATIO } from "../constants";
import { Link } from "react-router-dom";

const Info = styled(Link)`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  background: ${colors.bacgkroundSecondary};
  border-radius: 6px;
  text-decoration: none;
  color: inherit;
  max-width: 250px;
  letter-spacing: 0.2px;
  /* font-family: "Noto Sans KR", sans-serif; */
`;
const Title = styled.h3`
  font-size: 20px;
`;

export function ClubCardMinimized({ title = "Three.js Club" }) {
  return (
    <Info to="/club/threejs-club">
      <Illust.House height="24px" />
      <Title>{title}</Title>
    </Info>
  );
}
