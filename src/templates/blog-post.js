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
  const isFullwidth = 
    post.frontmatter.slug.startsWith('work');
  const isFluid = 
    post.frontmatter.slug.startsWith('play');
  return (
    <Layout
      pageTitle={post.frontmatter.title}
      siteDescription={post.frontmatter.copy}
      imageUrl={post.frontmatter.image.publicURL}
    >
      <Box fullwidth={isFullwidth} fluid={isFluid}>
        <Title as="h2" size="large">
          {post.frontmatter.title}
        </Title>
        <PostDate>{post.frontmatter.date}</PostDate>
        <MDXRenderer>{post.body}</MDXRenderer>
      </Box>
    </Layout>
  );
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
        image {
          publicURL
        }
      }
    }
  }
`;

export default BlogPost;
