import React, { useRef, useEffect } from "react";
import { connect, css, styled } from "frontity";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import AboutTop from "./AboutTop";
import AboutBlack from "./AboutBlack";
import AboutPeople from "./AboutPeople";
import Footer from "./footer";

const About = ({ state }) => {
  //console.log(state);
  const data = state.source.get(state.router.link);
  //console.log(data);
  const page = state.source[data.type][data.id];
  //console.log(page);
  const content = page.acf;
  //console.log(content);

  return (
    <>
      <Container className="main">
        <AboutTop />
        <AboutBlack />
        <AboutPeople />
      </Container>
      <Footer />
    </>
  );
};

export default connect(About);

const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding-top: 15vh;
  background-color: #e7e9f2;
  font-size: 20px;
`;
