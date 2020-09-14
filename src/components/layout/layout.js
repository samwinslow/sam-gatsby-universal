import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Head from 'components/head';
import Header from 'components/header';
import GlobalStyle from 'global.css.js';
import Footer from '../footer/footer';
import styled from 'styled-components';

const Layout = ({ data, children, active, siteUrl, siteDescription, pageTitle, imageUrl }) => (
  <div>
    <GlobalStyle />
    <Head
      siteTitle={data.site.siteMetadata.siteTitle}
      siteUrl="http://samwinslow.net/"
      siteDescription={siteDescription}
      pageTitle={pageTitle}
      imageUrl={"http://samwinslow.net" + imageUrl}
    />
    <Header title={data.site.siteMetadata.siteTitle} active={active} />
    <Container>
      {children}
    </Container>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
  active: PropTypes.string,
  siteUrl: PropTypes.string,
  siteDescription: PropTypes.string,
  pageTitle: PropTypes.string,
  imageUrl: PropTypes.string
};

const LayoutWithQuery = props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteTitle
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
);

LayoutWithQuery.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.string,
};

const Container = styled.div`
  padding-top: 6rem;
`

export default LayoutWithQuery;
