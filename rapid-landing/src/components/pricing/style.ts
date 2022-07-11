import styled from "styled-components";
import BottomBackground from "../../assets/icons/background-bottom.svg";
export const PricingContainerMain = styled.div`
  background: url(${BottomBackground}) no-repeat;
  object-fit: contain;
  max-width: 1600rem;
  width: 100%;
  background-size: cover;
`;

export const PricingContainer = styled.div`
  margin: auto;
  text-align: center;
  border: 1rem solid transparent;
  max-width: 1180rem;
  width: 100%;
`;
export const PricingHeading = styled.h1`
  font-family: "Roboto";
  font-weight: 700;
  font-size: 40rem;
  margin-top: 272rem;
  line-height: 47rem;
  color: #fff;
  @media screen and (max-width: 600px) {
    margin-top: 400rem;
  }
`;
export const PricingParagraph = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18rem;
  line-height: 27rem;
  color: #8794ba;
`;
export const PriceGrid = styled.div`
  margin-top: 80rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 70rem;
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    justify-items: center;
    row-gap: 50rem;
  }
`;

export const FooterHr = styled.hr`
  border-bottom: 1rem solid #2a407c;
  width: 100%;
  margin: 100rem auto 69rem;
  border-top: 0;
  border-left: 0;
  border-right: 0;
`;
