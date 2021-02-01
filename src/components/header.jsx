import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import { navLinks } from "../config";
import mixins from "../styles/mixins";
import { Link } from "react-scroll";
const { colors, fonts, fontSizes } = theme;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  // align-items: center;
  height: 0px;
  @media (max-width: 63em) {
    padding: 0 40px;
  }
  @media (max-width: 48em) {
    padding: 0 25px;
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
  font-size: ${fontSizes.lg};
  font-weight: 500;
`;

const Header = () => {
  return (
    <StyledContainer>
      <NavList>
        <NavListItem>
          <MenuLink>
            <Link>Sign up</Link>
          </MenuLink>
        </NavListItem>
        <NavListItem>
          <MenuLink>
            <Link>Login</Link>
          </MenuLink>
        </NavListItem>
      </NavList>
      a
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
