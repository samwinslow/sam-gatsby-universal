import React from 'react';
import PropTypes from 'prop-types';
import Item from 'components/gallery/item';
import { Container } from './gallery.css';

const Gallery = ({ data, showDate = true }) => {
  const posts = data.edges;
  return (
    <Container>
      {posts.map(({ node: post }) => (
        <Item {...post} key={post.id} showDate={showDate} />
      ))}
    </Container>
  );
};

Gallery.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;
