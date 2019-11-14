import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import IOExample from 'components/io-example';
import Modal from 'containers/modal';
import { graphql } from 'gatsby';

const Work = ({ data }) => (
  <Layout active="/work">
    <Box fluid>
      <Title as="h2">
      Work
      </Title>
      <Gallery data={data.allMdx} showDate={false} />
    </Box>
  </Layout>
);

Work.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Work;

export const query = graphql`
  query WorkQuery {
    allMdx(
      filter: {
        frontmatter: {
          category: { eq: "work" }
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
