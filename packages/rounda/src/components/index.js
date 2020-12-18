import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import Home from "./home";
import Works from "./works";
import Empty from "./empty";
import About from "./about";
import Services from "./services";
import SingleWork from "./singleWork";

import gangsterRegular from "../fonts/gangstergrotesk-regular.ttf";
import gangsterLight from "../fonts/gangstergrotesk-light.ttf";

const Theme = ({ state, actions }) => {
  //console.log(state);
  const data = state.source.get(state.router.link);
  //console.log(data);
  //const page = state.source[data.type][data.id];
  //console.log(page);
  //const content = page.acf;
  //console.log(content);

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
        <Home when={data.isHome} />
        {/* <Empty when={data.id == 35} /> */}
        <Works when={data.id == 35 && data.isReady} />
        <About when={data.id == 53 && data.isReady} />
        <Services when={data.id == 75 && data.isReady} />
        <SingleWork when={data.isPost && data.isReady} />
      </Switch>
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

  iframe {
    border: none;
  }
`;
