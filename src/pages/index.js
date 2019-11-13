import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import IOExample from 'components/io-example';
import Modal from 'containers/modal';
import { graphql } from 'gatsby';

const tempImgStyleProps = { width: '300px', };
const Index = ({ data }) => (
  <Layout>
    <Box fluid>
      <img src="/prof-vested.jpg" alt="" style={tempImgStyleProps} />
      <Title as="h2">
      I have lots of ideas,<br />
      I send well-written emails,<br />
      and I make things happen.<br />
      <b>Like magazines, and education for the 21st century, and many other things</b>.
      </Title>
      <Gallery data={data} />
    </Box>
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    allMdx(
      filter: {
        frontmatter: {
          category: { eq: "blog" }
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
