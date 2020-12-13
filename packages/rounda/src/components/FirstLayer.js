import React, { useRef, useEffect } from "react";
import { connect, styled, css } from "frontity";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const FirstLayer = ({ state }) => {
  //console.log(state);
  const data = state.source.get(state.router.link);
  //console.log(data);
  const page = state.source[data.type][data.id];
  //console.log(page);
  const content = page.acf;
  //console.log(content);

  const videoSection = useRef(null);

  let pinTrigger;

  const pinTheSection = () => {
    /* footer gets pinned from the very beginning */
    pinTrigger = ScrollTrigger.create({
      trigger: [videoSection.current],
      start: "top top",
      pin: true,
      pinSpacing: false,
    });
    console.log("start");
  };

  useEffect(() => {
    pinTheSection();

    pinTrigger.refresh();

    return () => {
      pinTrigger.kill();
    };
  }, [data]);

  return (
    <>
      <Container ref={videoSection}>
        <div
          css={css`
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            pointer-events: none;
            overflow: hidden;
          `}
        >
          <iframe
            src={`https://player.vimeo.com/video/${content.introduction_video}?autoplay=1&loop=1&color=ffffff&title=0&byline=0&portrait=0&muted=1&background=1`}
            css={css`
              width: 100vw;
              height: 56.25vw; /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
              min-height: 100vh;
              min-width: 177.77vh; /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            `}
            /* frameborder="0" */
            allow="autoplay; fullscreen"
            /* allowfullscreen */
          ></iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </Container>
    </>
  );
};

export default connect(FirstLayer);

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
