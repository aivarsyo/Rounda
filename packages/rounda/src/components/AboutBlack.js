import React, { useRef, useEffect } from "react";
import { connect, css, styled } from "frontity";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Script from "@frontity/components/script";
import Iframe from "@frontity/components/iframe";

const About = ({ state }) => {
  //console.log(state);
  const data = state.source.get(state.router.link);
  //console.log(data);
  const page = state.source[data.type][data.id];
  //console.log(page);
  const content = page.acf;
  //console.log(content);

  return (
    <>
      <Container className="black">
        <div
          css={css`
            align-self: flex-end;
            width: 50%;
          `}
        >
          <p>{content.paragraph_1}</p>
        </div>

        <div
          css={css`
            display: grid;
            grid-template-columns: 440px;
            grid-template-rows: auto;
            margin-top: 10vw;
            color: #f7f7a8;
            font-family: "gangsterRegular";
          `}
        >
          <div
            css={css`
              pointer-events: none;
              overflow: hidden;
              width: 100vw;
              height: 100vw;
              max-width: 440px;
              max-height: 585px;
            `}
          >
            <Iframe
              src={`https://player.vimeo.com/video/${content.animation_3}?autoplay=1&loop=1&color=ffffff&title=0&byline=0&portrait=0&muted=1&background=1`}
              css={css`
                width: 100%;
                height: 100%;
                position: relative;
              `}
            ></Iframe>
          </div>
          <p>{content.paragraph_2}</p>
        </div>
      </Container>
    </>
  );
};

export default connect(About);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10vw 5vw 10vw 5vw;
  background-color: black;
  color: white;
  z-index: 1;
`;
