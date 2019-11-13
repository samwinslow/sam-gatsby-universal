import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';
import { baseColor, headFontStack } from '../../../constants/theme';

const linkStyle = {
  color: baseColor,
  fontFamily: headFontStack,
};

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/work" style={linkStyle}>
          Work
        </Link>
      </li>
      <li>
        <Link to="/blog" style={linkStyle}>
          Blog
        </Link>
      </li>
      <li>
        <Link to="/about" style={linkStyle}>
          About
        </Link>
      </li>
      <li>
        <Link to="/play" style={linkStyle}>
          Play
        </Link>
      </li>
    </ul>
  </Container>
);

export default Nav;
