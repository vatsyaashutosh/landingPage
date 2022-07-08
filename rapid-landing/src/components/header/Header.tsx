import Navbar from "../navbar"
import { HeaderButton, HeaderContainer, HeaderGrid, HeaderLeftDiv, HeaderRightDiv, HeaderText, HeadingText } from "./style"
import MainScreen from '../../assets/icons/main-screen.svg'

const Header = () => {
  return (
    <HeaderContainer>
        <Navbar/>
        <HeaderGrid>

        <HeaderLeftDiv>
            <HeadingText>
                Monitor your business on real-time dashboard
            </HeadingText>
            <HeaderText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. 
            </HeaderText>

            <HeaderButton>
                Try for free
            </HeaderButton>

        </HeaderLeftDiv>
        <HeaderRightDiv>
            <img src={MainScreen} alt="mainScreen" />
        </HeaderRightDiv>
        </HeaderGrid>
    </HeaderContainer>
  )
}

export default Header