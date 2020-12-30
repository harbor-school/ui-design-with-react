import * as React from "react";
import styled from "styled-components";

const Illust = styled.svg``;

export function Home(props) {
  return (
    <Illust
      xmlns="http://www.w3.org/2000/svg"
      height="36"
      viewBox="0 0 100 58"
      {...props}
    >
      <path
        d="M 53.535 58 L 0 58 L 0 23.404 L 28.283 0 L 53.535 23.404 Z"
        fill="#CCC"
      ></path>
      <path
        d="M 28.283 0 L 80.303 0 L 100 19.333 L 53.535 23.404 Z"
        fill="rgb(77, 77, 77)"
      ></path>
      <path
        d="M 53.535 23.404 L 100 19.333 L 100 53.93 L 53.535 58 Z"
        fill="rgb(179, 179, 179)"
      ></path>
      <path
        d="M 35.354 58 L 17.172 58 L 17.172 41.719 C 17.172 41.719 17.172 41.719 17.172 41.719 C 17.172 36.662 21.242 32.561 26.263 32.561 C 31.283 32.561 35.354 36.662 35.354 41.719 Z"
        fill="rgb(179, 179, 179)"
      ></path>
      <path
        d="M 77.778 30.526 C 82.799 30.526 86.869 34.626 86.869 39.684 C 86.869 44.742 82.799 48.842 77.778 48.842 C 72.757 48.842 68.687 44.742 68.687 39.684 C 68.687 34.626 72.757 30.526 77.778 30.526 Z"
        fill="rgb(153, 153, 153)"
      ></path>
    </Illust>
  );
}
