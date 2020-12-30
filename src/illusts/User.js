import * as React from "react";
import styled from "styled-components";

const Illust = styled.svg``;

export function User(props) {
  return (
    <Illust
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      style={{
        display: "block"
        // background: "green"
      }}
      {...props}
    >
      <path
        d="M 20 21 L 20 19 C 20 16.791 18.209 15 16 15 L 8 15 C 5.791 15 4 16.791 4 19 L 4 21"
        fill="transparent"
        stroke-width="2"
        stroke="rgb(0,0,0)"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-dasharray=""
      ></path>
      <path
        d="M 8 7 C 8 4.791 9.791 3 12 3 C 14.209 3 16 4.791 16 7 C 16 9.209 14.209 11 12 11 C 9.791 11 8 9.209 8 7 Z"
        fill="transparent"
        stroke-width="2"
        stroke="rgb(0,0,0)"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-dasharray=""
      ></path>
    </Illust>
  );
}
