import React from "react";
import "./styles.css";
import styled from "styled-components";
import { pageMargin } from "./constants";
import * as Illust from "./illusts";

const Guide = styled.div`
  background: blue;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: -1;
  opacity: 0.2;
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

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px ${pageMargin}px;
  background: white;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
`;
const Title = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin-left: 16px;
`;
const MenuItems = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  /* background: green; */
`;

const MenuItem = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  margin-left: 16px;
`;

const Content = styled.div`
  /* background: yellowgreen; */
  margin: 0px ${pageMargin}px;
`;

const BannerRow = styled.div`
  /* background: yellowgreen; */
  display: grid;
  grid-template-columns: 3fr 6fr 3fr;
  margin-top: 100px;
`;
const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FindClubRow = styled.div``;
const FindClubTitle = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin-top: 32px;
`;

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
      <Header>
        <Logo>
          <Illust.Home />
          <Title>Coding Club</Title>
        </Logo>
        <MenuItems>
          <MenuItem>
            <img
              src="https://source.unsplash.com/random?profile"
              alt="profile"
              style={{
                width: 36,
                height: 36,
                borderRadius: "100%",
                display: "block"
              }}
            />
          </MenuItem>
        </MenuItems>
      </Header>
      <Content>
        <BannerRow>
          <div />
          <Banner>
            <Illust.Home height="98px" />
            <Title
              style={{
                fontSize: 70,
                lineHeight: "1em",
                textAlign: "center",
                marginTop: 24
              }}
            >
              Coding
              <br />
              Club
            </Title>
          </Banner>
        </BannerRow>
        <FindClubRow>
          <FindClubTitle>Find Clubs</FindClubTitle>
        </FindClubRow>
      </Content>
    </>
  );
}
