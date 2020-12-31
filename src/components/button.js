import React from "react";
import styled from "styled-components";
import { COLUMN_RATIO, colors } from "../constants";

const Wrap = styled.button`
  /* unset: all; */
  border: unset;
  background: unset;
  font-size: 16px;
  background: ${colors.primary};
  padding: 8px 24px;
  border-radius: 6px;
  color: white;
  font-weight: 700;
  /* font-family: "Poppins", sans-serif; */
  font-family: "Noto Sans KR", sans-serif;
`;

export function Button({ children }) {
  return <Wrap>{children}</Wrap>;
}
