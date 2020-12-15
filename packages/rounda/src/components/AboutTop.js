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

  const topSection = useRef(null);

  const pinTheSection = () => {
    ScrollTrigger.create({
      trigger: [topSection.current],
      start: "bottom bottom",
      pin: true,
      pinSpacing: false,
    });
  };

  useEffect(() => {
    pinTheSection();
  }, []);

  return (
    <>
      <Container className="top" ref={topSection}>
        <div
          css={css`
            display: flex;
            flex-direction: row;
          `}
        >
          <p
            css={css`
              margin-left: 5vw;
              margin-right: 10vw;
              width: 40%;
            `}
          >
            {content.title_1}
          </p>
          <div
            css={css`
              pointer-events: none;
              overflow: hidden;
              margin-right: 5vw;
              width: 100vw;
              height: 100vw;
              max-width: 440px;
              max-height: 446px;
            `}
          >
            <Iframe
              src={`https://player.vimeo.com/video/${content.animation_1}?autoplay=1&loop=1&color=ffffff&title=0&byline=0&portrait=0&muted=1&background=1`}
              css={css`
                width: 100%;
                height: 100%;
                position: relative;
              `}
            ></Iframe>
          </div>
          <Script src="https://player.vimeo.com/api/player.js" />
        </div>

        <div
          css={css`
            display: grid;
            grid-template-columns: 640px;
            grid-template-rows: auto auto;
            margin-top: 20vh;
            margin-bottom: 20vh;
            margin-left: 5vw;
          `}
        >
          <p>{content.title_2}</p>
          <div
            css={css`
              pointer-events: none;
              overflow: hidden;
              width: 100vw;
              height: 100vw;
              max-width: 640px;
              max-height: 346px;
            `}
          >
            <Iframe
              src={`https://player.vimeo.com/video/${content.animation_2}?autoplay=1&loop=1&color=ffffff&title=0&byline=0&portrait=0&muted=1&background=1`}
              css={css`
                width: 100%;
                height: 100%;
                position: relative;
              `}
            ></Iframe>
          </div>
        </div>
      </Container>
    </>
  );
};

export default connect(About);

const Container = styled.div``;
