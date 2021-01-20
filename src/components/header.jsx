import React from "react"
import styled from "styled-components"
import theme from "../styles/theme"
import { navLinks } from "../config"
import mixins from "../styles/mixins"
const { colors, fonts, fontSizes } = theme

const StyledContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  // align-items: center;
  height: 0px;
  @media (max-width: 63em) {
    padding: 0 40px;
  }
  @media (max-width: 48em) {
    padding: 0 25px;
  }
`
const NavList = styled.ol`
  // color: ${colors.white};
  ${mixins.flexBetween};
  list-style-type: none;
  margin-top: 25px;
  margin-right: 80px;
`
const NavListItem = styled.li`
  margin: 35px 0px 35px 55px;
  position: relative;
`
const MenuLink = styled.a`
  font-family: ${fonts.Calibre};
  font-size: ${fontSizes.lg};
  font-weight: 650;
`

const Header = () => {
    return (
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
    )
  }
  
  export default Header