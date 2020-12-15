import React, { useRef, useEffect } from "react";
import { connect, styled } from "frontity";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Blue = ({ state }) => {
  //console.log(state);
  const data = state.source.get(state.router.link);
  //console.log(data);
  const page = state.source[data.type][data.id];
  //console.log(page);
  const content = page.acf;
  //console.log(content);

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
  }, []);

  return (
    <>
      <Container ref={blueSection}>
        <div>
          <img src={content.image_2} />
          <p>{content.paragraph_2}</p>
        </div>

        <div>
          <p>{content.title_3}</p>
        </div>

        <div>
          <img src={content.image_3} />
          <p>{content.paragraph_3}</p>
        </div>

        <div>
          <p>{content.title_4}</p>
        </div>

        <div>
          <img src={content.image_4} />
          <p>{content.paragraph_4}</p>
        </div>

        <div>
          <img src={content.image_5} />
          <p>{content.paragraph_5}</p>
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
