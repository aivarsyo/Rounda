import React from "react";
import { connect, styled } from "frontity";

const FirstLayer = ({ state }) => {
  return (
    <>
      <Container></Container>
    </>
  );
};

export default connect(FirstLayer);

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("https://dummyimage.com/1000x800/FFC0CB/fff");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
