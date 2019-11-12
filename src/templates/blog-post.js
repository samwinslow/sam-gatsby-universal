import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import { PostDate } from './blog-post.css';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';

const BlogPost = ({ data }) => {
  const post = data.mdx;
  const isWork = post.frontmatter.slug.startsWith('work')
  return (
    <Layout>
      <Box fullwidth={isWork}>
        <PostDate>{post.frontmatter.date}</PostDate>
        <Title as="h2" size="large">{post.frontmatter.title}</Title>
        <MDXRenderer>{post.body}</MDXRenderer>
      </Box>
    </Layout>
  )
};

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        slug
        date(formatString: "MMM. D, YYYY")
        title
        copy
      }
    }
  }
`

export default BlogPost;

