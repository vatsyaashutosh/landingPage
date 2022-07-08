import {
  PriceButton,
  PriceCardComponent,
  PriceHeading,
  PriceHeading2,
  PriceHR,
  PriceSubHeading,
} from "./style";

interface PriceCardProps {
  title: string;
  description: string;
  price: string;
  bgColor: string;
}
const PriceCard = ({ title, description, price, bgColor }: PriceCardProps) => {
  return (
    <PriceCardComponent bgColor={bgColor}>
      <PriceHeading bgColor={bgColor}>{title}</PriceHeading>
      <PriceSubHeading>{description}</PriceSubHeading>
      <PriceHR bgColor={bgColor} />
      <PriceHeading2 bgColor={bgColor}>${price}</PriceHeading2>
      <PriceSubHeading>per month</PriceSubHeading>
      <PriceButton bgColor={bgColor}>Order</PriceButton>
    </PriceCardComponent>
  );
};

export default PriceCard;
