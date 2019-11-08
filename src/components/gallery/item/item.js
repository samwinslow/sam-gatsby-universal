import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import GatsbyLink from 'gatsby-link';
import { Title, Copy } from './item.css';

const Item = ({ title, copy, image, link }) => (
  <figure>
    <GatsbyLink to="/blog/post-1/">
      <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
      <figcaption>
        <Title>{title}</Title>
        <Copy>{copy}</Copy>
      </figcaption>
    </GatsbyLink>
  </figure>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
  link: PropTypes.string
};

export default Item;
