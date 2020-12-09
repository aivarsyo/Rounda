import React, { useRef, useEffect } from "react";
import { connect, styled } from "frontity";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Blue = ({ state }) => {
  const blueSection = useRef(null);

  const pinTheSection = () => {
    ScrollTrigger.create({
      trigger: [blueSection.current],
      start: "top top",
      end: "top +=100%",
      pin: true,
      pinSpacing: false,
    });
  };

  useEffect(() => {
    pinTheSection();
  });

  return (
    <>
      <Container ref={blueSection}>
        <div>
          <img src="https://dummyimage.com/600x400/5538d5/fff" />
          <p>
            I have looked over your internship report draft and added some
            comments.
          </p>
        </div>

        <div>
          <p>
            By applying behavioral science to customer experience, we design
            engaging digital products used by millions of people.
          </p>
        </div>

        <div>
          <img src="https://dummyimage.com/600x400/5538d5/fff" />
          <p>I have looked over your internship report draft and added some.</p>
        </div>

        <div>
          <p>
            We create human-centered enterprise software that has the polished,
            snappy feel of the best consumer apps.
          </p>
        </div>

        <div>
          <img src="https://dummyimage.com/400x600/5438D5/fff" />
          <p>Your internship report draft and added some.</p>
        </div>

        <div>
          <img src="https://dummyimage.com/400x600/5438D5/fff" />
          <p>We work with both global and local companies and actors</p>
        </div>
      </Container>
    </>
  );
};

export default connect(Blue);

const Container = styled.div`
  background-color: #e7e9f2;
  display: flex;
  flex-direction: column;

  div:nth-of-type(1) {
    align-self: flex-end;

    p {
      width: 50%;
    }
  }

  div:nth-of-type(2) {
    align-self: center;
    width: 50%;
    margin-top: 200px;
    margin-bottom: 200px;
    font-size: 20px;
  }

  div:nth-of-type(3) {
    align-self: center;
  }

  div:nth-of-type(4) {
    align-self: center;
    width: 50%;
    margin-top: 200px;
    margin-bottom: 200px;
    font-size: 20px;
  }

  div:nth-of-type(5) {
    align-self: flex-end;
    margin-right: 10vw;
  }

  div:nth-of-type(6) {
    align-self: flex-start;
    margin-top: 100px;
    margin-bottom: 100px;
  }
`;
