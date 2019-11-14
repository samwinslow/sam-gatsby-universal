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
      Play (static-ish)
      </Title>
      <p>Go placidly amid the noise and haste, and remember what peace there may be in silence. As far as possible without surrender be on good terms with all persons. Speak your truth quietly and clearly; and listen to others, even the dull and the ignorant; they too have their story.</p>
      <Gallery data={data} />
    </Box>
  </Layout>
);

Play.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Play;

// Note: resolve category in query
export const query = graphql`
  query PlayQuery {
    allMdx(
      filter: {
        frontmatter: {
          category: { eq: "" }
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
                  tracedSVG
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
