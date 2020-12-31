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
const Column = styled.div``;
const SubmissionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;

const Info = styled.div``;
const Name = styled.h1`
  margin-top: 28px;
`;
const Detail = styled.div``;
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
          <SubmissionsGrid>
            <SubmissionCard />
            <SubmissionCard />
            <SubmissionCard />
            <SubmissionCard />
            <SubmissionCard />
          </SubmissionsGrid>
        </Column>
      </Row>
    </Wrap>
  );
}
