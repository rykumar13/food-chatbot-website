import React from "react"
import Headroom from "react-headroom"
import styled from "styled-components"
import theme from "../styles/theme"
import { navLinks } from "../config"
import mixins from "../styles/mixins"
const { colors, fonts, fontSizes } = theme

const StyledContainer = styled.div`
box-shadow: -10px 0px 30px -15px ${colors.navy_text};
//background-color: ${colors.bg_greyGreen};
  display: flex;
  justify-content: space-around;
  align-items: center;
  top: 0;
  height: 80px;
  @media (max-width: 63em) {
    padding: 0 40px;
  }
  @media (max-width: 48em) {
    padding: 0 25px;
  }
`
const NavList = styled.ol`
  color: ${colors.cream_text};
  ${mixins.flexBetween};
  list-style-type: none;
  margin-top: 15px;
`
const NavListItem = styled.li`
  margin: 35px 0px 35px 55px;
  position: relative;
  font-size: ${fontSizes.smish};
`
const MenuLink = styled.a`
  font-family: ${fonts.Calibre};
  font-size: ${fontSizes.lg};
  font-weight: 650;
`

const Header = () => {
    return (
        <Headroom>
            <StyledContainer>
            <NavList>
            {navLinks.map(({ url, name }) => (
              <NavListItem>
                <MenuLink>
                    {name}
                </MenuLink>
              </NavListItem>
            ))}
          </NavList>
            </StyledContainer>
        </Headroom>
    )
  }
  
  export default Header