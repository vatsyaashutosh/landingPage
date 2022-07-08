import styled from "styled-components";
import BottomBackground from "../../assets/icons/background-bottom.svg";
export const PricingContainerMain = styled.div`
  background: url(${BottomBackground}) no-repeat;
  object-fit: contain;
  max-width: 1600px;
  width: 100%;
`;

export const PricingContainer = styled.div`
  margin: auto;
  text-align: center;
  border: 1px solid transparent;
  max-width: 1180px;
  width: 100%;
`;
export const PricingHeading = styled.h1`
  font-family: "Roboto";
  font-weight: 700;
  font-size: 40px;
  margin-top: 272px;
  line-height: 47px;
  color: #fff;
`;
export const PricingParagraph = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #8794ba;
`;
export const PriceGrid = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 80px;
`;

export const FooterHr = styled.hr`
  border-bottom: 1px solid #2a407c;
  width: 100%;
  margin: 100px auto 69px;
  border-top: 0;
  border-left: 0;
  border-right: 0;
`;
