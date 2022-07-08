import styled from "styled-components";
//Texts

export const NavText = styled.p`
  font-family: "Roboto";
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #8794ba;
  margin: 0;
  padding: 0;
`;
//Components

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0 0 0;
  max-width: 1180px;
  width: 100%;
  margin: auto;
`;

export const LogoContainer = styled.img`
  width: 184.02px;
  height: 40px;
`;

export const NavMidDiv = styled(NavbarContainer)`
  width: 100%;
  border: none;
  max-width: 352px;
  margin-left: 0;
  /* margin-right: 314px; */
  padding: 0;
`;

export const NavLastDiv = styled(NavbarContainer)`
  width: 100%;
  max-width: 250px;
  padding: 0;
  /* padding-right: 200px; */
  margin-left: 0;
  margin-right: 0;

  border: none;
`;
export const SignUpButton = styled.button`
  padding: 11px 53px;
  border: 1px solid #eeeef7;
  outline: none;
  border-radius: 50px;
  background: transparent;
`;
