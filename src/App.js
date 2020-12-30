import React from "react";
import "./styles.css";
import styled from "styled-components";

const Row = styled.div`
  background: green;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 10px;
`;
const Column = styled.div`
  background: pink;
  height: 100vh;
`;

export default function App() {
  return (
    <Row>
      <Column>Column</Column>
      <Column>Column</Column>
      <Column>Column</Column>
      <Column>Column</Column>
      <Column>Column</Column>
      <Column>Column</Column>
      <Column>Column</Column>
      <Column>Column</Column>
      <Column>Column</Column>
      <Column>Column</Column>
      <Column>Column</Column>
      <Column>Column</Column>
    </Row>
  );
}
