import React from "react";
import styled from "styled-components";
import * as Illust from "../illusts";
import { COLUMN_RATIO } from "../constants";

const Wrap = styled.button`
  /* unset: all; */
  font-family: "Poppins", sans-serif;
  border: unset;
  background: unset;
  font-size: 16px;
  background: hsl(22, 100%, 56%);
  padding: 8px 24px;
  border-radius: 6px;
  color: white;
`;

export function Button({ children }) {
  return <Wrap>{children}</Wrap>;
}
