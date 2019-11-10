import React from 'react';
import PropTypes from 'prop-types';
import { Container, ContainerFluid } from './box.css';

const Box = ({ fluid, children }) => {
  if (fluid) {
    return(<ContainerFluid>{children}</ContainerFluid>)
  } else {
    return(<Container>{children}</Container>)
  }
};

Box.propTypes = {
  fluid: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Box;
