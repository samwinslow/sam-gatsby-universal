import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import GatsbyLink from 'gatsby-link';
import { ItemContainer, Date, Title, Copy } from './item.css';

const linkStyles = {
  textDecoration: 'none',
};

const Item = ({ frontmatter, showDate = true, showCopy = true }) => (
  <ItemContainer>
    <GatsbyLink to={frontmatter.slug} style={linkStyles}>
      <figcaption>
        <div>
          <Title>{frontmatter.title}</Title>
          {showDate ? (<Date>{frontmatter.date}</Date>) : null}
        </div>
        {showCopy ? (<Copy>{frontmatter.copy}</Copy>) : null}
      </figcaption>
    </GatsbyLink>
  </ItemContainer>
);

Item.propTypes = {
  frontmatter: PropTypes.object.isRequired,
};

export default Item;
