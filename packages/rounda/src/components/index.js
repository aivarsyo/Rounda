import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import Home from "./home";
import Footer from "./footer";

import gangsterRegular from "../fonts/gangstergrotesk-regular.ttf";
import gangsterLight from "../fonts/gangstergrotesk-light.ttf";

const Theme = ({ state, actions }) => {
  //console.log(state);
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  console.log(data);

  return (
    <>
      <Head>
        <title>{state.frontity.title}</title>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      <Global styles={globalStyles} />

      <Header />
      <Switch>
        <Home />
      </Switch>
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
