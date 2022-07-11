import styled from "styled-components";

interface PriceCardProps {
  bgColor: string;
}
export const PriceCardComponent = styled.div<PriceCardProps>`
  max-width: 340rem;
  width: 100%;
  background: ${(props) =>
    props.bgColor === "white" ? "white" : "rgba(15, 31, 75, 0.7)"};
  border-radius: 30rem;

  box-shadow: ${(props) =>
    props.bgColor === "white"
      ? " 0rem 18rem 50rem -15rem #060F28"
      : "0rem 18rem 50rem -15rem rgba(25, 42, 89, 0.2)"};
`;
export const PriceHeading = styled.h1<PriceCardProps>`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 30rem;
  margin: 50rem auto 10rem;
  line-height: 35rem;
  text-align: center;
  margin-bottom: 10rem;
  color: ${(props) => (props.bgColor === "white" ? "#172755" : "#fff")};
`;
export const PriceHeading2 = styled(PriceHeading)`
  margin-top: 0;
`;

export const PriceSubHeading = styled.h3`
  font-family: "Roboto";
  font-style: normal;
  margin: 0 auto 40rem;
  font-weight: 400;
  font-size: 18rem;
  line-height: 27rem;

  color: #8794ba;
`;

export const PriceHR = styled.hr<PriceCardProps>`
  border-bottom: 1rem solid
    ${(props) => (props.bgColor === "white" ? "#D3D9E9" : "#2A407C;")};
  width: 220rem;
  margin: 37rem auto 28rem;
  border-top: 0;
  border-left: 0;
  border-right: 0;
`;

export const PriceButton = styled.button<PriceCardProps>`
  background: ${(props) =>
    props.bgColor === "white" ? "#ef2a82" : "transparent"};
  border-radius: 68rem;
  color: white;
  padding: 10rem 83rem;
  outline: none;
  margin-bottom: 50rem;
  border: ${(props) =>
    props.bgColor === "white" ? "none" : "1rem solid #2A407C"};
`;
