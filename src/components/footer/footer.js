import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './footer.css';
import SiteTitle from 'components/sitetitle';
import Nav from 'components/header/nav';
import Social from './social';

const Footer = () => (
  <Container>
    <p>&copy;2019 Sam Winslow</p>
    <Social />
  </Container>
);

export default Footer;
