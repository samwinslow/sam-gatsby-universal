import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from './image-grid.css';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

const ImageGrid = ({ sourcePath = '/', items, data }) => {
  return (
    <Grid>
      {items.map((item) =>
        <div key={item.id}>
          <StaticQuery
            query={graphql`
              query ImageGridItemQuery {
                profileImage: file(relativePath: {eq: "${sourcePath + '/' + item}" }) {
                  childImageSharp {
                    fluid {
                      base64
                      aspectRatio
                      src
                      srcSet
                      srcWebp
                      srcSetWebp
                      sizes
                      originalImg
                      originalName
                      presentationWidth
                      presentationHeight
                    }
                  }
                }
              }
            `}
            render={data => (
              <Img fluid={data.profileImage.childImageSharp.fluid} alt="" />
            )}
          />
        </div>
      )}
    </Grid>
  );
};

ImageGrid.propTypes = {
  sourcePath: PropTypes.string,
  items: PropTypes.object.isRequired,
};

export default ImageGrid;
