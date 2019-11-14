import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './title.css';

const Title = ({ children, as = 'h1', leader = false, style }) => {
  return (
    <Text as={as} leader={leader} style={style}>
      {children}
    </Text>
  );
};

Title.propTypes = {
  children: PropTypes.string.isRequired,
  leader: PropTypes.bool,
  style: PropTypes.object
};

export default Title;
