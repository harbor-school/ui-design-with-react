import React from "react";
import styled from "styled-components";
import { SUBMISSION_RATIO } from "../constants";

const ResponsiveWrap = styled.div`
  background: gold;
  /* box-shadow: 3px 10px 20px 0px hsla(130, 100%, 10%, 0.3); */
  /* border-radius: 12px; */
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

export function SubmissionCard() {
  return (
    <ResponsiveWrap>
      <Content>SubmissionCard</Content>
    </ResponsiveWrap>
  );
}
