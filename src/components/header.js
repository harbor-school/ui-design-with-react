import React, { useState } from "react";
import styled from "styled-components";
import { pageMargin } from "../constants";
import * as Illust from "../illusts";
import { Link } from "react-router-dom";

const Wrap = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px ${pageMargin}px;
  /* background: blue; */
`;
const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
`;
const Title = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 700;
  margin-left: 16px;
`;

const MenuItems = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;

const MenuItem = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  margin-left: 16px;
`;

export function Header() {
  const [menu, setMenu] = useState(false);
  return (
    <Wrap>
      <Logo to="/">
        <Illust.Home height="32px" />
        <Title>Coding Club</Title>
      </Logo>
      <MenuItems>
        <MenuItem
          style={{
            position: "relative"
          }}
        >
          <img
            src="https://source.unsplash.com/random?portrait"
            alt="profile"
            style={{
              width: 36,
              height: 36,
              borderRadius: "100%",
              display: "block",
              objectFit: "cover",
              cursor: "pointer"
            }}
            onClick={() => setMenu(!menu)}
          />
          {menu && (
            <ul
              style={{
                background: "green",
                position: "absolute",
                top: "100%",
                right: 0,
                whiteSpace: "nowrap"
              }}
            >
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/my-clubs">My Clubs</Link>
              </li>
              <li>
                <Link to="/settings">Settings</Link>
              </li>
            </ul>
          )}
        </MenuItem>
      </MenuItems>
    </Wrap>
  );
}
