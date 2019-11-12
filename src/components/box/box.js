import React from 'react';
import PropTypes from 'prop-types';
import { Container, ContainerFluid, ContainerFullwidth } from './box.css';

const Box = ({ fluid, children, fullwidth }) => {
  if (fullwidth) {
    return(<ContainerFullwidth>{children}</ContainerFullwidth>)
  } else if (fluid) {
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
