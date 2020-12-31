import React from "react";
import styled from "styled-components";
import { colors, pageMargin } from "../constants";
import * as Illust from "../illusts";

const Wrap = styled.header`
  background: hsl(43, 82%, 73%);
  padding: 100px ${pageMargin}px;
`;

export function Footer() {
  return <Wrap>Footer</Wrap>;
}
