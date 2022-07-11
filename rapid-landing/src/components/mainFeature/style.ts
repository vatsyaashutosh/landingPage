import styled from "styled-components";

export const MainFeatureContainer = styled.div`
  max-width: 1180rem;
  width: 100%;
  margin: auto;
`;

export const MainFeatureHeading = styled.h1`
  font-family: "Roboto";
  font-weight: 700;
  font-size: 40rem;
  line-height: 47rem;
  text-align: center;
  color: #172755;
  margin-top: 135rem;
  @media screen and (min-width: 1180px) {
    margin-top: 0;
  }
  @media screen and (max-width: 800px) {
    margin-top: 60rem;
  }
`;
export const MainFeautureText = styled.p`
  padding: 0;

  margin: 0;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 18rem;
  line-height: 27rem;
  text-align: center;
  color: #8794ba;
`;

export const MainFeatureCardContainer = styled.div`
  margin-bottom: 130rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20rem;
  margin-top: 82rem;
  @media screen and (max-width: 800px) {
    text-align: center;
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    align-items: center;
  }
`;

export const MainFeautreCard = styled.div`
  text-align: center;
`;

export const MainFeatureCardHeading = styled.h6`
  font-family: Roboto;
  font-size: 16rem;
  font-weight: 700;
  line-height: 19rem;
  letter-spacing: 0em;
  text-align: center;
`;

export const MainFeatureCardParagraph = styled.p`
  font-family: Roboto;
  font-size: 16rem;
  font-weight: 400;
  line-height: 22rem;
  letter-spacing: 0em;
  text-align: center;
`;

export const MainFeatureCardImage = styled.img`
  margin: 0 auto;
  width: 60rem;
  height: 60rem;
`;

export const MiddleCardContainer = styled.div`
  display: grid;
  max-width: 1180px;
  width: 100%;
  grid-template-columns: 1fr;
  justify-items: center;
  & > div:nth-child(4) {
    grid-row: 3/4;
  }
  @media screen and (min-width: 1180px) {
    grid-template-columns: repeat(2, 1fr);
  }
  column-gap: 100rem;
  row-gap: 120rem;
`;
export const MiddleCard = styled.div`
  /* @media screen and (max-width: 1180rem) {
    grid-row: 4/5;
  } */
  max-width: 600rem;
  width: 100%;
  @media screen and (max-width: 800px) {
    text-align: center;
    p {
      margin: auto;
    }
  }
`;

export const MiddleCardHeading = styled.h1`
  font-family: "Roboto";
  font-weight: 700;

  font-size: 40rem;
  line-height: 47rem;
  color: #172755;
`;
export const MiddleCardParargraph = styled.p`
  font-family: "Roboto";
  font-weight: 400;
  font-size: 18rem;
  line-height: 27rem;
  max-width: 480rem;
  color: #8794ba;
`;
export const MiddleCardImage = styled.img`
  width: 100%;
`;
