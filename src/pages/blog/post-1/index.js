import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const Post1 = ({ data }) => (
  <Layout>
    <Head pageTitle={data.post1Json.title} />
    <Box>
      <div dangerouslySetInnerHTML={{ __html: data.post1Json.content.childMarkdownRemark.html }}></div>
    </Box>
  </Layout>
);

Post1.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Post1;

export const query = graphql`
  query Post1Query {
    post1Json {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;