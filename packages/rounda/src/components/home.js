import React from "react";
import { connect, styled } from "frontity";
import Black from "./black";
import FirstLayer from "./FirstLayer";
import Blue from "./blue";
import Footer from "./footer";

const Home = ({ state }) => {
  return (
    <>
      <Container className="main">
        <FirstLayer />
        <Black />
        <Blue />
      </Container>
      <Footer />
    </>
  );
};

export default connect(Home);

const Container = styled.main`
  display: flex;
  flex-direction: column;
`;
