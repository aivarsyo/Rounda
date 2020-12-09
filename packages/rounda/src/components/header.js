import React from "react";
import { Global, connect, styled, css } from "frontity";
import logo from "../images/logo.png";
import menuIcon from "../images/menuIcon.png";
import Link from "./link";

const Header = ({ state }) => {
  return (
    <>
      <Global styles={globalStyles} />
      <Link href="/">
        <img
          css={css`
            width: 45px;
          `}
          src={logo}
        ></img>
      </Link>

      <div
        css={css`
          mix-blend-mode: difference;
          position: fixed;
          top: 34px;
          right: 20px;
          cursor: pointer;
          z-index: 1;
        `}
      >
        <img
          css={css`
            width: 45px;
          `}
          src={menuIcon}
        ></img>
      </div>
    </>
  );
};

export default connect(Header);

const globalStyles = css`
  a:nth-of-type(1) {
    position: fixed;
    top: 20px;
    left: 20px;
    mix-blend-mode: difference;
    z-index: 1;
  }
`;
