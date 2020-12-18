import React, { useEffect } from "react";
import { connect, styled, css } from "frontity";
import Footer from "./footer";
import Link from "./link";

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
            font-size: 50px;
            width: 40%;
            align-self: flex-end;
            margin-right: 10vw;
            margin-top: 0;

            @media only screen and (max-width: 768px) {
              align-self: center;
              width: 80%;
              margin-right: 10vw;
              margin-left: 10vw;
              font-size: 70px;
            }

            @media only screen and (max-width: 425px) {
              margin-top: 0;
              font-size: 17vw;
            }
          `}
        >
          {content.title_1}
        </p>

        <DivOne>
          <Link href="/faccia-a-faccia">
            <img src={content.image_1} />
          </Link>
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

  a {
    position: static;
    mix-blend-mode: normal;
    z-index: initial;
  }

  div {
    img {
      width: 100%;
    }
  }
`;

const DivOne = styled.div`
  margin-left: 10vw;
  margin-top: 10vw;
  width: 45vw;
  max-width: 450px;

  @media only screen and (max-width: 768px) {
    margin-left: 0;
    width: 55vw;
  }

  @media only screen and (max-width: 425px) {
    width: 70vw;
  }
`;

const DivTwo = styled.div`
  align-self: flex-end;
  margin-right: 5vw;
  margin-top: 5vw;
  width: 60vw;
  max-width: 650px;

  @media only screen and (max-width: 768px) {
    width: 65vw;
  }

  @media only screen and (max-width: 425px) {
    width: 100vw;
    margin-right: 0;
    margin-top: 10vh;
  }
`;

const DivThree = styled.div`
  align-self: center;
  margin-top: 10vw;
  display: flex;
  flex-direction: column;
  width: 60vw;
  max-width: 650px;

  p {
    width: 70%;
  }

  @media only screen and (max-width: 768px) {
    width: 65vw;
  }

  @media only screen and (max-width: 425px) {
    margin-top: 10vh;
    width: 100vw;
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
  width: 45vw;
  max-width: 450px;

  @media only screen and (max-width: 768px) {
    width: 55vw;
  }

  @media only screen and (max-width: 425px) {
    width: 70vw;
  }
`;

const SubDivThree = styled.div`
  align-self: flex-start;
  margin-top: 10vw;
  width: 45vw;
  max-width: 450px;

  @media only screen and (max-width: 768px) {
    width: 55vw;
  }

  @media only screen and (max-width: 425px) {
    width: 70vw;
  }
`;
