import React from "react";
import styled from "styled-components";
import { SUBMISSION_RATIO } from "../constants";
import { Link } from "react-router-dom";

const ResponsiveWrap = styled.div`
  background: gold;
  overflow: hidden;
  padding-bottom: ${SUBMISSION_RATIO * 100}%;
  position: relative;
`;
const Content = styled(Link)`
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
      <Content to="/gallery/billie-with-youtube">
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
