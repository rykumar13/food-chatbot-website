import styled from "styled-components"
import theme from "./theme"

const { colors, fontSizes } = theme

const Button = styled.button`
  background-color: transparent;
  color: ${colors.cream_text};
  border-radius: ${theme.borderRadius};
  font-size: ${fontSizes.smish};
  font-family: 'Titillium Web', sans-serif
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: ${theme.transition};
  padding: 1.25rem 1.75rem;

  &:hover,
  &:focus,
  &:active {
    background-color: ${colors.navy};
    outline: none;
  }
  &:after {
    display: none !important;
  }
`

export default Button
