import React, { useEffect, useRef } from "react";
import { connect, styled, css } from "frontity";
import Footer from "./footer";
import Link from "./link";
import gsap from "gsap";
import AnimationSection from "./animationSection";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SingleWork = ({ state, actions }) => {
  //console.log(state);
  const data = state.source.get(state.router.link);
  //console.log(data);
  const post = state.source[data.type][data.id];
  //console.log(post);
  const content = post.acf;
  //console.log(content);

  return (
    <>
      <Container className="main">
        <div
          className="firstSection"
          css={css`
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            z-index: 1;
            background-color: #e7e9f2;
          `}
        >
          <div
            css={css`
              display: flex;
              flex-direction: column;
              padding-top: 15vh;
              font-size: 30px;
              width: 50%;
              align-self: center;

              @media only screen and (max-width: 768px) {
                width: 90%;
              }

              @media only screen and (max-width: 425px) {
                width: 80%;
                font-size: 6vw;
              }
            `}
          >
            <p>{content.title}</p>
            <div
              dangerouslySetInnerHTML={{ __html: content.description }}
            ></div>
          </div>
        </div>

        <AnimationSection />
        <div
          css={css`
            z-index: 1;
            background-color: #e7e9f2;
          `}
        >
          <div
            css={css`
              width: 60%;
              font-size: 24px;
              margin: 10vw;

              @media only screen and (max-width: 768px) {
                width: 80%;
                font-size: 20px;
              }

              @media only screen and (max-width: 425px) {
                font-size: 5vw;
              }
            `}
          >
            <div
              dangerouslySetInnerHTML={{ __html: content.description_2 }}
            ></div>
          </div>
        </div>

        <div
          css={css`
            background-color: black;
            display: flex;
            flex-direction: column;
            color: white;
            z-index: 1;
          `}
        >
          <div
            css={css`
              display: flex;
              flex-direction: column;
              img {
                width: 100%;
              }
              width: 60vw;

              @media only screen and (max-width: 768px) {
                width: 80vw;
              }

              @media only screen and (max-width: 425px) {
                width: 90vw;
              }
            `}
          >
            <img src={content.image_1} />
            <div
              dangerouslySetInnerHTML={{ __html: content.extra_text_1 }}
            ></div>
          </div>

          <div
            css={css`
              display: grid;
              grid-template-columns: auto auto;
              grid-template-rows: auto auto;
              column-gap: 5vw;
              width: 60vw;
              align-self: flex-end;
              margin: 10vw;

              img {
                width: 100%;
              }

              @media only screen and (max-width: 768px) {
                width: 80vw;
              }

              @media only screen and (max-width: 425px) {
                width: 90vw;
                margin-right: 0;
              }
            `}
          >
            <img
              src={content.image_2}
              css={css`
                grid-column: 1/2;
                grid-row: 1/2;
              `}
            />
            <img
              src={content.image_3}
              css={css`
                grid-column: 2/3;
                grid-row: 1/2;
              `}
            />
            <div
              dangerouslySetInnerHTML={{ __html: content.extra_text_2 }}
              css={css`
                grid-column: 1/3;
                grid-row: 2/3;
              `}
            ></div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default connect(SingleWork);

const Container = styled.main`
  background-color: #e7e9f2;
  display: flex;
  flex-direction: column;
`;
