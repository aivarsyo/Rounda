import React, { useRef, useEffect } from "react";
import { connect, css, styled } from "frontity";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Services = ({ state }) => {
  //console.log(state);
  const data = state.source.get(state.router.link);
  //console.log(data);
  const page = state.source[data.type][data.id];
  //console.log(page);
  const content = page.acf;
  //console.log(content);

  //document.querySelector(".serviceOne")

  const invert = (event) => {
    const clickedEl = event.target.parentElement;

    const serviceOne = document.querySelector(".serviceOne");
    const serviceTwo = document.querySelector(".serviceTwo");

    if (clickedEl.classList.contains("closed") && clickedEl == serviceOne) {
      console.log("was closed");
      gsap.from(".textOne", {
        y: -150,
      });

      gsap.to(".textOne", {
        opacity: 1,
        pointerEvents: "auto",
      });
    } else if (
      clickedEl.classList.contains("opened") &&
      clickedEl == serviceOne
    ) {
      console.log("was opened");

      const tl = gsap.timeline();

      tl.to(".textOne", {
        y: -150,
      });

      tl.set(".textOne", {
        y: 0,
      });

      gsap.to(".textOne", {
        opacity: 0,
        pointerEvents: "none",
      });
    }

    if (clickedEl.classList.contains("closed") && clickedEl == serviceTwo) {
      console.log("was closed");
      gsap.from(".textTwo", {
        y: -150,
      });

      gsap.to(".textTwo", {
        opacity: 1,
        pointerEvents: "auto",
      });
    } else if (
      clickedEl.classList.contains("opened") &&
      clickedEl == serviceTwo
    ) {
      console.log("was opened");

      const tl = gsap.timeline();

      tl.to(".textTwo", {
        y: -150,
      });

      tl.set(".textTwo", {
        y: 0,
      });

      gsap.to(".textTwo", {
        opacity: 0,
        pointerEvents: "none",
      });
    }

    if (clickedEl.classList.contains("closed")) {
      clickedEl.classList.remove("closed");
      clickedEl.classList.add("opened");

      gsap.to(".main", {
        backgroundColor: "black",
      });

      gsap.to(".service", {
        color: "white",
      });
    } else if (clickedEl.classList.contains("opened")) {
      clickedEl.classList.remove("opened");
      clickedEl.classList.add("closed");
    }

    if (
      serviceTwo.classList.contains("closed") &&
      serviceOne.classList.contains("closed")
    ) {
      gsap.to(".main", {
        backgroundColor: "#e7e9f2",
      });

      gsap.to(".service", {
        color: "black",
      });

      const tl = gsap.timeline();

      tl.to(".text", {
        y: -150,
      });

      tl.set(".text", {
        y: 0,
      });

      gsap.to(".text", {
        opacity: 0,
        pointerEvents: "none",
      });
    }
  };

  return (
    <>
      <Container className="main">
        <div
          css={css`
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 2fr;
            grid-gap: 1em 5vw;
            min-height: 100vh;
            font-size: 40px;
          `}
        >
          <div
            css={css`
              display: flex;
              flex-direction: column;
              text-align: right;
              grid-column: 1/2;
              grid-row: 1/2;
              align-self: end;
            `}
          >
            <div
              className="service serviceOne closed"
              css={css`
                cursor: pointer;

                p {
                  margin: 0;
                }
              `}
              dangerouslySetInnerHTML={{ __html: content.service_1 }}
              onClick={(event) => {
                invert(event);
              }}
            ></div>
          </div>
          <div
            css={css`
              grid-column: 2/3;
              grid-row: 2/3;
            `}
          >
            <div
              className="service serviceTwo closed"
              css={css`
                cursor: pointer;

                p {
                  margin: 0;
                }
              `}
              dangerouslySetInnerHTML={{ __html: content.service_2 }}
              onClick={(event) => {
                invert(event);
              }}
            ></div>
            <div
              className="text textTwo"
              css={css`
                font-size: 30px;
                opacity: 0;
                pointer-events: none;
              `}
              dangerouslySetInnerHTML={{ __html: content.section_2 }}
            ></div>
          </div>

          <div
            className="text textOne"
            css={css`
              grid-column: 1/2;
              grid-row: 2/3;
              opacity: 0;
              text-align: right;
              pointer-events: none;
            `}
          >
            <div
              css={css`
                p {
                  margin: 0;
                  font-size: 30px;
                }
              `}
              dangerouslySetInnerHTML={{ __html: content.section_1 }}
            ></div>
            <div dangerouslySetInnerHTML={{ __html: content.tools_1 }}></div>
            <div
              css={css`
                p {
                  margin: 0;
                  font-size: 30px;
                }
              `}
              dangerouslySetInnerHTML={{ __html: content.section_3 }}
            ></div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default connect(Services);

const Container = styled.main`
  background-color: #e7e9f2;
  display: flex;
  flex-direction: column;
`;
