import {
  FacebookIcon,
  FooterContainer,
  FooterElements,
  FooterSubContainer1,
  FooterSubContainer2,
  InstaIcon,
  LogoIcon,
  TwitterIcon,
} from "./style";
import Twitter from "../../assets/icons/Twitter.svg";
import Facebook from "../../assets/icons/Facebook.svg";
import Instagram from "../../assets/icons/Instagram.svg";
import Logo from "../../assets/icons/logo-footer.svg";
const Footer = () => {
  return (
    <FooterContainer>
      <LogoIcon src={Logo}></LogoIcon>
      <FooterSubContainer1>
        <FooterElements>Product</FooterElements>
        <FooterElements>Pricing Plans</FooterElements>
        <FooterElements>FAQ</FooterElements>
        <FooterElements>Blog</FooterElements>
      </FooterSubContainer1>
      <FooterSubContainer2>
        <FacebookIcon src={Facebook} />
        <TwitterIcon src={Twitter} />
        <InstaIcon src={Instagram} />
      </FooterSubContainer2>
    </FooterContainer>
  );
};

export default Footer;
