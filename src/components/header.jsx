import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import { navLinks } from "../config";
import mixins from "../styles/mixins";
import { Link } from "react-scroll";
const { colors, fonts, fontSizes } = theme;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0px;
  @media (max-width: 63em) {
    padding: 0 40px;
  }
  @media (max-width: 48em) {
    padding: 0 25px;
  }
  @media (max-width: 400px) {
    display: none;
  }
`;
const NavList = styled.ol`
  color: ${colors.white};
  ${mixins.flexBetween};
  list-style-type: none;
  margin-top: 25px;
  margin-right: 80px;
`;
const NavListItem = styled.li`
  margin: 35px 0px 35px 55px;
  position: relative;
`;
const MenuLink = styled.a`
  font-family: 'Titillium Web', sans-serif
  font-size: ${fontSizes.xl};
  font-weight: 600;
`;

const SignUp = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const Header = () => {
  return (
    <StyledContainer>
      <NavList>
        {navLinks.map(({ url, name }) => (
          <NavListItem>
            <MenuLink>
              <Link
                activeClass="active"
                to={url}
                spy={true}
                smooth={true}
                duration={700}
              >
                {name}
              </Link>
            </MenuLink>
          </NavListItem>
        ))}
      </NavList>
    </StyledContainer>
  );
};

export default Header;
