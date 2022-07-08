import styled from "styled-components";

interface PriceCardProps {
  bgColor: string;
}
export const PriceCardComponent = styled.div<PriceCardProps>`
  background: ${(props) =>
    props.bgColor === "white" ? "white" : "rgba(15, 31, 75, 0.7)"};
  border-radius: 30px;

  box-shadow: ${(props) =>
    props.bgColor === "white"
      ? " 0px 18px 50px -15px #060F28"
      : "0px 18px 50px -15px rgba(25, 42, 89, 0.2)"};
`;
export const PriceHeading = styled.h1<PriceCardProps>`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  margin: 50px auto 10px;
  line-height: 35px;
  text-align: center;
  margin-bottom: 10px;
  color: ${(props) => (props.bgColor === "white" ? "#172755" : "#fff")};
`;
export const PriceHeading2 = styled(PriceHeading)`
  margin-top: 0;
`;

export const PriceSubHeading = styled.h3`
  font-family: "Roboto";
  font-style: normal;
  margin: 0 auto 40px;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;

  color: #8794ba;
`;

export const PriceHR = styled.hr<PriceCardProps>`
  border-bottom: 1px solid
    ${(props) => (props.bgColor === "white" ? "#D3D9E9" : "#2A407C;")};
  width: 220px;
  margin: 37px auto 28px;
  border-top: 0;
  border-left: 0;
  border-right: 0;
`;

export const PriceButton = styled.button<PriceCardProps>`
  background: ${(props) =>
    props.bgColor === "white" ? "#ef2a82" : "transparent"};
  border-radius: 68px;
  color: white;
  padding: 10px 83px;
  outline: none;
  margin-bottom: 50px;
  border: ${(props) =>
    props.bgColor === "white" ? "none" : "1px solid #2A407C"};
`;
