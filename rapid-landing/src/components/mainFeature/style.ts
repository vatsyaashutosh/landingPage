import styled from "styled-components";

export const MainFeatureContainer = styled.div`
  max-width: 1180px;
  width: 100%;
  margin: auto;
`;

export const MainFeatureHeading = styled.h1`
  font-family: "Roboto";
  font-weight: 700;
  font-size: 40px;
  line-height: 47px;
  text-align: center;
  color: #172755;
  margin-top: 300px;
  @media screen and (min-width: 1180px) {
    margin-top: 0;
  }
`;
export const MainFeautureText = styled.p`
  padding: 0;
  margin: 0;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #8794ba;
`;

export const MainFeatureCardContainer = styled.div`
  margin-bottom: 130px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  margin-top: 82px;
`;

export const MainFeautreCard = styled.div`
  text-align: center;
`;

export const MainFeatureCardHeading = styled.h6`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: center;
`;

export const MainFeatureCardParagraph = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;
`;

export const MainFeatureCardImage = styled.img`
  margin: 0 auto;
  width: 60px;
  height: 60px;
`;

export const MiddleCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  & > div:nth-child(4) {
    grid-row: 3/4;
  }
  column-gap: 100px;
  @media screen and (min-width: 1180px) {
    grid-template-columns: repeat(2, 1fr);
  }
  row-gap: 120px;
`;
export const MiddleCard = styled.div`
  /* @media screen and (max-width: 1180px) {
    grid-row: 4/5;
  } */
`;

export const MiddleCardHeading = styled.h1`
  font-family: "Roboto";
  font-weight: 700;
  max-width: 480px;
  width: 74%;
  font-size: 40px;
  line-height: 47px;
  color: #172755;
`;
export const MiddleCardParargraph = styled.p`
  font-family: "Roboto";
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  max-width: 480px;
  color: #8794ba;
`;

export const MiddleCardImage = styled.img`
  width: 600px;
  height: 410px;

  @media screen and (min-width: 1180px) {
  }
`;
