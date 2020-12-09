import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import Home from "./home";
import Footer from "./footer";

import gangsterRegular from "../fonts/gangstergrotesk-regular.ttf";
import gangsterLight from "../fonts/gangstergrotesk-light.ttf";

const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <>
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      <Global styles={globalStyles} />

      <Header />
      <Home />
      <Footer />
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  @font-face {
    font-family: "gangsterRegular";
    src: url(${gangsterRegular});
  }

  @font-face {
    font-family: "gangsterLight";
    src: url(${gangsterLight});
  }

  body {
    margin: 0;
    font-family: "gangsterLight";
  }

  p::selection {
    background-color: #f7f7a8;
  }
`;
