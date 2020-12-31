import React from "react";
import styled from "styled-components";
import { pageMargin } from "../constants";
import * as Illust from "../illusts";
import { Card, Guide, SubmissionCard } from "../components";

const Wrap = styled.div`
  margin: 0px ${pageMargin}px;
  padding: 100px 0px;
  font-family: "Poppins", sans-serif;
`;
const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  column-gap: 48px;
`;
const Column = styled.div`
  position: relative;
`;
const Filter = styled.div`
  /* position: absolute;
  right: 0;
  top: -2.5em; */
  text-align: right;
  margin-bottom: 20px;
  font-size: 14px;
`;
const SubmissionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;

const Info = styled.div``;
const Name = styled.h1`
  margin-top: 28px;
  line-height: 1em;
`;
const Detail = styled.div`
  margin-top: 12px;
`;
const DetailBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;
const DetailTitle = styled.span``;
const DetailAmount = styled.span``;

export function Profile() {
  return (
    <Wrap>
      <Row>
        <Column>
          <img
            src="https://source.unsplash.com/random?portrait"
            alt="profile"
            style={{
              width: 200,
              height: 200,
              borderRadius: "100%",
              display: "block",
              objectFit: "cover"
            }}
          />
          <Info>
            <Name>Yongmin Ruucm</Name>
            <Detail>
              <DetailBlock>
                <DetailTitle>Submissions</DetailTitle>
                <DetailAmount>12,154</DetailAmount>
              </DetailBlock>
              <DetailBlock>
                <DetailTitle>Appreciations</DetailTitle>
                <DetailAmount>8,154</DetailAmount>
              </DetailBlock>
            </Detail>
          </Info>
        </Column>
        <Column>
          <Filter>Canvas Club (4) / Three.js Club (1)</Filter>
          <SubmissionsGrid>
            <SubmissionCard img={require("../images/profile/canvas-1.png")} />
            <SubmissionCard img={require("../images/profile/canvas-2.png")} />
            <SubmissionCard img={require("../images/profile/canvas-3.png")} />
            <SubmissionCard img={require("../images/profile/canvas-4.png")} />
            <SubmissionCard img={require("../images/profile/threejs-1.png")} />
          </SubmissionsGrid>
        </Column>
      </Row>
    </Wrap>
  );
}
