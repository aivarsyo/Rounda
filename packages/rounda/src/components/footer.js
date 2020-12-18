import React, { useRef, useEffect } from "react";
import { connect, styled, css } from "frontity";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "../images/logo.png";
gsap.registerPlugin(ScrollTrigger);

const Footer = ({ state, actions }) => {
  const data = state.source.get(state.router.link);

  const yellowSection = useRef(null);

  const pinTheSection = () => {
    /* footer gets pinned from the very beginning */
    ScrollTrigger.create({
      trigger: [yellowSection.current],
      start: "bottom bottom",
      pin: true,
      pinSpacing: false,
      scrub: true,
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

    setTimeout(function () {
      let triggers = ScrollTrigger.getAll();

      triggers.forEach((trigger) => {
        trigger.refresh();
      });
    }, 1000);

    return () => {
      let triggers = ScrollTrigger.getAll();
      triggers.forEach((trigger) => {
        trigger.kill();
      });
    };
  }, [data]);

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

            @media only screen and (max-width: 425px) {
              font-size: 12vw;
            }
          `}
        >
          Thank you for popping in.
        </p>
        <img src={logo} />
        <div>
          <p>say hi! to us on</p>
          <a href="mailto:mail@rounda.com">mail@rounda.com</a>
          <a href="https://www.instagram.com/studio.rounda/">instagram</a>
          <a href="https://www.facebook.com/studio.rounda">facebook</a>
          <a href="https://www.linkedin.com/company/rounda">linkedIn</a>
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
  position: static;

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
    display: flex;
    flex-direction: column;

    a {
      position: static;
      text-decoration: none;
      color: black;
      mix-blend-mode: normal;
    }

    a:nth-of-type(1) {
      color: #4224d2;
    }
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr 1fr;
    font-size: 4vw;

    p {
      grid-column: 1/2;
      grid-row: 1/3;
    }

    img {
      grid-column: 2/3;
      grid-row: 2/3;
    }

    div {
      grid-column: 2/3;
      grid-row: 1/2;
      padding: 0;
      text-align: left;
      align-self: end;
    }
  }

  @media only screen and (max-width: 425px) {
    font-size: 6vw;

    img {
      width: 50vw;
    }
  }
`;
