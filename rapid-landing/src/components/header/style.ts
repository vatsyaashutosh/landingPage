import styled from "styled-components";
import BackgroundTop from '../../assets/icons/background-top.svg'

export const HeaderContainer = styled.div`
background:url(${BackgroundTop}) no-repeat ;
object-fit:fill;
/* padding:0 0 38px 210px ; */
width:100%;
height:100vh;

`

export const HeaderGrid = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;
margin-top:73px;


&>div:last-child{
    justify-self: end;
}

`
export const HeadingText = styled.h1`
font-family: 'Roboto';
font-weight: 700;
font-size: 50px;
line-height: 60px;
color: #FFF;
margin:0;
padding:0;
`
export const HeaderLeftDiv = styled.div`
margin-top:79px;

padding: 0 40px 0 210px


`

export const HeaderRightDiv = styled.div`
img{
    width: 100%
}

`
export const HeaderText = styled.p`
font-family: 'Roboto';
font-weight: 400;
font-size: 18px;
line-height: 27px;
color: #8794BA;
margin:15px 0 0;
padding:0;

`

export const HeaderButton = styled.button`
padding: 10px 80px;
background: #EF2A82;
border-radius: 68px;
outline:none;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #FFFFFF;
margin-top:49px
`
