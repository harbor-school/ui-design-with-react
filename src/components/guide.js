import React from "react";
import styled from "styled-components";
import { pageMargin } from "../constants";

const Wrap = styled.div`
  background: blue;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: -1;
  opacity: 0;
`;

const GuideRow = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  margin: 0px ${pageMargin}px;
`;
const GuideColumn = styled.div`
  border: 1px solid pink;
  height: 100vh;
`;

export function Guide() {
  return (
    <Wrap>
      <GuideRow>
        <GuideColumn />
        <GuideColumn />
        <GuideColumn />
        <GuideColumn />
        <GuideColumn />
        <GuideColumn />
        <GuideColumn />
        <GuideColumn />
        <GuideColumn />
        <GuideColumn />
        <GuideColumn />
        <GuideColumn />
      </GuideRow>
    </Wrap>
  );
}
