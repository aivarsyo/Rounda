import React, { useEffect } from "react";
import { connect, styled } from "frontity";

const Works = ({ state, actions }) => {
  console.log(state);
  const data = state.source.get(state.router.link);
  console.log(data);

  const page = state.source[data.type][data.id];
  console.log(page);
  const content = page.acf;
  //console.log(content);

  return (
    <>
      <Container className="main">
        <p>{content.title_1}</p>

        <div>
          <img src={content.image_1} />
          <p>{content.paragraph_1}</p>
        </div>
      </Container>
    </>
  );
};

export default connect(Works);

const Container = styled.main`
  background-color: #e7e9f2;
  display: flex;
  flex-direction: column;
  padding-top: 15vh;

  p:nth-of-type(1) {
    font-size: 30px;
    width: 30%;
    align-self: flex-end;
    margin-right: 10vw;
  }

  div:nth-of-type(1) {
    margin-left: 10vw;
    margin-top: 5vw;

    p {
      font-size: inherit;
    }
  }
`;
