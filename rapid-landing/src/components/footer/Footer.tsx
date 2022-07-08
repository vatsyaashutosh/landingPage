import {
  FacebookIcon,
  FooterContainer,
  FooterElements,
  FooterSubContainer,
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
      <FooterSubContainer>
        <FooterElements>Product</FooterElements>
        <FooterElements>Pricing Plans</FooterElements>
        <FooterElements>FAQ</FooterElements>
        <FooterElements>Blog</FooterElements>
      </FooterSubContainer>
      <FooterSubContainer>
        <FacebookIcon src={Facebook} />
        <TwitterIcon src={Twitter} />
        <InstaIcon src={Instagram} />
      </FooterSubContainer>
    </FooterContainer>
  );
};

export default Footer;
