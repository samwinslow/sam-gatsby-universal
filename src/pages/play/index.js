import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import IOExample from 'components/io-example';
import Modal from 'containers/modal';
import { graphql } from 'gatsby';

const Play = ({ data }) => (
  <Layout active="/play">
    <Box fluid>
      <Title as="h2">
      Play
      </Title>
      <Gallery data={data.allMdx} />
    </Box>
  </Layout>
);

Play.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Play;

export const query = graphql`
  query PlayQuery {
    allMdx(
      filter: {
        frontmatter: {
          category: { eq: "play" }
        }
      }
      sort: {
        fields: [frontmatter___date]
        order: DESC
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            slug
            date(formatString: "MMM. D, YYYY")
            title
            category
            copy
            image {
              publicURL
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
        }
      }
    }
  }
`;
