import styled from "styled-components";
import BackgroundTop from "../../assets/icons/background-top.svg";

export const HeaderContainer = styled.div`
  background: url(${BackgroundTop}) no-repeat;
  object-fit: fill;
  /* padding: 0 0 38rem 210rem; */
  width: 100%;
  background-size: cover;
  height: 100vh;
`;

export const HeaderGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 73rem;

  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  & > div:last-child {
    justify-self: end;
    margin: 0 auto;
  }
`;
export const HeadingText = styled.h1`
  font-family: "Roboto";
  font-weight: 700;
  font-size: 50rem;
  line-height: 60rem;
  color: #fff;
  margin: 0;

  @media screen and (max-width: 800px) {
    text-align: center;
  }
`;
export const HeaderLeftDiv = styled.div`
  margin-top: 79rem;
  max-width: 500rem;
  width: 100%;

  margin: 0 40rem 0 auto;
  @media screen and (max-width: 800px) {
    margin: 40rem auto 0;
    text-align: center;
  }
`;

export const HeaderRightDiv = styled.div`
  img {
    width: 100%;
  }
  @media screen and (max-width: 800px) {
    img {
      max-width: 580rem;
      width: 100%;
    }
    margin-right: auto;
    margin-left: 0;
  }
`;
export const HeaderText = styled.p`
  font-family: "Roboto";

  font-weight: 400;
  font-size: 18rem;
  line-height: 27rem;
  color: #8794ba;
  margin: 15rem 0 0;

  @media screen and (max-width: 800px) {
    text-align: center;
  }
`;

export const HeaderButton = styled.button`
  padding: 10rem 80rem;
  background: #ef2a82;
  border-radius: 68rem;
  outline: none;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16rem;
  line-height: 19rem;
  color: #ffffff;
  margin-top: 49rem;
  @media screen and (max-width: 1180px) {
    margin-bottom: 70rem;
  }
  @media screen and (max-width: 800px) {
    margin: 35rem auto;
  }
`;
