import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import GatsbyLink from 'gatsby-link';
import { Date, Title, Copy } from './item.css';

const linkStyles = {
  textDecoration: 'none',
};

const Item = ({ frontmatter, showDate = true, showCopy = true }) => (
  <figure>
    <GatsbyLink to={frontmatter.slug} style={linkStyles}>
      <Img
        fluid={{...frontmatter.image.childImageSharp.fluid, aspectRatio: 1.4}}
        alt={frontmatter.title}
      />
      <figcaption>
        <Title>{frontmatter.title}</Title>
        {showDate ? (<Date>{frontmatter.date}</Date>) : null}
        {showCopy ? (<Copy>{frontmatter.copy}</Copy>) : null}
      </figcaption>
    </GatsbyLink>
  </figure>
);

Item.propTypes = {
  frontmatter: PropTypes.object.isRequired,
};

export default Item;
