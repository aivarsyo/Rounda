import React, { useRef, useEffect } from "react";
import { connect, styled } from "frontity";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import cursor from "../images/cursor.png";

const Black = ({ state }) => {
  //console.log(state);
  const data = state.source.get(state.router.link);
  //console.log(data);
  const page = state.source[data.type][data.id];
  //console.log(page);
  const content = page.acf;
  //console.log(content);

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
  }, []);

  return (
    <>
      <Container ref={blackSection}>
        <div>
          <p>{content.title_1}</p>
        </div>

        <div>
          <img src={content.image_1} />
          <p>{content.title_2}</p>
          <p>{content.paragraph_1}</p>
        </div>
      </Container>
    </>
  );
};

export default connect(Black);

const Container = styled.div`

img {
  cursor: url(${cursor}), auto;
}

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
      width: 45vw;
      max-width: 450px;
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
      width: 45vw;
      max-width: 450px;
    }
  }

  @media only screen and (max-width: 768px) {
    div:nth-of-type(1) {
      p {
        width: 70%;
        font-size: 30px;
      }
    }

    div:nth-of-type(2) {
      
      grid-template-columns: auto;
      grid-template-rows: auto auto auto;
  
      img {
        grid-row: 1/2;
        grid-column: 1/2;
        width: 55vw;
       
      }
  
      p:nth-of-type(1) {
        grid-row: 3/4;
        grid-column: 1/2;
        font-size: 4vw;
      }
  
      p:nth-of-type(2) {
        grid-row: 2/3;
        grid-column: 1/2;
        width: 55vw;
       
      }
    }
  }

  @media only screen and (max-width: 425px) {

    div:nth-of-type(1) {
      p {
        
        font-size: 10vw;
      }
    }
    div:nth-of-type(2) {
  
      img {
        width: 70vw;
      }
  
      p:nth-of-type(1) {
        font-size: 6vw;
      }
  
      p:nth-of-type(2) {
        width: 70vw;
       
      }
    }
  }
  }
`;
