import React from "react";
import styled from "styled-components";
import { colors, pageMargin } from "../constants";
import { Card, Guide } from "../components";

const Wrap = styled.div`
  margin: 0px ${pageMargin}px;
  padding-top: 100px;
  padding-bottom: 200px;
`;

export function ClubDemo() {
  return <Wrap>ClubDemo</Wrap>;
}
