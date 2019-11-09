import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './sitetitle.css';

const SiteTitle = ({ children }) => {
  return (
    <Text>
      {children}
    </Text>
  );
};

SiteTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SiteTitle;
