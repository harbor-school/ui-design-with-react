import React from "react";
import styled from "styled-components";
import { colors, TIMELINE_RATIO } from "../constants";
import { Link } from "react-router-dom";

const Wrap = styled.div`
  background: ${colors.bacgkroundSecondary};
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 32px;
`;
const ResponsiveWrap = styled.div`
  background: gold;
  padding-bottom: ${TIMELINE_RATIO * 100}%;
  position: relative;
`;
const Content = styled(Link)`
  position: absolute;
  top: 0;
  background: pink;
  width: 100%;
  height: 100%;
`;
const Description = styled.p`
  padding: 28px;
`;

export function TimelineCard({
  img = "https://source.unsplash.com/random?ux"
}) {
  return (
    <Wrap>
      <ResponsiveWrap>
        <Content to="/gallery/billie-with-youtube">
          <img
            src={img}
            alt="post-thumbnail"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
          />
        </Content>
      </ResponsiveWrap>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at
        volutpat diam. Donec odio mi, bibendum a ex ut, lacinia porta eros.
        Fusce ornare convallis metus, ac maximus leo lobortis auctor...
      </Description>
    </Wrap>
  );
}
