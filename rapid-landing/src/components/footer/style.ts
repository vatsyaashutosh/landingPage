import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  margin: auto;
  max-width: 1180rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 103rem;
  @media screen and (max-width: 500px) {
    display: grid;
    grid-template-columns: 0.6fr 1.4fr;

    margin-bottom: 100rem;
  }
`;
export const FooterSubContainer1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const FooterSubContainer2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 500px) {
    grid-column: 2/3;
  }
`;
export const FacebookIcon = styled.img`
  padding-right: 40rem;
  width: 10rem;
  height: 20rem;
`;
export const TwitterIcon = styled.img`
  padding-right: 40rem;
  width: 25rem;
  height: 20rem;
`;
export const InstaIcon = styled.img`
  width: 20rem;
  height: 20rem;
`;
export const LogoIcon = styled.img`
  width: 138rem;
  height: 30rem;
`;
export const FooterElements = styled.p`
  padding-right: 36rem;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 14rem;
  line-height: 16rem;

  color: #8794ba;
`;
