import React, { useEffect, useRef } from "react";
import { connect, styled, css } from "frontity";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AnimationSection = ({ state, actions }) => {
  //console.log(state);
  const data = state.source.get(state.router.link);
  //console.log(data);
  const post = state.source[data.type][data.id];
  //console.log(post);
  const content = post.acf;
  //console.log(content);

  const animationSection = useRef(null);

  const pinTheSection = () => {
    /* footer gets pinned from the very beginning */

    gsap.to([animationSection.current], {
      position: "fixed",
      scrollTrigger: {
        trigger: ".firstSection",
        start: "top top",
        //end: "+=100%",
        scrub: true,
      },
    });

    ScrollTrigger.create({
      trigger: [animationSection.current],
      start: "top top",
      //end: "bottom top",
      pin: true,
      pinSpacing: false,
      scrub: true,
    });

    gsap.to([animationSection.current.children], {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: [animationSection.current],
        //start: "top bottom",
        scrub: true,
      },
    });
  };

  useEffect(() => {
    pinTheSection();
  }, []);

  return (
    <>
      <Container ref={animationSection}>
        <img src={content.animation} />
      </Container>
    </>
  );
};

export default connect(AnimationSection);

const Container = styled.div`
  height: 100vh;
  background-color: #0f143c;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
