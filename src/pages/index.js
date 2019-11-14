import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import SectionTitle from 'components/section-title';
import Gallery from 'components/gallery';
import IOExample from 'components/io-example';
import Modal from 'containers/modal';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import _ from 'underscore';
import { graphql, StaticQuery } from 'gatsby';

const tempImgStyleProps = { width: '300px', };
const Index = ({ data }) => (
  <Layout>
    <Box fluid>
      <Img fluid={data.profileImage.childImageSharp.fluid} style={tempImgStyleProps} />
      <Title as="h1" leader={true}>
        I have lots of ideas,<br />
        I send well-written emails,<br />
        and I make things happen.<br />
      </Title>

      <SectionTitle as="h1" to="/work">things I’d put in a portfolio <span role="img" aria-label="">✨</span></SectionTitle>
      <Gallery data={data.workMdx} showDate={false} />

      <SectionTitle as="h1" to="/blog">things I’ve written <span role="img" aria-label="">📝</span></SectionTitle>
      <Gallery data={data.blogMdx} />

      <SectionTitle as="h1" to="/play">things I do when I’m bored <span role="img" aria-label="">🌴</span></SectionTitle>
      <Gallery data={data.playMdx} showDate={false} />
    </Box>
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    blogMdx: allMdx(
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
        ...itemFields
      }
    }
    workMdx: allMdx(
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
        ...itemFields
      }
    }
    playMdx: allMdx(
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
        ...itemFields
      }
    }
    profileImage: file(relativePath: {eq: "images/prof-vested.jpg" }) {
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
  fragment itemFields on MdxEdge {
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
`;
