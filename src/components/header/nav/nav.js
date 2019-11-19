import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';
import { baseColor, headFontStack } from '../../../constants/theme';
import PropTypes from 'prop-types';

const linkStyle = {
  color: baseColor,
  fontFamily: headFontStack,
};
const activeLinkStyle = {
  color: baseColor,
  fontFamily: headFontStack,
  fontWeight: '700',
}

const links = [
  {
    to: '/work',
    title: 'Work',
  },
  {
    to: '/blog',
    title: 'Blog',
  },
  {
    to: '/about',
    title: 'About',
  },
  {
    to: '/play',
    title: 'Play',
  },
];

const Nav = ({ active }) => (
  <Container>
    <ul>
      {links.map(link => (
        <li key={link.to}>
          <Link
            to={link.to}
            style={link.to == active ? activeLinkStyle : linkStyle}>
              {link.title}
          </Link>
        </li>
      ))}
    </ul>
  </Container>
);

Nav.propTypes = {
  active: PropTypes.string,
}

export default Nav;
