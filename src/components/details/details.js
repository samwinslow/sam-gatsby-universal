import React from 'react';
import PropTypes from 'prop-types';
import { DetailsWrapper } from './details.css';

const Details = ({ children }) => {
  return (
    <DetailsWrapper>
      {children}
    </DetailsWrapper>
  );
};

Details.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Details;
