import React from 'react';
import PropTypes from 'prop-types';
import Item from './item/item';
import GatsbyLink from 'gatsby-link';
import { Container, SeeAll } from './thumbnails.css';

const Thumbnails = ({ data, showDate = true, showCopy = true }) => {
  const posts = data.edges;
  const linkStyles = {
    textDecoration: 'none',
    color: 'inherit',
    display: 'block',
    padding: '1rem 0'
  };

  return (
    <Container>
      {posts.map(({ node: post }) => (
        <Item 
          {...post}
          key={post.id}
          showDate={showDate}
          showCopy={showCopy}
        />
      ))}
      <SeeAll>
        <GatsbyLink to="/blog" style={linkStyles}>See all &rarr;</GatsbyLink>
      </SeeAll>
    </Container>
  );
};

Thumbnails.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Thumbnails;
