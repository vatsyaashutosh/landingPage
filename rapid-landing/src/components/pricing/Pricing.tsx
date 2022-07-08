import Footer from "../footer";
import PriceCard from "../priceCard";
import {
  FooterHr,
  PriceGrid,
  PricingContainer,
  PricingContainerMain,
  PricingHeading,
  PricingParagraph,
} from "./style";

const Pricing = () => {
  return (
    <PricingContainerMain>
      <PricingContainer>
        <PricingHeading>Pricing Plans</PricingHeading>
        <PricingParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
          nisi aliquet volutpat pellentesque volutpat est.
        </PricingParagraph>
        <PriceGrid>
          <PriceCard
            bgColor="blue"
            price="29"
            description="up to 3 users"
            title="Starter"
          />
          <PriceCard
            bgColor="white"
            price="29"
            description="up to 20 users"
            title="Standard"
          />
          <PriceCard
            bgColor="blue"
            price="29"
            description="up to 200 users"
            title="Premium"
          />
        </PriceGrid>
        <FooterHr />
        <Footer />
      </PricingContainer>
    </PricingContainerMain>
  );
};

export default Pricing;
