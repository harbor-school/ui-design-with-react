import React from "react";
import styled from "styled-components";
import { SUBMISSION_RATIO } from "../constants";

const ResponsiveWrap = styled.div`
  background: gold;
  overflow: hidden;
  padding-bottom: ${SUBMISSION_RATIO * 100}%;
  position: relative;
`;
const Content = styled.div`
  position: absolute;
  top: 0;
  background: pink;
  width: 100%;
  height: 100%;
`;

export function SubmissionCard({
  img = "https://source.unsplash.com/random?ux"
}) {
  return (
    <ResponsiveWrap>
      <Content>
        <img
          src={img}
          alt="submission"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />
      </Content>
    </ResponsiveWrap>
  );
}
