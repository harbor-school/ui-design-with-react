import React from "react";
import styled from "styled-components";
import * as Illust from "../assets/illusts";
import { colors, COLUMN_RATIO } from "../constants";
import { Link } from "react-router-dom";

const Info = styled(Link)`
  display: flex;
  justify-content: space-between;
  padding: 12px 15px;
  align-items: center;
  background: ${colors.bacgkroundSecondary};
  border-radius: 6px;
  text-decoration: none;
  color: inherit;
`;
const Title = styled.h3``;

export function ClubCardMinimized({ title = "Three.js Club" }) {
  return (
    <Info to="/club/threejs-club">
      <Illust.House height="28px" />
      <Title>{title}</Title>
    </Info>
  );
}
