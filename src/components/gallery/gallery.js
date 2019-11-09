import React from 'react';
import PropTypes from 'prop-types';
import Item from 'components/gallery/item';
import { Container } from './gallery.css';

const Gallery = ({ data }) => {
  const { edges: posts } = data.allMdx
  return (
    <Container>
      {posts.map(({ node: post }) => (
        <Item {...post} key={post.id} />
      ))}
    </Container>
  )
};

Gallery.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;
