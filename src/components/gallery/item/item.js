import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import GatsbyLink from 'gatsby-link';
import { Date, Title, Copy } from './item.css';

const linkStyles = {
  textDecoration: 'none'
};

const Item = ({ frontmatter }) => (
  <figure>
    <GatsbyLink to={frontmatter.slug} style={linkStyles}>
      <Img fluid={frontmatter.image.childImageSharp.fluid} alt={frontmatter.title} />
      <figcaption>
        <Title>{frontmatter.title}</Title>
        <Copy>{frontmatter.copy}</Copy>
        <Date>{frontmatter.date}</Date>
      </figcaption>
    </GatsbyLink>
  </figure>
);

Item.propTypes = {
  frontmatter: PropTypes.object.isRequired
};

export default Item;
