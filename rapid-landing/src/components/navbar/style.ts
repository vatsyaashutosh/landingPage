import styled from "styled-components";
//Texts

export const NavText = styled.p`
  font-family: "Roboto";
  font-weight: 400;
  font-size: 16rem;
  line-height: 19rem;
  color: #8794ba;
  margin: 0;
  padding: 0;
`;
//Components

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50rem 0 0 0;
  max-width: 1180rem;
  width: 100%;
  margin: auto;
  @media screen and (max-width: 500px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const LogoContainer = styled.img`
  width: 184.02rem;
  height: 40rem;
`;

export const NavMidDiv = styled(NavbarContainer)`
  width: 100%;
  border: none;
  max-width: 352rem;
  margin-left: 0;
  /* margin-right: 314rem; */
  padding: 0;
`;

export const NavLastDiv = styled(NavbarContainer)`
  width: 100%;
  max-width: 250rem;
  padding: 0;
  /* padding-right: 200rem; */
  margin-left: 0;
  margin-right: 0;
  border: none;
  @media screen and (max-width: 500px) {
    grid-column: 2/3;
  }
`;
export const SignUpButton = styled.button`
  padding: 11rem 53rem;
  border: 1rem solid #eeeef7;
  outline: none;
  border-radius: 50rem;
  background: transparent;
  @media screen and (max-width: 500px) {
    padding: 5rem 0;
  }
`;
