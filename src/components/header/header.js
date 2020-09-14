import React from 'react';
import PropTypes from 'prop-types';
import posed from 'react-pose';
import SiteTitle from 'components/sitetitle';
import Nav from 'components/header/nav';
import styled from 'styled-components';
import MEDIA from '../../helpers/mediaTemplates';

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

const Container = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  position: fixed;
  top: 0;
  width: 100vw;
  box-sizing: border-box;
  background-color: rgba(255,255,255,0.75);
  backdrop-filter: blur(16px) brightness(150%) saturate(150%);
  -webkit-backdrop-filter: blur(16px) brightness(150%) saturate(150%);

  z-index: 999;

  a {
    text-decoration: none;
  }
  ${MEDIA.TABLET`
    justify-content: center;
  `};
`;

Header.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.string,
};

export default Header;
