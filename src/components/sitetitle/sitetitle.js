import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Text } from './sitetitle.css';
import { baseColor } from '../../constants/theme';

const linkStyleProps = {
  color: baseColor,
};

const SiteTitle = ({ to, children }) => {
  return (
    <Link to={to ? to : '/'} style={linkStyleProps}>
      <Text>{children}</Text>
    </Link>
  );
};

SiteTitle.propTypes = {
  to: PropTypes.string,
  children: PropTypes.string.isRequired,
};

export default SiteTitle;
