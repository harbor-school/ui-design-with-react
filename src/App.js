import React from "react";
import "./styles.css";
import styled from "styled-components";

const Guide = styled.div`
  background: blue;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: -1;
`;

const GuideRow = styled.div`
  background: green;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 10px;
  margin: 0px 20px;
`;
const GuideColumn = styled.div`
  background: pink;
  height: 100vh;
`;

const Content = styled.div``;

const Row = styled.div`
  background: yellowgreen;
  margin: 0px 20px;
`;
const Column = styled.div``;

export default function App() {
  return (
    <>
      <Guide>
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
      </Guide>
      <Content>
        <Row>
          <Column>Column</Column>
          <Column>Column</Column>
        </Row>
      </Content>
    </>
  );
}
