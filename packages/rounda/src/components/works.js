import React, { useEffect } from "react";
import { connect, styled, css } from "frontity";
import Footer from "./footer";

const Works = ({ state, actions }) => {
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
        <p
          css={css`
            font-size: 30px;
            width: 30%;
            align-self: flex-end;
            margin-right: 10vw;
          `}
        >
          {content.title_1}
        </p>

        <DivOne>
          <img src={content.image_1} />
          <p>{content.paragraph_1}</p>
        </DivOne>

        <DivTwo>
          <img src={content.image_2} />
          <p>{content.paragraph_2}</p>
        </DivTwo>

        <DivThree>
          <SubDivOne>
            <img src={content.image_3} />
            <p>{content.paragraph_3}</p>
          </SubDivOne>

          <SubDivTwo>
            <img src={content.image_4} />
            <p>{content.paragraph_4}</p>
          </SubDivTwo>

          <SubDivThree>
            <img src={content.image_5} />
            <p>{content.paragraph_5}</p>
          </SubDivThree>
        </DivThree>
      </Container>
      <Footer />
    </>
  );
};

export default connect(Works);

const Container = styled.main`
  background-color: #e7e9f2;
  display: flex;
  flex-direction: column;
  padding-top: 15vh;
  padding-bottom: 15vh;
`;

const DivOne = styled.div`
  margin-left: 10vw;
  margin-top: 10vw;
`;

const DivTwo = styled.div`
  align-self: flex-end;
  margin-right: 5vw;
  margin-top: 5vw;
`;

const DivThree = styled.div`
  align-self: center;
  margin-top: 10vw;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
  }

  p {
    width: 70%;
  }
`;

const SubDivOne = styled.div`
  margin: 0;
  align-self: center;
`;

const SubDivTwo = styled.div`
  align-self: flex-end;
  margin: 0;
  margin-top: 10vw;
`;

const SubDivThree = styled.div`
  align-self: flex-start;
  margin-top: 10vw;
`;
