import React, { useRef, useEffect } from "react";
import { connect, styled } from "frontity";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Black = ({ state }) => {
  const blackSection = useRef(null);

  const pinTheSection = () => {
    ScrollTrigger.create({
      trigger: [blackSection.current],
      start: "bottom bottom",
      pin: true,
      pinSpacing: false,
    });
  };

  const scrollThePinnedContent = () => {
    gsap.to([blackSection.current.children], {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: [blackSection.current],
        start: "bottom bottom",
        scrub: true,
      },
    });
  };

  useEffect(() => {
    pinTheSection();
    scrollThePinnedContent();
  });

  return (
    <>
      <Container ref={blackSection}>
        <div>
          <p>
            Rounda is an an independent UI/UX design and branding agency based
            in Copenhagen.
          </p>
        </div>

        <div>
          <img src="https://dummyimage.com/400x600/5438D5/fff" />
          <p>
            As a full-service UX design agency, we work closely with our clients
            to define, design and develop transformative user experiences across
            all platforms and brand’s touchpoints.
          </p>
          <p>Message can not be blocked.</p>
        </div>
      </Container>
    </>
  );
};

export default connect(Black);

const Container = styled.div`
  background-color: black;
  color: white;
  padding-bottom: 100px;

  div:nth-of-type(1) {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      width: 50%;
      font-size: 30px;
    }
  }

  div:nth-of-type(2) {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;

    img {
      grid-row: 1/2;
      grid-column: 1/2;
    }

    p:nth-of-type(1) {
      grid-row: 1/2;
      grid-column: 2/3;
      align-self: center;
      width: 80%;
      margin-left: 20px;
      margin-top: 60px;
      font-size: 20px;
    }

    p:nth-of-type(2) {
      grid-row: 2/3;
      grid-column: 1/2;
    }
  }
`;
