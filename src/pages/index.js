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
import Thumbnails from '../components/thumbnails/thumbnails';
import ReactRotatingText from 'react-rotating-text';

const tempImgStyleProps = { width: '300px', };
const Index = ({ data }) => (
  <Layout>
    <Box fluid>
      <Link rel="/about" style={{
        textDecoration: 'none'
      }}>
        <Img fluid={data.profileImage.childImageSharp.fluid} style={tempImgStyleProps} />
        <Title as="h1" leader={true}>
          I am a <br />
          <ReactRotatingText items={[
            'founder',
            'designer',
            'technologist',
            'student',
            'doer',
          ]} />
        </Title>
      </Link>

      <SectionTitle as="h1" to="/blog">writing <span role="img" aria-label="">📝</span></SectionTitle>
      <Thumbnails data={data.blogMdx} />

      <SectionTitle as="h1" to="/work">design <span role="img" aria-label="">✨</span></SectionTitle>
      <Gallery data={data.workMdx} showDate={false} showCopy={false} />

      <SectionTitle as="h1" to="/code">code <span role="img" aria-label="">👨‍💻</span></SectionTitle>
      <Gallery data={data.codeMdx} showDate={false} showCopy={false} />

      <SectionTitle as="h1" to="/play">just for fun <span role="img" aria-label="">🌴</span></SectionTitle>
      <Gallery data={data.playMdx} showDate={false} showCopy={false} />
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
      limit: 3
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
      limit: 3
    ) {
      edges {
        ...itemFields
      }
    }
    codeMdx: allMdx(
      filter: {
        frontmatter: {
          category: { eq: "code" }
        }
      }
      sort: {
        fields: [frontmatter___date]
        order: DESC
      }
      limit: 3
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
      limit: 3
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
