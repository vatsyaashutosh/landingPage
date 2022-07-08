import {
  MainFeatureCardContainer,
  MainFeatureCardHeading,
  MainFeatureCardImage,
  MainFeatureCardParagraph,
  MainFeatureContainer,
  MainFeatureHeading,
  MainFeautreCard,
  MainFeautureText,
  MiddleCard,
  MiddleCardContainer,
  MiddleCardHeading,
  MiddleCardImage,
  MiddleCardParargraph,
} from "./style";
import Icon from "../../assets/icons/Icon.svg";
import Icon1 from "../../assets/icons/Icon1.svg";
import Icon2 from "../../assets/icons/Icon2.svg";
import Screen1 from "../../assets/icons/screen-01.svg";
import Screen2 from "../../assets/icons/screen-02.svg";
import Screen3 from "../../assets/icons/screen-03.svg";

const MainFeature = () => {
  return (
    <MainFeatureContainer>
      <MainFeatureHeading>Main Features</MainFeatureHeading>
      <MainFeautureText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi
        aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh
        nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus
        pulvinar sit amet. Id vel in nam malesuada.
      </MainFeautureText>
      <MainFeatureCardContainer>
        <MainFeautreCard>
          <MainFeatureCardImage src={Icon} />

          <MainFeatureCardHeading>Monitoring 24/7</MainFeatureCardHeading>
          <MainFeatureCardParagraph>
            Lorem ipsum dolor sit amet, consectetur adipis cing elit. Elementum
            nisi aliquet volutpat.
          </MainFeatureCardParagraph>
        </MainFeautreCard>
        <MainFeautreCard>
          <MainFeatureCardImage src={Icon1} />

          <MainFeatureCardHeading>Widget System</MainFeatureCardHeading>
          <MainFeatureCardParagraph>
            Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae
            et, tortor pulvinar risus pulvinar.
          </MainFeatureCardParagraph>
        </MainFeautreCard>
        <MainFeautreCard>
          <MainFeatureCardImage src={Icon2} />

          <MainFeatureCardHeading>Best Performance</MainFeatureCardHeading>
          <MainFeatureCardParagraph>
            Lorem ipsum dolor sit amet, consectetur adipis cing elit. Elementum
            nisi aliquet volutpat.
          </MainFeatureCardParagraph>
        </MainFeautreCard>
      </MainFeatureCardContainer>

      <MiddleCardContainer>
        <MiddleCard>
          <MiddleCardHeading>
            Automated Reports & Widget Alerts
          </MiddleCardHeading>
          <MiddleCardParargraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam
            vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor
            pulvinar risus pulvinar sit amet.
          </MiddleCardParargraph>
        </MiddleCard>
        <MiddleCardImage src={Screen1} />
        <MiddleCardImage src={Screen2} />

        <MiddleCard>
          <MiddleCardHeading>
            Fully customizable to address your needs
          </MiddleCardHeading>
          <MiddleCardParargraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam
            vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor
            pulvinar risus pulvinar sit amet.
          </MiddleCardParargraph>
        </MiddleCard>

        <MiddleCard>
          <MiddleCardHeading>Pre-built Dashboard Templates</MiddleCardHeading>
          <MiddleCardParargraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam
            vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor
            pulvinar risus pulvinar sit amet.
          </MiddleCardParargraph>
        </MiddleCard>
        <MiddleCardImage src={Screen3} />
      </MiddleCardContainer>
    </MainFeatureContainer>
  );
};

export default MainFeature;
