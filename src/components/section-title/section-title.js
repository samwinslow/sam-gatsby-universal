import React from 'react';
import PropTypes from 'prop-types';
import Title from 'components/title';
import {baseColor} from 'constants/theme';
import { Link } from 'gatsby';

const SectionTitle = ({ children, as = 'h1', to = '/' }) => (
  <Title as={as} style={{
      marginTop: '4rem',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'flex-end'
    }}>
    <Link to={to} style={{
      color: baseColor,
      fontWeight: '700',
      textDecoration: 'none',
      display: 'block',
    }}>
      {children}
    </Link>
    <Link to={to} style={{
      color: baseColor,
      fontWeight: '400',
      fontSize: '1rem',
      lineHeight: '1',
      paddingTop: '1rem',
      textDecoration: 'none',
      display: 'block'
    }}>
      See all &rarr;
    </Link>
  </Title>
);

SectionTitle.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string,
  leader: PropTypes.bool,
};

export default SectionTitle;