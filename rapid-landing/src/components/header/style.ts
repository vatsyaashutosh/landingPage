import styled from "styled-components";
import BackgroundTop from "../../assets/icons/background-top.svg";

export const HeaderContainer = styled.div`
  background: url(${BackgroundTop}) no-repeat;
  object-fit: fill;
  /* padding:0 0 38px 210px ; */
  width: 100%;
  height: 100vh;
`;

export const HeaderGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 73px;

  @media screen and (min-width: 1180px) {
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
  font-size: 50px;
  line-height: 60px;
  color: #fff;
  margin: 0;
  padding: 0;
`;
export const HeaderLeftDiv = styled.div`
  margin-top: 79px;

  padding: 0 40px 0 210px;
`;

export const HeaderRightDiv = styled.div`
  img {
    width: 100%;
  }
`;
export const HeaderText = styled.p`
  font-family: "Roboto";
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #8794ba;
  margin: 15px 0 0;
  padding: 0;
`;

export const HeaderButton = styled.button`
  padding: 10px 80px;
  background: #ef2a82;
  border-radius: 68px;
  outline: none;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  margin-top: 49px;
  @media screen and (max-width: 1180px) {
    margin-bottom: 70px;
  }
`;
