import { LogoContainer, NavbarContainer, NavLastDiv, NavMidDiv, NavText, SignUpButton } from "./style"
import Logo from '../../assets/icons/logo.svg'

const Navbar = () => {
  return (
    <NavbarContainer>
        <LogoContainer src={Logo} alt="logo" />
        <NavMidDiv>
            <NavText>Products</NavText>
            <NavText>Pricing</NavText>
            <NavText>FAQ</NavText>
            <NavText>Blog</NavText>
            <NavText>Blog</NavText>
        </NavMidDiv>
        <NavLastDiv>
            <NavText>
                    Sign In
                </NavText>
            <SignUpButton>
                <NavText>
                    Sign Up
                </NavText>
            </SignUpButton>
        </NavLastDiv>
    </NavbarContainer> 
  )
}

export default Navbar