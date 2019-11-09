import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import GatsbyLink from 'gatsby-link';
import { Title, Copy } from './item.css';

const Item = ({ frontmatter }) => (
  <figure>
    <GatsbyLink to={frontmatter.slug}>
      <Img fluid={frontmatter.image.childImageSharp.fluid} alt={frontmatter.title} />
      <figcaption>
        <Title>{frontmatter.title}</Title>
      </figcaption>
    </GatsbyLink>
  </figure>
);

Item.propTypes = {
  frontmatter: PropTypes.object.isRequired
};

export default Item;
