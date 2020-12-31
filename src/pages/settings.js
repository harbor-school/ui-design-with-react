import React from "react";
import styled from "styled-components";
import { pageMargin } from "../constants";
import { Card, Guide } from "../components";

const Wrap = styled.div`
  margin: 0px ${pageMargin}px;
  padding: 100px 0px;
`;

export function Settings() {
  return <Wrap>Settings Page</Wrap>;
}
