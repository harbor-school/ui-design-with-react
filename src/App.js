import React from "react";
import "./styles.css";
import styled from "styled-components";
import { pageMargin } from "./constants";

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
  margin: 0px ${pageMargin}px;
`;
const GuideColumn = styled.div`
  background: pink;
  height: 100vh;
`;

const Content = styled.div``;

const Row = styled.div`
  background: yellowgreen;
  margin: 0px ${pageMargin}px;
`;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px ${pageMargin}px;
  background: white;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
`;
const Illust = styled.svg``;
const Title = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin-left: 16px;
`;
const MenuItems = styled.div`
  display: flex;
  justify-content: end;
`;

const MenuItem = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  margin-left: 16px;
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
        <Header>
          <Logo>
            <Illust
              xmlns="http://www.w3.org/2000/svg"
              height="36"
              viewBox="0 0 100 58"
            >
              <path
                d="M 53.535 58 L 0 58 L 0 23.404 L 28.283 0 L 53.535 23.404 Z"
                fill="#CCC"
              ></path>
              <path
                d="M 28.283 0 L 80.303 0 L 100 19.333 L 53.535 23.404 Z"
                fill="rgb(77, 77, 77)"
              ></path>
              <path
                d="M 53.535 23.404 L 100 19.333 L 100 53.93 L 53.535 58 Z"
                fill="rgb(179, 179, 179)"
              ></path>
              <path
                d="M 35.354 58 L 17.172 58 L 17.172 41.719 C 17.172 41.719 17.172 41.719 17.172 41.719 C 17.172 36.662 21.242 32.561 26.263 32.561 C 31.283 32.561 35.354 36.662 35.354 41.719 Z"
                fill="rgb(179, 179, 179)"
              ></path>
              <path
                d="M 77.778 30.526 C 82.799 30.526 86.869 34.626 86.869 39.684 C 86.869 44.742 82.799 48.842 77.778 48.842 C 72.757 48.842 68.687 44.742 68.687 39.684 C 68.687 34.626 72.757 30.526 77.778 30.526 Z"
                fill="rgb(153, 153, 153)"
              ></path>
            </Illust>
            <Title>Coding Club</Title>
          </Logo>
          <MenuItems>
            <MenuItem>MenuItem 1</MenuItem>
            <MenuItem>MenuItem 2</MenuItem>
          </MenuItems>
        </Header>
        <Row>
          <Column>Column</Column>
          <Column>Column</Column>
        </Row>
      </Content>
    </>
  );
}
