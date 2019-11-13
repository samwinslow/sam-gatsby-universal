import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './title.css';

const Title = ({ children, as = 'h1', leader = false }) => {
  return (
    <Text as={as} leader={leader}>
      {children}
    </Text>
  );
};

Title.propTypes = {
  children: PropTypes.string.isRequired,
  leader: PropTypes.bool,
};

export default Title;
