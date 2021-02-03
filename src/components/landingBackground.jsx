import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import Section from "../styles/Section";
import mixins from "../styles/mixins";
import bg from "../images/landing9.jfif";

const StyledBackgroundImage = styled.img`
// position: absolute;
background-image: url(${bg});
background-size: cover;
width: 100%;
height: 500px;
// border: 2px solid;
// color: pink;
z-index: -1;
filter: blur(1px);
`;

const LandingBackground = () => {
  return (
      <StyledBackgroundImage></StyledBackgroundImage>
  );
};

export default LandingBackground;
