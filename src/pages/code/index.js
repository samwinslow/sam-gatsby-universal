import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import IOExample from 'components/io-example';
import Modal from 'containers/modal';
import { graphql } from 'gatsby';

const Code = ({ data }) => (
  <Layout active="/code">
    <Box fluid>
      <Title as="h2">
      Code
      </Title>
      <Gallery data={data.allMdx} showDate={false} />
    </Box>
  </Layout>
);

Code.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Code;

export const query = graphql`
  query CodeQuery {
    allMdx(
      filter: {
        frontmatter: {
          category: { eq: "code" }
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
