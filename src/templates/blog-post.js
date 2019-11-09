import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';

const BlogPost = ({ data }) => {
  const post = data.mdx
  return (
    <Layout>
      <Box>
        <Title as="h2" size="large">
          {post.frontmatter.title}
        </Title>
        <MDXRenderer>{post.body}</MDXRenderer>
      </Box>
    </Layout>
  )
};

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BlogPost;

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
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
`

