import React, { useRef, useEffect } from "react";
import { connect, styled, css } from "frontity";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "../images/logo.png";
gsap.registerPlugin(ScrollTrigger);

const Footer = ({ state }) => {
  const yellowSection = useRef(null);

  const pinTheSection = () => {
    /* footer gets pinned from the very beginning */
    ScrollTrigger.create({
      trigger: [yellowSection.current],
      start: "bottom bottom",
      pin: true,
      pinSpacing: false,
    });

    gsap.to([yellowSection.current], {
      /* just before the footer is revealed, it changes
        its position to fixed, just so it
        doesn't hide under the content
        through the page and can possibly
        be loaded only when needed */
      position: "fixed",
      scrollTrigger: {
        trigger: ".main",
        start: "bottom bottom",
        scrub: true,
      },
    });
  };

  useEffect(() => {
    pinTheSection();
  });

  return (
    <>
      <Container ref={yellowSection}>
        <p
          css={css`
            transform: rotate(-180deg);
            writing-mode: vertical-rl;
            grid-column: 1/2;
            justify-self: start;
            margin: 0;
            font-family: "gangsterRegular";
            font-size: 50px;
          `}
        >
          Thank you for popping in.
        </p>
        <img src={logo} />
        <div>
          <p>say hi to us on</p>
          <p>mail@rounda.com</p>
          <p>instagram</p>
          <p>facebook</p>
          <p>linkedIn</p>
        </div>
      </Container>
    </>
  );
};

export default connect(Footer);

const Container = styled.footer`
  height: 100vh;
  background-color: #f7f7a8;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  bottom: 0;
  left: 0;
  z-index: -1;

  img {
    width: 40vw;
    height: auto;
    grid-column: 2/3;
  }

  div {
    grid-column: 3/4;
    text-align: right;
    padding-right: 50px;
    padding-top: 100px;

    p {
      margin: 0;
    }

    p:nth-of-type(1) {
      margin-bottom: 10px;
    }
  }
`;
