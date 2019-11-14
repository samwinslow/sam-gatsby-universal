import React from 'react';
import PropTypes from 'prop-types';
import posed from 'react-pose';
import { Container } from './header.css';
import SiteTitle from 'components/sitetitle';
import Nav from 'components/header/nav';

// Example of a component-specific page transition
const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: 'easeInOut',
    },
  },
});

const Header = ({ title, active }) => (
  <AnimatedContainer>
    <Container>
      <SiteTitle>{title}</SiteTitle>
      <Nav active={active} />
    </Container>
  </AnimatedContainer>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.string,
};

export default Header;
